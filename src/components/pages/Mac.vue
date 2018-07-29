<template>
    <div id="mac">
        <div class="chapter-nav">
            <div class="nav-wrapper">
                <el-menu ref="menu"
                         mode="horizontal"
                         background-color="transparent"
                         text-color="white"
                         router>
                    <template v-for="icon in icons">
                        <el-menu-item index="/404">
                            <div class="wrapper" :class="itemClass(icon.title)">
                                <figure :style="{backgroundImage:'url(' + icon.url + ')'}"></figure>
                                <span slot="title">{{icon.title}}</span>
                            </div>
                        </el-menu-item>
                    </template>
                </el-menu>
            </div>
            <div class="paddles">
                <button class="paddle-left el-icon-arrow-left"
                        :class="{disable: paddleLeftDisable}"
                        @click="makeNavScroll('left')"></button>
                <button class="paddle-right el-icon-arrow-right"
                        :class="{disable: paddleRightDisable}"
                        @click="makeNavScroll('right')"></button>
            </div>
        </div>
        <div class="carousel">
            <p class="slogan">Behind the Mac</p>
            <trigger-carousel ref="triggerCarousel" :titles="triggerTitles()" @change="triggerTitleChanged"/>
            <el-carousel ref="videoCarousel" class="video-carousel" trigger="click"
                         @change="videoChanged" :autoplay="false" arrow="never">
                <el-carousel-item v-for="item in carousels" :key="item.title">
                    <video class="inline-video sm" autoplay loop muted :src="item.url_sm"></video>
                    <video class="inline-video md" autoplay loop muted :src="item.url_md"></video>
                    <video class="inline-video lg" autoplay loop muted :src="item.url_lg"></video>
                    <video class="inline-video xl" autoplay loop muted :src="item.url_xl"></video>
                    <div class="section-content">
                        <p class="description">{{item.description}}</p>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import ElCarousel from "element-ui/packages/carousel/src/main";
    import TriggerCarousel from "../widget/TriggerCarousel";
    export default {
        components: {
            TriggerCarousel,
            ElCarousel},
        name: "mac",
        data() {
            return {
                icons: [],
                carousels: [],
                paddleLeftDisable: true,
                paddleRightDisable: false,
                activeIndex: 0
            };
        },
        mounted() {
            let _this = this;
            _this.loadData();
            let el = document.querySelector('.nav-wrapper');
            el.addEventListener('scroll', _this.throttle(_this.handleScroll, 200));
        },
        methods: {
            loadData() {
                let _this = this;
                _this.$service.url = _this.$api.mac;
                _this.$service.get(
                    null,
                    response => {
                        console.log(response);
                        _this.icons = response.data.icons;
                        _this.carousels = response.data.carousels;
                    }
                )
            },
            itemClass(title) {
                return title.toLocaleLowerCase().replace(' ', '-');
            },
            handleScroll() {
                let _this = this;
                let rect = _this.$refs.menu.$el.getBoundingClientRect(),
                    width = document.querySelector('body').getBoundingClientRect().width;
                console.log(rect.left);
                _this.paddleLeftDisable = rect.left >= 68;
                _this.paddleRightDisable = width - rect.right === 68;
            },
            makeNavScroll(direction) {
                let _this = this;
                let rect = _this.$refs.menu.$el.getBoundingClientRect(),
                    el = document.querySelector('.nav-wrapper');
                if (direction === 'left') {
                    el.scrollTo(68 - rect.left - 200, 0);
                } else if (direction === 'right') {
                    el.scrollTo(68 - rect.left + 200, 0);
                }
            },
            triggerTitles() {
                let arr = this.carousels.map((item) => {return item.title});
                return arr.concat(arr);
            },
            triggerTitleChanged(index) {
                this.$refs.videoCarousel.setActiveItem(index);
            },
            videoChanged(index) {
                this.$refs.triggerCarousel.setActiveIndex(index);
            },
            throttle(fn, interval) {
                let _fn = fn,
                    timer,
                    firstTime = true;
                return function() {
                    let args = arguments,
                        _me = this;
                    // if it's the first time, no need to delay
                    if (firstTime) {
                        _fn.apply(_me, args);
                        return firstTime = false;
                    }
                    if (timer) {
                        return false;
                    }
                    timer = setTimeout(() => {
                        clearTimeout(timer);
                        timer = null;
                        _fn.apply(_me, args);
                    }, interval || 500);
                };
            }
        }
    }
</script>

<style scoped lang="scss">
    html.touch .paddles {
        display: none;
    }
    #mac {
        .chapter-nav {
            background-color: rgba(0,0,0,0.8);
            padding: 12px 0;
            text-align: center;
            font-size: 0;
            .nav-wrapper {
                width: calc(100% - 68px);
                margin: 0 auto;
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;
                scroll-behavior: smooth;
                &::-webkit-scrollbar {
                    height: 0;
                    width: 0;
                }
                .el-menu {
                    height: 92px;
                    width: 940px;
                    font-size: 0;
                    border: none;
                    margin: 0 34px;
                    display: inline-block;
                    white-space: nowrap;
                    .el-menu-item {
                        height: 100%;
                        background-color: transparent!important;
                        border: none;
                        &:hover {
                            .wrapper span {
                                color: #6bf;
                            }
                        }
                        .wrapper {
                            height: 75px;
                            &.macbook figure {
                                width: 46px;
                            }
                            &.macbook-air figure {
                                width: 52px;
                            }
                            &.macbook-pro figure {
                                width: 58px;
                            }
                            &.imac figure {
                                width: 48px;
                            }
                            &.imac-pro figure {
                                width: 48px;
                            }
                            &.mac-pro figure {
                                width: 21px;
                            }
                            &.mac-mini figure {
                                width: 28px;
                            }
                            &.accessories figure {
                                width: 29px;
                            }
                            &.high-sierra figure {
                                width: 42px;
                            }
                            &.compare figure {
                                width: 70px;
                            }
                            figure {
                                margin: 0 auto 6px;
                                height: 54px;
                                background: no-repeat;
                            }
                            span {
                                display: block;
                                font-size: 11px;
                                line-height: 12px;
                            }
                        }
                    }
                }
            }
            .paddles {
                position: relative;
                height: 0;
                margin: 0;
                display: none;
                @media only screen and (max-width: 985px) {
                    display: block;
                }
                button {
                    position: absolute;
                    top: -92px;
                    height: 92px;
                    width: 33px;
                    border: none;
                    background-color: transparent;
                    color: rgba(255,255,255,0.8);
                    font-size: 18px;
                    cursor: pointer;
                    outline: none;
                    &:hover {
                        color: white;
                    }
                    &.disable {
                        display: none;
                    }
                }
                .paddle-left {
                    border-right: 1px solid rgba(255,255,255,0.2);
                    left: 0;
                }
                .paddle-right {
                    border-left: 1px solid rgba(255,255,255,0.2);
                    right: 0;
                }
            }
        }
        .carousel {
            position: relative;
            height: 740px;
            overflow: hidden;
            .trigger-carousel {
                position: absolute;
                width: 60%;
                z-index: 2;
            }
            .slogan {
                color: white;
                margin: 0;
                position: absolute;
                z-index: 2;
                font-weight: 600;
            }
            .inline-video {
                display: none;
                height: 100%;
                width: 100%;
                object-fit: cover;
                position: absolute;
            }
            @media only screen and (max-width: 735px) {
                /*small*/
                height: 620px;
                .inline-video.sm {
                    display: block;
                }
                .section-content {
                    width: calc(100% - 28px * 2);
                    margin: 0 28px;
                    .description {
                        max-width: 320px;
                        font-size: 15px;
                    }
                }
                .video-carousel {
                    /deep/ .el-carousel__indicators {
                        left: 28px;
                        bottom: 18px;
                    }
                }
                .slogan {
                    left: 28px;
                    top: 29px;
                    font-size: 16px;
                }
                .trigger-carousel {
                    left: 28px;
                    top: 286px;
                    /deep/ .trigger {
                        font-size: 38px;
                    }
                }
            }
            @media only screen and (min-width: 736px) and (max-width: 1068px) {
                /*medium*/
                .inline-video.md {
                    display: block;
                }
                .section-content {
                    width: 692px;
                    margin: 0 auto;
                    .description {
                        width: 66.66%;
                        font-size: 21px;
                    }
                }
                .video-carousel {
                    /deep/ .el-carousel__indicators {
                        left: calc((100% - 692px) / 2);
                        bottom: 28px;
                    }
                }
                .slogan {
                    left: calc((100% - 692px) / 2);
                    top: 90px;
                    font-size: 28px;
                }
                .trigger-carousel {
                    left: calc((100% - 692px) / 2);
                    top: 309px;
                    /deep/ .trigger {
                        font-size: 80px;
                    }
                }
            }
            @media only screen and (min-width: 1069px) and (max-width: 1441px) {
                /*large*/
                .inline-video.lg {
                    display: block;
                }
                .section-content {
                    width: 980px;
                    margin: 0 auto;
                    .description {
                        width: 50%;
                        font-size: 21px;
                    }
                }
                .video-carousel {
                    /deep/ .el-carousel__indicators {
                        left: calc((100% - 980px) / 2);
                        bottom: 28px;
                    }
                }
                .slogan {
                    left: calc((100% - 980px) / 2);
                    top: 83px;
                    font-size: 28px;
                }
                .trigger-carousel {
                    left: calc((100% - 980px) / 2);
                    top: 280px;
                    /deep/ .trigger {
                        font-size: 96px;
                    }
                }
            }
            @media only screen and (min-width: 1442px) {
                /*x-large*/
                .inline-video.xl {
                    display: block;
                }
                .section-content {
                    width: 980px;
                    margin: 0 auto;
                    .description {
                        width: 75%;
                        font-size: 28px;
                    }
                }
                .video-carousel {
                    /deep/ .el-carousel__indicators {
                        left: calc((100% - 980px) / 2);
                        bottom: 28px;
                    }
                }
                .slogan {
                    left: calc((100% - 980px) / 2);
                    top: 83px;
                    font-size: 32px;
                }
                .trigger-carousel {
                    left: calc((100% - 980px) / 2);
                    top: 260px;
                    /deep/ .trigger {
                        font-size: 110px;
                    }
                }
            }
            .video-carousel {
                height: 100%;
                z-index: 1;
                /deep/ .el-carousel__container {
                    height: 100%;
                    .el-carousel__item {
                        .section-content {
                            position: relative;
                            height: 100%;
                            .description {
                                position: absolute;
                                top: 56%;
                                margin: 0;
                                color: white;
                                font-weight: 600;
                                letter-spacing: .011em;
                            }
                        }
                    }
                }
                /deep/ .el-carousel__indicators {
                    -webkit-transform: none;
                    -moz-transform: none;
                    -ms-transform: none;
                    -o-transform: none;
                    transform: none;
                    .el-carousel__button {
                        height: 8px;
                        width: 8px;
                        border-radius: 4px;
                        margin-right: 4px;
                    }
                }
            }
        }
    }
</style>
