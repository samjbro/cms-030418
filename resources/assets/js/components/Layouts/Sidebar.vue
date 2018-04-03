<template>
    <section class="sidebar" @mouseleave="hideSecondary">
        <div class="sidebar__primary">
            <div class="sidebar__head">
                <div class="sidebar__title">SMS</div>
            </div>
            <div class="sidebar__body">
                <nav class="sidebar__nav">
                    <a href="#!/home" class="sidebar__link">Home</a>
                    <a href="#!/products" class="sidebar__link" @mouseover="showSecondary('products')">Products</a>
                    <a href="#!/categories" class="sidebar__link" @mouseover="showSecondary('categories')">Categories</a>
                </nav>
            </div>
        </div>
        <div :class="['sidebar__secondary', {'sidebar__secondary--showing': showingSecondary}]">
            <div class="sidebar__head">
                <div class="sidebar__title">{{secondary.title}}</div>
            </div>
            <div class="sidebar__body">
                <virtual-scroller class="sidebar__items" content-tag="ul" :items="secondary.items" item-height="30">
                    <template slot-scope="props">
                        <li class="sidebar__item" @click="visitItem(props.item)">{{props.item.title}}</li>
                    </template>
                </virtual-scroller>
            </div>
        </div>
    </section>
</template>

<script>
    import {productStore, categoryStore} from "@/stores";
    import {event} from '@/services';
    export default {
        data() {
            return {
                showingSecondary: false,
                secondary: {
                    title: null,
                    items: [{name: null}]
                }
            }
        },
        methods: {
            showSecondary(name) {
                this.showingSecondary = true;
                this.secondary.title = name;
                switch(name) {
                    case 'products':
                        this.secondary.items = productStore.all;
                        break;
                    case 'categories':
                        this.secondary.items = categoryStore.all;
                        break;
                    default:
                        break;
                }
            },
            hideSecondary() {
                this.showingSecondary = false;
                this.resetSecondary();
            },
            resetSecondary() {
                this.secondary = {
                    title: null,
                    items: [{name: null}]
                };
            },
            visitItem(item) {
                location.hash = '!/' + this.secondary.title + '/' + item.url_stub;
            }
        },
        created() {
            event.on('app-ready', () => {
            });
        }
    }
</script>

<style lang="scss">
    @import "~#/vars";

    .sidebar {
        color: $color-white;
        display: flex;
        flex: 0 0 $sidebar-width;

        &__primary {
            background-color: $color-primary;
            flex: 1;
            position: relative;
            z-index: 999;
        }

        &__secondary {
            position: absolute;
            top: 0;
            bottom: 0;
            width: $sidebar-secondary-width;
            left: calc(#{$sidebar-width} - #{$sidebar-secondary-width});
            z-index: 998;
            background-color: darken($color-primary, 10%);
            transition: all .5s;

            &--showing {
                transform: translateX($sidebar-secondary-width);
            }
        }
        &__items {
            overflow: auto;
            position: absolute;
            top: $header-height;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;

            .item-container {
                width: 100%;
                position: absolute;
            }
        }

        &__item {
            padding-left: .5rem;
            width: 100%;
            line-height: 3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;

            &:hover {
                background-color: darken($color-primary, 40%);
            }
        }

        &__title {
            font-size: 2.5rem;
            padding: 1rem;
            text-transform: uppercase;
        }

        &__head {
            border-bottom: 1px solid darken($color-primary, 20%);
        }

        &__body {
            height: 100%;
        }

        &__link {
            display: block;
            padding: .5rem 0 .5rem 1rem;
            text-decoration: none;
            color: inherit;
            font-size: 2rem;
            border-left: .5rem solid transparent;

            &:hover {
                border-left-color: $color-secondary;
                background-color: lighten($color-primary, 5%);
            }
        }
    }
</style>