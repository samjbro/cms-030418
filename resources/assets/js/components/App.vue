<template>
    <section class="app">
        <sidebar/>
        <main-content/>
    </section>
</template>

<script>
    import {router, event} from '@/services';
    import {sharedStore} from "@/stores";
    import Sidebar from '@/components/Layouts/Sidebar';
    import MainContent from '@/components/Layouts/MainContent';
    export default {
        components: {Sidebar, MainContent},

        mounted() {
            this.init();
        },

        methods: {
            async init() {
                try {
                    await sharedStore.init();
                    router.init();
                    event.emit('app-ready');
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="scss">
    .app {
        height: 100vh;
        display: flex;
    }
</style>