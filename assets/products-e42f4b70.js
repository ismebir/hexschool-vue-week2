import"./modulepreload-polyfill-3cfb730f.js";import{createApp as e}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";e({data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"anan56",products:[],tempProduct:{}}},methods:{checkAdmin(){const t=`${this.apiUrl}/api/user/check`;axios.post(t).then(()=>{this.getData()}).catch(a=>{alert(a.data.message),window.location="index.html"})},getData(){const t=`${this.apiUrl}/api/${this.apiPath}/admin/products`;axios.get(t).then(a=>{this.products=a.data.products}).catch(a=>{alert(a.data.message)})},productsDetail(t){this.tempProduct=t}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)ananToken\s*=\s*([^;]*).*$)|^.*$/,"$1");axios.defaults.headers.common.Authorization=t,this.checkAdmin()}}).mount("#app");