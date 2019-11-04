<template>
    <div v-if="cartInfo.shops">
      <jx-cart-header></jx-cart-header>
      <div class="shopping">
        <jx-cart-shop @pAll="productSelectAll" @sAll="sSelectAll" :data="shop" :sid="sid" v-if="cartInfo.shops" v-for="(shop,sid) in cartInfo.shops" :key="sid"></jx-cart-shop>
      </div>
      <jx-cart-footer @cAll="shopSelectAll" v-if="cartInfo.shops" :data="cartInfo"></jx-cart-footer>
    </div>
    <jx-loading v-else></jx-loading>

</template>

<script>
  import loading from "./components/commom/loading"
  import cartApi from "../apis/cartApi"
  import header from "./components/carts/header"
  import footer from "./components/carts/footer"
  import shop from "./components/carts/shop"
export default {
    name: 'app',
    components: {
        "jx-cart-header":header,
        "jx-cart-footer":footer,
        "jx-cart-shop":shop,
        "jx-loading":loading
  },
  data() {
    return {
      cartInfo:[]  //页面的数据模型
    }
  },
  methods:{
    /**
     * 页面数据加载
     */
    _aaa() {
      cartApi.getCartinfoByUserId(data=>{
        console.log(data)
        this.cartInfo = data;
      })
    },
    /**
     * 购物车全选反选
     */
    shopSelectAll(){
      let checked = this.cartInfo.checked;
      console.log(checked)
      this.cartInfo.shops.forEach((shop,sid)=>{
        shop.checked = checked;
        shop.products.forEach((product,pid)=>{
          product.checked = checked;
        })
      })
    },
    /**
     * 单店铺的全选与反选
     */
    sSelectAll(sid) {
      let checked = this.cartInfo.shops[sid].checked;
      // console.log(checked)
      this.cartInfo.shops[sid].products.forEach((product,pid)=>{
        product.checked = checked;
      })
    },
    /**
     * 单选状态的改变
     */
    productSelectAll(sid){
      let checked = this.cartInfo.shops[sid].products.every((product,pid,nArr)=>{
          return product.checked == true
      })

      this.cartInfo.shops[sid].checked = checked;

      let schecked = this.cartInfo.shops.every((shop,sid,nArr)=>{
        // console.log(shop.checked)
          return shop.checked == true
      })

      this.cartInfo.checked = schecked;
    },
    /**
     * 增加数量
     */
    updataQal(sid,pid,flag){
      // console.log(sid,pid)
      if(flag == "add"){
        this.cartInfo.shops[sid].products[pid].qal++
      }else{
        if(this.cartInfo.shops[sid].products[pid].qal <= 1){
          this.cartInfo.shops[sid].products[pid].qal = 1
        }else{
          this.cartInfo.shops[sid].products[pid].qal--
        }    
      }
    }
  },
  created() {
    this._aaa()
  },
  mounted(){
    this.$bus.$on("qal",this.updataQal)
  }
}
</script>

<style>

</style>
