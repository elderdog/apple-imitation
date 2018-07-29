<template>
    <div id="header-bar" :style="{backgroundColor: mobileDropMenuVisible ? 'rgb(0,0,0)' : 'rgba(0,0,0,0.8)'}">
        <!--nav for mobile-->
        <div class="wrapper hidden-sm-and-up">
            <el-menu id="mobile-menu" :default-active="onRoutes()"
                     mode="horizontal"
                     background-color="transparent"
                     text-color="white"
                     router>
                <el-dropdown trigger="click" @visible-change="mobileDropMenuShow">
                    <el-menu-item :index="$route.path">
                        <div class="cracker-top" :class="{'crust-top': mobileDropMenuVisible}">
                            <span></span>
                        </div>
                        <div class="cracker-bottom" :class="{'crust-bottom': mobileDropMenuVisible}">
                            <span></span>
                        </div>
                    </el-menu-item>
                    <el-dropdown-menu class="mobile-dropdown" slot="dropdown">
                        <router-link to="/mac"><el-dropdown-item divided>Mac</el-dropdown-item></router-link>
                        <el-dropdown-item divided>iPad</el-dropdown-item>
                        <el-dropdown-item divided>iPhone</el-dropdown-item>
                        <el-dropdown-item divided>Watch</el-dropdown-item>
                        <el-dropdown-item divided>TV</el-dropdown-item>
                        <el-dropdown-item divided>Music</el-dropdown-item>
                        <el-dropdown-item divided>Support</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-search"></i>Search apple.com</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-menu-item index="/"><i class="el-icon-ap-apple"></i></el-menu-item>
                <el-dropdown trigger="click" :style="{visibility: mobileDropMenuVisible ? 'hidden' : 'visible'}">
                    <el-menu-item :index="$route.path"><i class="el-icon-ap-bag" :class="{'hd-bag': mobileDropMenuVisible}"></i></el-menu-item>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled divided>Your bag is empty.</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-bag"></i>Bag</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-heart"></i>Favorites</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-box"></i>Orders</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-set"></i>Account</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-user"></i>Sign in</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu>
        </div>
        <!--nav for tablet and pc-->
        <div class="wrapper hidden-xs-only">
            <el-menu :default-active="onRoutes()"
                     mode="horizontal"
                     background-color="transparent"
                     text-color="white"
                     router>
                <el-menu-item index="/"><i class="el-icon-ap-apple"></i></el-menu-item>
                <el-menu-item index="/mac">Mac</el-menu-item>
                <el-menu-item index="/ipad">iPad</el-menu-item>
                <el-menu-item index="/iphone">iPhone</el-menu-item>
                <el-menu-item index="/watch">Watch</el-menu-item>
                <el-menu-item index="/tv">TV</el-menu-item>
                <el-menu-item index="/music">Music</el-menu-item>
                <el-menu-item index="/support">Support</el-menu-item>
                <el-menu-item index="/"><i class="el-icon-search"></i></el-menu-item>
                <el-dropdown trigger="click">
                    <el-menu-item index="/"><i class="el-icon-ap-bag"></i></el-menu-item>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled divided>Your bag is empty.</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-bag"></i>Bag</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-heart"></i>Favorites</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-box"></i>Orders</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-set"></i>Account</el-dropdown-item>
                        <el-dropdown-item divided><i class="el-icon-ap-user"></i>Sign in</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-bar",
        data() {
            return {
                mobileDropMenuVisible: false
            }
        },
        methods: {
            onRoutes() {
                return '/' + this.$route.path.split('/')[1];
            },
            mobileDropMenuShow(visible) {
                this.mobileDropMenuVisible = visible;
            }
        }
    }
</script>

<style scoped lang="scss">
    #header-bar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        @media only screen and (max-width: 767px) {
            height: 48px;
        }
        height: 44px;
        background: rgba(0,0,0,0.8);
        .wrapper {
            margin: 0 auto;
            max-width: 1024px;
            #mobile-menu {
                height: 48px;
                padding: 0;
                .el-menu-item {
                    height: 48px;
                    line-height: 48px;
                    &:first-child {
                        width: 29px;
                    }
                    &:nth-child(2) {
                        i {
                            margin: 0;
                        }
                    }
                    .cracker-top,
                    .cracker-bottom {
                        position: absolute;
                        text-align: center;
                        width: 48px;
                        height: 48px;
                        line-height: 46px;
                        -webkit-transition: transform 0.2s ease-out;
                        -moz-transition: transform 0.2s ease-out;
                        -ms-transition: transform 0.2s ease-out;
                        -o-transition: transform 0.2s ease-out;
                        transition: transform 0.2s ease-out;
                        span {
                            display: inline-block;
                            width: 20px;
                            height: 1px;
                            background-color: white;
                            position: relative;
                            -webkit-transition: top 0.2s;
                            -moz-transition: top 0.2s;
                            -ms-transition: top 0.2s;
                            -o-transition: top 0.2s;
                            transition: top 0.2s;
                        }
                    }
                    .cracker-top span {
                        top: -2px;
                    }
                    .cracker-bottom span {
                        top: 4px;
                    }
                    .crust-top {
                        transform: rotate(135deg);
                        span {
                            top: 0;
                        }
                    }
                    .crust-bottom {
                        transform: rotate(45deg);
                        span {
                            top: 0;
                        }
                    }
                    .el-icon-ap-bag {
                        position: relative;
                        left: 0;
                        -webkit-transition: all 1s;
                        -moz-transition: all 1s;
                        -ms-transition: all 1s;
                        -o-transition: all 1s;
                        transition: all 1s;
                    }
                    .hd-bag {
                        opacity: 0;
                        left: 40px;
                    }
                    &:hover {
                        div > span {
                            background-color: #ccc!important;
                        }
                    }
                    &,
                    & [class^=el-icon-] {
                        font-size: 20px;
                    }
                }
            }
            .el-menu {
                height: 44px;
                border: none;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding: 0 20px;
                &:before,
                &:after {
                    display: none;
                }
                .el-menu-item {
                    height: 44px;
                    line-height: 44px;
                    border: none;
                    background-color: transparent!important;
                    padding: 0;
                    i {
                        color: white;
                        &:hover {
                            color: #ccc!important;
                        }
                    }
                    &:hover {
                        color: #ccc!important;
                    }
                    &.is-active {
                        color: #ccc;
                    }
                }
            }
        }
    }
    .mobile-dropdown {
        top: 48px!important;
        left: 0!important;
        bottom: 0;
        background-color: rgb(0, 0, 0);
        border: none;
        margin: 0;
        border-radius: 0;
        width: 100%!important;
        height: auto;
        a {
            text-decoration: none;
        }
        & /deep/ > .popper__arrow {
            display: none;
        }
        .el-dropdown-menu__item {
            height: 43px;
            font-size: 16px;
            line-height: 44px;
            background-color: transparent!important;
            &.el-dropdown-menu__item--divided {
                color: white;
                border: none;
                margin: 0 20px;
                padding-left: 0;
                border-bottom: 1px solid #333;
                &::before {
                    display: none;
                }
                &:nth-last-child(2) {
                    border-bottom-color: white;
                    font-weight: bold;
                    i {
                        left: 0;
                        margin-right: 10px;
                    }
                }
                &:hover {
                    text-decoration: none;
                    color: #ccc;
                }
            }
        }
    }
    .el-dropdown-menu {
        width: 288px;
        padding: 10px 20px;
        box-sizing: border-box;
        .el-dropdown-menu__item {
            color: #409EFF;
            background-color: white;
            &:hover {
                text-decoration: underline;
            }
            &.is-disabled {
                margin: 0;
                line-height: 82px;
                height: 88px;
                border: none;
                font-size: 16px;
                color: #999;
                font-weight: bold;
                text-align: center;
            }
            i {
                position: relative;
                left: -15px;
                font-size: 18px;
                vertical-align: text-bottom;
            }
        }
    }
</style>
