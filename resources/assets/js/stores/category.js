import stub from './stubs/category';
export const categoryStore = {
    stub,
    state: {
        categories: [stub]
    },
    init(categories) {
        this.all = categories;
        this.all.forEach(category => {
            this.setupCategory(category);
        })
    },

    setupCategory(category) {
        Vue.set(category, 'products', []);
        return category;
    },

    set all(value) {
        this.state.categories = value;
    },

    get all() {
        return this.state.categories;
    },

    byId(id) {
        return this.all.find(category => category.id == id);
    },

    byStub(stub) {
        return this.all.find(category => category.url_stub == stub);
    }
};