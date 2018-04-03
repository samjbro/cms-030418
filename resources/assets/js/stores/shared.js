import axios from 'axios';
import {categoryStore, productStore, variantStore} from '.';

export const sharedStore = {
    state: {
        categories: [],
        products: [],
        variants: []
    },
    init() {
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'get',
                url: 'data'
            }).then(({data}) => {
                this.state = Object.assign(this.state, data);
                categoryStore.init(this.state.categories);
                productStore.init(this.state.products);
                variantStore.init(this.state.variants);
                resolve(this.state);
            }).catch(error => {
                reject(error);
            })
        });
    }
}