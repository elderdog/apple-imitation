<template>
    <div id="home">
        <ul class="unit-list">
            <li v-for="image in images">
                <div class="unit-wrapper">
                    <p class="title">{{image.title}}</p>
                    <p class="description">{{image.description}}</p>
                    <div class="unit-image-wrapper">
                        <figure class="unit-image sm" :style="{backgroundImage:'url(' + image.url_sm + ')'}"></figure>
                        <figure class="unit-image md" :style="{backgroundImage:'url(' + image.url_md + ')'}"></figure>
                        <figure class="unit-image md-tl" :style="{backgroundImage:'url(' + image.url_mdtl + ')'}"></figure>
                        <figure class="unit-image lg" :style="{backgroundImage:'url(' + image.url_lg + ')'}"></figure>
                        <figure class="unit-image lg-tl" :style="{backgroundImage:'url(' + image.url_lgtl + ')'}"></figure>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="promo-list">
            <li v-for="promo in promos">
                <div class="promo-wrapper">
                    <div class="info">
                        <p class="title">{{promo.title}}</p>
                        <p class="description">{{promo.description}}</p>
                    </div>
                    <div class="promo-image-wrapper">
                        <figure class="promo-image sm" :style="{backgroundImage:'url(' + promo.url_sm + ')'}"></figure>
                        <figure class="promo-image md" :style="{backgroundImage:'url(' + promo.url_md + ')'}"></figure>
                        <figure class="promo-image lg" :style="{backgroundImage:'url(' + promo.url_lg + ')'}"></figure>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                images: [],
                promos: []
            };
        },
        mounted() {
            let _this = this;
            _this.loadData();
        },
        methods: {
            loadData() {
                let _this = this;
                _this.$service.url = _this.$api.home;
                _this.$service.get(
                    null,
                    response => {
                        console.log(response);
                        _this.images = response.data.images;
                        _this.promos = response.data.promos;
                    }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    #home {
        .unit-list {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                margin-bottom: 12px;
                &:last-child {
                    p {
                        color: #111;
                    }
                }
            }
            .unit-wrapper {
                font-size: 0;
                position: relative;
                p {
                    position: relative;
                    margin: 0;
                    text-align: center;
                    color: white;
                    z-index: 100;
                    line-height: 1;
                }
                .unit-image-wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    .unit-image {
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        display: none;
                        background: no-repeat center center;
                        background-size: cover;
                    }
                }
                @media only screen and (max-width: 735px) {
                    /*small*/
                    height: 500px;
                    .title {
                        padding-top: 85px;
                        font-size: 32px;
                    }
                    .description {
                        font-size: 19px;
                        margin-top: 2px;
                    }
                    .unit-image.sm {
                        display: block;
                    }
                }
                @media only screen and (max-width: 1068px) and (min-width: 736px) and (max-height: 733px) {
                    /*medium*/
                    height: 569px;
                    .title {
                        padding-top: 72px;
                        font-size: 44px;
                    }
                    .description {
                        font-size: 24px;
                        margin-top: 5px;
                    }
                    .unit-image.md {
                        display: block;
                    }
                }
                @media only screen and (max-width: 1068px) and (min-height: 734px) and (min-width: 736px) {
                    /*medium tall*/
                    height: 650px;
                    .title {
                        padding-top: 98px;
                        font-size: 44px;
                    }
                    .description {
                        font-size: 24px;
                        margin-top: 5px;
                    }
                    .unit-image.md-tl {
                        display: block;
                    }
                }
                @media only screen and (max-height: 775px) and (min-width: 1069px) {
                    /*large*/
                    height: 580px;
                    .title {
                        padding-top: 60px;
                        font-size: 56px;
                    }
                    .description {
                        font-size: 27px;
                        margin-top: 6px;
                    }
                    .unit-image.lg {
                        display: block;
                    }
                }
                @media only screen and (min-height: 776px) and (min-width: 1069px) {
                    /*large tall*/
                    height: 692px;
                    .title {
                        padding-top: 70px;
                        font-size: 56px;
                    }
                    .description {
                        font-size: 27px;
                        margin-top: 6px;
                    }
                    .unit-image.lg-tl {
                        display: block;
                    }
                }
            }
        }
        .promo-list {
            list-style: none;
            border: 6px solid white;
            margin: -12px 0 0 0;
            padding: 0;
            font-size: 0;
            li {
                border: 6px solid white;
                box-sizing: border-box;
                @media only screen and (min-width: 736px) {
                    /*medium and large*/
                    display: inline-block;
                    width: 50%;
                }
                &:nth-child(1) {
                    background-color: rgb(249,240,235);
                    .promo-image {
                        background-position: center 100%;
                        @media only screen and (max-width: 735px) {
                            /*small*/
                            background-size: 257px 339px;
                        }
                        @media only screen and (max-width: 1068px) and (min-width: 736px) {
                            /*medium*/
                            background-size: 229px 305px;
                        }
                        @media only screen and (min-width: 1069px) {
                            /*large*/
                            background-size: 292px 391px;
                        }
                    }
                }
                &:nth-child(2) {
                    .promo-wrapper {
                        .info {
                            color: white;
                        }
                        .promo-image {
                            background: no-repeat center center;
                            background-size: cover;
                        }
                    }
                }
                &:nth-child(3) {
                    background-color: #fafafa;
                    .promo-image {
                        background-position: center 60%;
                        @media only screen and (max-width: 735px) {
                            /*small*/
                            background-size: 244px 193px;
                        }
                        @media only screen and (max-width: 1068px) and (min-width: 736px) {
                            /*medium*/
                            background-size: 269px 212px;
                        }
                        @media only screen and (min-width: 1069px) {
                            /*large*/
                            background-size: 385px 304px;
                        }
                    }
                }
                &:nth-child(4) {
                    background-color: #eee;
                    .promo-image {
                        background-position: center 100%;
                        @media only screen and (max-width: 735px) {
                            /*small*/
                            background-size: 321px 346px;
                        }
                        @media only screen and (max-width: 1068px) and (min-width: 736px) {
                            /*medium*/
                            background-size: 345px 328px;
                        }
                        @media only screen and (min-width: 1069px) {
                            /*large*/
                            background-size: 447px 395px;
                        }
                    }
                }
                .promo-wrapper {
                    font-size: 0;
                    position: relative;
                    .info {
                        position: absolute;
                        left: 50%;
                        width: 80%;
                        -webkit-transform: translateX(-50%);
                        -moz-transform: translateX(-50%);
                        -ms-transform: translateX(-50%);
                        -o-transform: translateX(-50%);
                        transform: translateX(-50%);
                        text-align: center;
                        color: #111;
                        z-index: 100;
                        p {
                            position: relative;
                            line-height: 1;
                            margin: 0;
                        }
                    }
                    .promo-image-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        .promo-image {
                            margin: 0;
                            width: 100%;
                            height: 100%;
                            display: none;
                            background-repeat: no-repeat;
                        }
                    }
                    @media only screen and (max-width: 735px) {
                        /*small*/
                        height: 500px;
                        .info {
                            .title {
                                padding-top: 37px;
                                font-size: 32px;
                            }
                            .description {
                                font-size: 19px;
                                margin-top: 2px;
                            }
                        }
                        .promo-image.sm {
                            display: block;
                        }
                    }
                    @media only screen and (max-width: 1068px) and (min-width: 736px) {
                        /*medium*/
                        height: 490px;
                        .info {
                            .title {
                                padding-top: 37px;
                                font-size: 32px;
                            }
                            .description {
                                font-size: 19px;
                                margin-top: 2px;
                            }
                        }
                        .promo-image.md {
                            display: block;
                        }
                    }
                    @media only screen and (min-width: 1069px) {
                        /*large*/
                        height: 580px;
                        .info {
                            .title {
                                padding-top: 40px;
                                font-size: 52px;
                            }
                            .description {
                                font-size: 21px;
                                margin-top: 4px;
                            }
                        }
                        .promo-image.lg {
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>
