<template>
  <li>
    <div class="shop-info">
      <input @change="pSelected(sid)" type="checkbox" v-model="data.checked" class="check goods-check goodsCheck" />
      <div class="shop-info-img">
        <a href="#">
          <img :src="data.pic" />
        </a>
      </div>
      <div class="shop-info-text">
        <h4>
          {{data.title}}
        </h4>
        <div class="shop-brief">
          <span>{{data.weight}}</span>
          <span>{{data.color}}</span>
          <span>{{data.ver}}</span>
        </div>
        <div class="shop-price">
          <div class="shop-pices">
            ￥
            <b class="price">{{data.price}}</b>
          </div>
          <div class="shop-arithmetic">
            <a class="minus" @click.prevent="addQal(sid,pid,'minus')">-</a>
            <span class="num">{{data.qal}}</span>
            <a class="plus" @click.prevent="addQal(sid,pid,'add')">+</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>



<script>
    export default {
        name:"item",
        props:["data","pid","sid"],
        methods:{
          pSelected(sid){
            this.$emit("pAll",sid)
          },
          addQal(sid,pid,flag){
            this.$bus.$emit("qal",sid,pid,flag)
          }
        }
    }
</script>


<style scoped>

</style>