import {BASEURL} from "../commons/Config"

const CARTURL = `${BASEURL}/api/cartinfo`

export default {
    /**
     * 获取店铺信息
     */
    getCartinfoByUserId(cb) {
        fetch('http://122.51.57.152:3000/api/cartinfo').then(res=>{
            res.json().then(cb)
        })
    }
}