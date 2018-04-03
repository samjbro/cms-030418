<template>
    <section class="categories">
        <page-header><span slot="title">
        {{category.title}}

        </span></page-header>
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
            event.on('load-main-content:view', (view, category) => {
                if (view === 'category') {
                    this.category = category;
                }
            });
        }
    }
</script>