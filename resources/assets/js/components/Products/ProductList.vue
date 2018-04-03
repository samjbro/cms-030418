<template>
    <section class="product-list">
        <table class="product-list__head">
            <tr>
                <th class="product-list__col product-list__col--id">#</th>
                <th class="product-list__col product-list__col--title">Title</th>
                <th class="product-list__col product-list__col--overview">Overview</th>
            </tr>
        </table>
        <virtual-scroller class="product-list__body" content-tag="table" :items="products" item-height="35">
            <template slot-scope="props">
                <tr class="product-list__item" :key="props.itemKey" @click="showProduct(props.item.url_stub)">
                    <td class="product-list__col product-list__col--id">{{props.item.id}}</td>
                    <td class="product-list__col product-list__col--title">{{props.item.title}}</td>
                    <td class="product-list__col product-list__col--overview">{{props.item.overview}}</td>
                </tr>
            </template>
        </virtual-scroller>
    </section>
</template>

<script>
    export default {
        props: {
            products: {type: Array, required: true}
        },
        methods: {
            showProduct(url_stub) {
                location.hash = '!/products/' + url_stub;
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";
    .product-list {
        position: relative;
        height: 100%;

        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
        }

        &__head {
            position: absolute;
            top: 0;
            height: 3rem;
            background-color: rgba($color-primary, .2);
        }

        &__body {
            overflow: auto;
            position: absolute;
            top: 3rem;
            left: 0;
            right: 0;
            bottom: 0;

            .item-container {
                position: absolute;
            }

        }

        &__item {
            height: 3.5rem; // Must match item-height attribute of virtual-scroller
            cursor: pointer;

            &:hover {
                background-color: rgba($color-primary, .4s);
            }
        }

        &__col {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left: .5rem;

            &--id {
                width: 5%;
            }
            &--title {
                width: 15%;
            }
            &--overview {
                width: 80%;
            }
        }
    }
</style>