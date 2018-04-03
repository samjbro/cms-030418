<template>
    <section class="product">
        <page-header><span slot="title">{{product.title}}</span></page-header>
        <div class="product__body">
            <table class="product__attributes">
                <tr v-for="(attribute, name) in productAttributes" class="product__attribute">
                    <td class="product__key">{{name | naturalCase}}:</td>
                    <td class="product__value">{{attribute}}</td>
                </tr>
            </table>
            <div class="product__section">
                <div class="product__section-header">
                    Variants
                </div>
                <variant-list :variants="product.variants"/>
            </div>
        </div>
    </section>
</template>

<script>
    import variant from '@/stores/stubs/variant';
    import {productStore} from "../../stores";
    import stub from '@/stores/stubs/product';
    import {event} from '@/services';
    import PageHeader from '@/components/Shared/PageHeader';
    import VariantList from '@/components/Products/VariantList';

    export default {
        components: {PageHeader, VariantList},
        data() {
            return {
                product: stub,
            }
        },
        filters: {
            naturalCase(string) {
                return string.split('_').map(word => {
                    return word[0].toUpperCase() + word.slice(1);
                }).join(' ');
            }
        },
        computed: {
            productAttributes() {
                let product = Object.assign({}, this.product);
                product.created_at = moment(product.created_at).format('Do MMMM YYYY');
                delete product.updated_at;
                delete product.variants;
                return product;
            }
        },
        created() {
            event.on('load-main-content:view', (view, product) => {
                if (view === 'product') {
                    this.product = product;
                }
            })
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";
    .product {
        height: 100%;
        &__body {
            padding: 1rem;
            height: calc(100% - #{$header-height});
        }

        &__attributes {
            height: 20%;
        }

        &__key {
            width: 15%;
            padding-right: 1rem;
        }

        &__section {
            padding-top: 1rem;
            height: 80%;
        }

        &__section-header {
            font-size: 2.5rem;
            text-align: center;
            border-bottom: 1px solid $color-primary;
            height: 3rem;
        }
    }
</style>