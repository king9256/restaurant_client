import Vue from 'vue'
//导入路由
import router from 'vue-router'
import details from "@/components/details";
import indexPage from "@/components/indexPage";

//Vue全局使用Router
Vue.use(router)

export default new router({
    routes: [
        {
            path: "/",
            name: 'login',
            component: indexPage
        },
        {
            path: "/details",
            name: "details",
            component: details
        }

    ]
})