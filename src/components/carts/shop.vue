<template>   
        <div class="shop-group-item">
            <div class="shop-name">
                <input type="checkbox"
                       v-model="data.checked"
                       @change="shopChecked(sid)"
                       class="check goods-check shopCheck">
                <h4>
                    <a href="#">{{data.shopName}}</a>
                </h4>
                <div class="coupons">
                    <span>领券</span>
                    <em>|</em>
                    <span>编辑</span>
                </div>
            </div>
                <jx-shop-product-list @pAll="pAll" v-if="data.products" :data="data.products" :sid="sid"></jx-shop-product-list>
            <div class="shopPrice">
                本店总计：
                ￥<span class="shop-total-amount ShopTotal">16000</span>
            </div>
        </div>
</template>

<script>
    import list from "./products/list" 
    export default {
        name:"shop",
        components:{
            "jx-shop-product-list":list
        },
        props:["data","sid"],
        methods:{
            shopChecked(sid){
                this.$emit("sAll",sid)
            },
            pAll(sid){
                this.$emit("pAll",sid)
            }
        }
    }
</script>

<style scoped>

</style>