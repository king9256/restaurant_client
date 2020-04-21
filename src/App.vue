<template>
    <div id="app">
        <login/>
    </div>
</template>

<script>
    import login from "@/components/indexPage";

    export default {
        name: 'App',
        components: {
            login
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
