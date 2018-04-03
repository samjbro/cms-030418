<template>
    <section class="variant-list">
        <table class="variant-list__head">
            <tr>
                <th class="variant-list__col variant-list__col--id">#</th>
                <th class="variant-list__col variant-list__col--stock-id">Stock ID</th>
                <th class="variant-list__col variant-list__col--name">Name</th>
            </tr>
        </table>
        <virtual-scroller :items="variants" class="variant-list__body" content-tag="table" item-height="35">
            <template slot-scope="props">
                <tr :key="props.itemKey" class="variant-list__item" @click="showVariant(props.item.id)">
                    <td class="variant-list__col variant-list__col--id">{{props.item.id}}</td>
                    <td class="variant-list__col variant-list__col--stock-id">{{props.item.stock_id}}</td>
                    <td class="variant-list__col variant-list__col--name">{{props.item.name}}</td>
                </tr>
            </template>
        </virtual-scroller>
    </section>
</template>

<script>
    export default {
        props: {
            variants: {type: Array, required: true}
        },
        methods: {
            showVariant(id) {
                location.hash = location.hash
                    + "/" + this.variants.find(variant => variant.id === id).url_stub;
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";

    .variant-list {
        position: relative;
        height: 100%;
        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
        }

        &__col {
            text-align: center;

            &--id {
                width: 10%;
            }
            &--stock-id {
                width: 15%;
            }
            &--name {
                width: 25%;
            }
        }

        &__head {
            height: 2rem;
            background-color: rgba($color-primary, .4);
        }

        &__body {
            overflow: auto;
            position: absolute;
            top: 2rem;
            right: 0;
            bottom: 2rem;
            left: 0;
        }

        &__item {
            height: 3.5rem;
            cursor: pointer;
            &:hover {
                background-color: rgba($color-primary, .5);
            }
        }
    }
</style>