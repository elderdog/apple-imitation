<template>
    <div id="footer-section">
        <div class="wrapper">
            <el-breadcrumb v-show="locationVisible" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path: '/'}"><i class="el-icon-ap-apple"></i></el-breadcrumb-item>
                <el-breadcrumb-item>{{landmark}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="directory">
                <el-row>
                    <el-col :xs="24" :span="5">
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">Shop and Learn</p>
                            <ul>
                                <li><a>Mac</a></li>
                                <li><a>iPad</a></li>
                                <li><a>iPhone</a></li>
                                <li><a>Watch</a></li>
                                <li><a>TV</a></li>
                                <li><a>Music</a></li>
                                <li><a>iTunes</a></li>
                                <li><a>HomePod</a></li>
                                <li><a>iPod touch</a></li>
                                <li><a>Accessories</a></li>
                                <li><a>Gift Cards</a></li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="24" :span="5">
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">Apple Store</p>
                            <ul>
                                <li><a>Find a Store</a></li>
                                <li><a>Genius Bar</a></li>
                                <li><a>Today at Apple</a></li>
                                <li><a>Apple Camp</a></li>
                                <li><a>Field Trip</a></li>
                                <li><a>Apple Store App</a></li>
                                <li><a>Refurbished and Clearance</a></li>
                                <li><a>Financing</a></li>
                                <li><a>Apple GiveBack</a></li>
                                <li><a>Order Status</a></li>
                                <li><a>Shopping Help</a></li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="24" :span="5">
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">For Education</p>
                            <ul>
                                <li><a>Apple and Education</a></li>
                                <li><a>Shop for College</a></li>
                            </ul>
                        </div>
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">For Business</p>
                            <ul>
                                <li><a>Apple and Business</a></li>
                                <li><a>Shop for Business</a></li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="24" :span="5">
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">Account</p>
                            <ul>
                                <li><a>Manage Your Apple ID</a></li>
                                <li><a>Apple Store Account</a></li>
                                <li><a>iCloud.com</a></li>
                            </ul>
                        </div>
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">Apple Values</p>
                            <ul>
                                <li><a>Accessibility</a></li>
                                <li><a>Education</a></li>
                                <li><a>Environment</a></li>
                                <li><a>Inclusion and Diversity</a></li>
                                <li><a>Privacy</a></li>
                                <li><a>Supplier Responsibility</a></li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="24" :span="4">
                        <div class="unit-wrapper">
                            <p class="title" @click="trigger">About Apple</p>
                            <ul>
                                <li><a>Newsroom</a></li>
                                <li><a>Apple Leadership</a></li>
                                <li><a>Job Opportunities</a></li>
                                <li><a>Investors</a></li>
                                <li><a>Events</a></li>
                                <li><a>Contact Apple</a></li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="footer">
                <div class="shop">
                    More ways to shop: Visit an <a>Apple Store</a>,
                    call 1-800-MY-APPLE, or <a>find a reseller</a>.
                </div>
                <div class="legal">
                    <div class="local">
                        <a title="Choose your country or region">
                            <img src="./../../assets/icon/flag.png">United States
                        </a>
                    </div>
                    <div class="copyright">
                            Copyright © 2018 Apple Inc. All rights reserved.
                    </div>
                    <div class="legal-links">
                        <a>Privacy Policy</a>
                        <a>Terms of Use</a>
                        <a>Sales and Refunds</a>
                        <a>Legal</a>
                        <a>Site Map</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer-section",
        data() {
            return {
                locationVisible: true,
                landmark: ''
            };
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData(val) {
                this.setupLocation(val);
            },
            setupLocation($route) {
                let _this = this;
                _this.locationVisible = true;
                let arr = $route.path.split('/');
                let path = arr[arr.length - 1].toLocaleLowerCase();
                switch (path) {
                    case 'mac':
                        _this.landmark = 'Mac';
                        break;
                    case 'ipad':
                        _this.landmark = 'iPad';
                        break;
                    case 'iphone':
                        _this.landmark = 'iPhone';
                        break;
                    case 'watch':
                        _this.landmark = 'Watch';
                        break;
                    case 'tv':
                        _this.landmark = 'TV';
                        break;
                    case 'music':
                        _this.landmark = 'Music';
                        break;
                    case 'support':
                        _this.landmark = 'Support';
                        break;
                    default:
                        _this.locationVisible = false;
                }
            },
            trigger(e) {
                if (e.target.classList.contains('show')) {
                    e.target.classList.toggle('show');
                } else {
                    e.target.classList.add('show');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #footer-section {
        background-color: #f2f2f2;
        .wrapper {
            max-width: 1024px;
            padding: 0 22px;
            margin: 0 auto;
            .el-breadcrumb {
                padding-top: 17px;
                .el-breadcrumb__item {
                    /deep/ .el-breadcrumb__inner {
                        color: #555;
                        &.is-link:hover {
                            color: #333;
                        }
                    }
                }
            }
            .directory {
                padding-top: 17px;
                @media only screen and (max-width: 767px) {
                    font-size: 12px;
                    .el-row {
                        padding-bottom: 24px;
                    }
                    .unit-wrapper {
                        border-bottom: 1px solid #d9d9d9;
                        .title {
                            margin: 0;
                            padding: 0;
                            color: #333;
                            height: 36px;
                            line-height: 36px;
                            cursor: pointer;
                            &::after {
                                content: '+';
                                float: right;
                                font-size: 14px;
                                font-weight: normal;
                                margin-top: -2px;
                                margin-right: 8px;
                                -webkit-transition: transform .3s ease;
                                -moz-transition: transform .3s ease;
                                -ms-transition: transform .3s ease;
                                -o-transition: transform .3s ease;
                                transition: transform .3s ease;
                            }
                            &.show {
                                &::after {
                                    transform: rotate(45deg);
                                }
                                & + ul {
                                    background-color: #f2f2f2;
                                    position: relative;
                                    visibility: visible;
                                    max-height: 400px;
                                    -webkit-transition: all .3s ease-in;
                                    -moz-transition: all .3s ease-in;
                                    -ms-transition: all .3s ease-in;
                                    -o-transition: all .3s ease-in;
                                    transition: all .3s ease-in;
                                }
                            }
                        }
                        ul {
                            list-style: none;
                            margin: 0;
                            padding: 0 0 15px;
                            overflow: hidden;
                            position: absolute;
                            width: 100%;
                            max-height: 0;
                            visibility: hidden;
                            li {
                                padding-left: 14px;
                                height: 28px;
                                line-height: 28px;
                                color: #555;
                                &:hover {
                                    color: #333;
                                    cursor: pointer;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
                @media only screen and (min-width: 768px) {
                    font-size: 11px;
                    .unit-wrapper {
                        padding-bottom: 24px;
                        .title {
                            margin: 0 0 .8em;
                            color: #333;
                            font-weight: bold;
                            line-height: 1.35;
                        }
                        ul {
                            margin: 0;
                            padding: 0;
                            list-style: none;
                            li {
                                color: #555;
                                margin: 0 0 .8em;
                                line-height: 1.35;
                                a:hover {
                                    color: #333;
                                    text-decoration: underline;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
            .footer {
                font-size: 11px;
                padding: 0 0 20px;
                @media only screen and (max-width: 767px) {
                    .legal {
                        .local {
                            margin-bottom: 1em;
                        }
                    }
                }
                @media only screen and (min-width: 768px) {
                    .shop {
                        border-bottom: 1px solid #d9d9d9;
                    }
                    .legal {
                        padding-top: 1em;
                        .local {
                            float: right;
                            position: relative;
                            top: -2px;
                        }
                        .copyright {
                            display: inline-block;
                        }
                        .legal-links {
                            margin-right: 30px;
                        }
                    }
                }
                .shop {
                    color: #888;
                    padding-bottom: 1em;
                    a {
                        color: #0070c9;
                        &:hover {
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }
                .legal {
                    .copyright {
                        margin: 0 30px 5px 0;
                        color: #888;
                    }
                    .legal-links {
                        display: inline-block;
                        color: #555;
                        a {
                            &:not(:last-child) {
                                padding-right: 10px;
                                margin-right: 7px;
                                border-right: 1px solid #d9d9d9;
                            }
                            &:hover {
                                color: #333;
                                cursor: pointer;
                                text-decoration: underline;
                            }
                        }
                    }
                    .local {
                        color: #555;
                        a {
                            img {
                                padding-right: .5em;
                                vertical-align: sub;
                            }
                            &:hover {
                                color: #333;
                                cursor: pointer;
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
