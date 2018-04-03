<template>
    <section class="categories">
        <page-header><span slot="title">All Categories</span></page-header>
    </section>
</template>

<script>
    import {event} from '@/services';
    import stub from '@/stores/stubs/category';
    import PageHeader from '@/components/Shared/PageHeader';
    export default {
        components: {PageHeader},
        data() {
            return {
                category: stub
            }
        },

        created() {
        }
    }
</script>