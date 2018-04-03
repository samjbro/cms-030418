import {loadMainContent} from '@/utils';
import {productStore, variantStore, categoryStore} from "@/stores";

export const router = {
    routes: {
        '/home'() {
            loadMainContent('home');
        },
        '/products'() {
            loadMainContent('products');
        },
        '/categories'() {
            loadMainContent('categories');
        },
        '/products/([a-z_0-9]+)'(url_stub) {
            const product = productStore.byStub(url_stub);
            loadMainContent('product', product);
        },
        '/products/([a-z_0-9]+)/([a-z_0-9]+)'(product_stub, variant_stub) {
            const variant = variantStore.byStub(variant_stub);
            loadMainContent('variant', variant);
        },
        '/categories/([a-z_0-9]+)'(url_stub) {
            const category = categoryStore.byStub(url_stub);
            loadMainContent('category', category);
        },
    },

    init() {
        this.loadState();
        window.addEventListener('popstate', () => this.loadState());
    },

    loadState() {
        Object.keys(this.routes).forEach(route => {
           const matches = location.hash.match(new RegExp(`^#!${route}$`));
           if (matches) {
               const params = matches.slice(1);
               this.routes[route](...params);
           }
        });
    }
};