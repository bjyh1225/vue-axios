import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   // methods: 'post'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   params: {
//     type: 'pop',
//     page: 1
//   }  
// }).then(res => {
//   console.log(res);
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeOut = 5000

// axios.all([axios({
//   url: '/home/multidata',
// }), axios({
//   url: '/home/data?type=sell&page=3',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

import {request} from './network/request';

// request ({
//   url: '/home/multidate'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function(err) {

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})