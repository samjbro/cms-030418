import stub from './stubs/product';
import {categoryStore} from "./category";
export const productStore = {
    stub,
    state: {
        products: [stub]
    },
    init(products) {
        this.all = products;
        this.all.forEach(product => this.setupProduct(product));
    },

    setupProduct(product) {
        const category = categoryStore.byId(product.category_id);
        category.products = [...new Set(category.products.concat([product]))];

        Vue.set(product, 'variants', []);
        return product;
    },

    set all(value) {
        this.state.products = value;
    },

    get all() {
        return this.state.products;
    },

    byStub(url_stub) {
        return this.all.find(product => product.url_stub === url_stub);
    },

    byId(id) {
        return this.all.find(product => product.id == id);
    }
};