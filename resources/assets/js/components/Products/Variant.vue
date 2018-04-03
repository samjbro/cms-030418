<template>
    <section class="variant">
        <page-header>
            <span slot="title">
                {{product.title}}: {{variant.name}}
            </span>
        </page-header>
        <div class="variant__content">
            <div class="variant__attribute" v-for="(value, name) in attributes">
                <div class="variant__name">{{name}}:</div>
                <div class="variant__value">{{value}}</div>
            </div>
        </div>
    </section>
</template>

<script>
    import stub from '@/stores/stubs/variant';
    import {event} from '@/services';
    import PageHeader from '@/components/Shared/PageHeader';

    export default {
        components: {PageHeader},

        data() {
            return {
                variant: stub
            }
        },

        computed: {
            product() {
                return this.variant.product;
            },
            attributes() {
                let variant = Object.assign({}, this.variant);
                delete variant.product;
                return variant;
            }
        },

        created() {
            event.on('load-main-content:view', (view, variant) => {
                if (view === 'variant') {
                    this.variant = variant;
                }
            })
        }
    }
</script>

<style lang="scss">
    .variant {
        &__content {
            padding: 1rem;
        }
        &__attribute {
            white-space: nowrap;
        }
        &__name,
        &__value {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &__name {
            width: 15%;
            text-transform: uppercase;
        }
    }
</style>