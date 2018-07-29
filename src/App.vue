<template>
    <div id="app">
        <header-bar/>
        <router-view/>
        <footer-section/>
    </div>
</template>

<script>
    import HeaderBar from './components/common/HeaderBar';
    import FooterSection from './components/common/FooterSection';
    export default {
        name: 'App',
        components: {
            HeaderBar,
            FooterSection
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        #app {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #555b65;
            @media screen and (max-width: 767px){
                padding-top: 48px;
            }
            padding-top: 44px;
        }
    }
</style>
