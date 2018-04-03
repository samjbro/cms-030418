import stub from './stubs/variant';
import {productStore} from ".";

export const variantStore = {
    stub,
    state: {
        variants: [stub]
    },

    init(variants) {
        this.all = variants;
        this.all.forEach(variant => this.setupVariant(variant));
    },

    setupVariant(variant) {
        const product = productStore.byId(variant.product_id);
        product.variants = [...new Set(product.variants.concat([variant]))];
        Vue.set(variant, 'product', product);
        return variant;
    },

    set all(value) {
        this.state.variants = value;
    },
    get all() {
        return this.state.variants;
    },

    byStub(stub) {
        return this.all.find(variant => variant.url_stub === stub);
    }
};