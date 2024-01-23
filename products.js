import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'anan56',
            products: [],
            tempProduct: {},
        }
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
                .then(() => {
                    this.getData();
                })
                .catch((err) => {
                    alert(err.data.message);
                    window.location = 'index.html';
                })
        },
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
                .then((res) => {
                    this.products = res.data.products;
                })
                .catch((err) => {
                    alert(err.data.message);
                })
        },
        productsDetail(item) {
            this.tempProduct = item;
        },
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)ananToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;

        this.checkAdmin()
    }
}).mount('#app');

