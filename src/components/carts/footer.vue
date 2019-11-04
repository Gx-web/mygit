<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" @change="selectAll" v-model="data.checked" class="check goods-check"/>
            全选
        </div>
        <div class="shop-total">
            <strong>
                总价：
                <i id="AllTotal" class="total">{{data | countPrice}}</i>
            </strong>
            <span>减免：100</span>
        </div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>

<script>
    export default {
        name:"vfooter",
        props:["data"],
        methods:{
            selectAll(){
                this.$emit("cAll")
            }
        },
        filters:{
            countPrice(cartinfo) {
                let total = 0
            //   console.log(cartinfo.shops);
              
                // if(cartinfo.products) {
                    cartinfo.shops.forEach((shop,sid)=>{
                        shop.products.forEach((product,pid)=>{
                            if(product.checked) {
                                total += product.price * product.qal
                            } 
                        })
                    })
                // }
                return total
            }
        }
    }
</script>

<style scoped>

</style>