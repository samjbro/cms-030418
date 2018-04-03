<template>
    <section class="main-content">
        <home v-show="currentView === 'home'" />
        <products v-show="currentView === 'products'" />
        <categories v-show="currentView === 'categories'" />
        <product v-show="currentView === 'product'" />
        <category v-show="currentView === 'category'" />
        <variant v-show="currentView === 'variant'" />
    </section>
</template>

<script>
    import {event} from '@/services';

    import Home from '@/components/Home';
    import Products from '@/components/Products';
    import Categories from '@/components/Categories';
    import Product from '@/components/Products/Product';
    import Category from '@/components/Categories/Category';
    import Variant from '@/components/Products/Variant';
    export default {
        components: {Home, Products, Categories, Product, Category, Variant},

        data() {
            return {
                currentView: 'home'
            }
        },

        created() {
            event.on('load-main-content:view', view => {
               this.currentView = view;
            });
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";
    .main-content {
        flex: 1;
        max-width: calc(100% - #{$sidebar-width});
    }
</style>