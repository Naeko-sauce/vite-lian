import { createRouter, createWebHashHistory } from 'vue-router';
import luyou from "./routes"
let router = createRouter({
    history: createWebHashHistory(),
    routes: luyou,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }

})
export default router;