<template>
    <div id="error-404">
        <h1>The page you’re looking for can’t be&nbsp;found.</h1>
    </div>
</template>

<script>
    export default {
        name: "error_404"
    }
</script>

<style scoped lang="scss">
    #error-404 {
        h1 {
            display: block;
            text-align: center;
            font-weight: 600;
            color: #111;
            @media only screen and (max-width: 735px) {
                /*small*/
                width: 330px;
                font-size: 32px;
                margin: 50px auto;
            }
            @media only screen and (min-width: 736px) and (max-width: 1068px) {
                /*medium*/
                width: 420px;
                font-size: 40px;
                margin: 90px auto;
            }
            @media only screen and (min-width: 1069px) {
                /*large*/
                width: 560px;
                font-size: 48px;
                margin: 140px auto;
            }
        }
    }
</style>
