<template>
    <ul>
        <jx-shop-product @pAll="pAll" :data="product" :pid="pid" :sid="sid" v-for="(product,pid) in data" :key="pid"></jx-shop-product>
    </ul>
</template>

<script>
    import item from "./item"
    export default {
        name:"list",
        components:{
            "jx-shop-product":item
        },
        props:["data","sid"],
        methods:{
            pAll(sid){
                this.$emit("pAll",sid)
            }
        }
    }
</script>