<template>
    <section class="products">
        <page-header><span slot="title">Products</span></page-header>
        <div class="products__body">
            <product-list :products="products" />
        </div>
    </section>
</template>

<script>
    import {productStore} from '@/stores';
    import PageHeader from '@/components/Shared/PageHeader';
    import ProductList from '@/components/Products/ProductList';
    export default {
        components: {PageHeader, ProductList},
        data() {
            return {
                state: productStore.state
            }
        },
        computed: {
            products() {
                return this.state.products;
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";
    .products {
        height: 100%;

        &__body {
        height: calc(100% - #{$header-height});
        }
    }
</style>