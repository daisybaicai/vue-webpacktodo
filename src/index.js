import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)

// {
// render: function(createElement) {
//     return createElement(App);
// }
// }

// Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。
// new Vue时，el和$mount并没有本质上的不同。