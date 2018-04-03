<template>
    <section class="page-header">
        <h1 class="page-header__title">
            <slot name="title"></slot>
        </h1>
    </section>
</template>

<style lang="scss">
    @import "~#/vars";
    .page-header {
        line-height: $header-height;
        border-bottom: 1px solid $color-primary;

        &__title {
            text-align: center;
            font-size: 3rem;
            font-weight: lighter;
            padding-left: 1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;

        }
    }
</style>