<!--specially for Mac.vue, Photographer, Coder, Musician-->
<template>
    <div class="trigger-carousel">
        <ul ref="ul" :style="{transform: 'translateX(' + offsetX + 'px)'}" :class="{trans: transEnable}">
            <li v-for="(title, index) in titles">
                <button class="trigger"
                        :class="{'is-active': index === activeIndex, trans: transEnable}"
                        :style="{color: index === activeIndex - 1 ? 'transparent' : 'white'}"
                        :disabled="buttonDisable"
                        @click="trigger(index)">
                    {{title}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "trigger-carousel",
        props: {
            titles: Array
        },
        data() {
            return {
                activeIndex: 0,
                offsetX: 0,
                transEnable: true,
                buttonDisable: false
            }
        },
        methods: {
            trigger(index) {
                let _this = this;
                let target = _this.$el.firstChild.childNodes[index],
                    n = index < 3 ? index : index - 3;
                // active
                n = index === 3 ? index : n;
                _this.activeIndex = n;
                // scroll
                _this.offsetX = -target.offsetLeft;
                if (index === 3) {
                    _this.transitionScroll();
                }
                _this.$emit('change', n);
            },
            setActiveIndex(index) {
                let _this = this;
                let target = _this.$el.firstChild.childNodes[index];
                if (index === 0 && _this.activeIndex === 3) {
                    _this.transitionScroll();
                } else {
                    _this.activeIndex = index;
                    _this.offsetX = -target.offsetLeft;
                }
            },
            transitionScroll() {
                let _this = this;
                _this.buttonDisable = true;
                setTimeout(() => {
                    _this.transEnable = false;
                    _this.offsetX = 0;
                    _this.activeIndex = 0;
                    setTimeout(() => {
                        _this.buttonDisable = false;
                        _this.transEnable = true;
                    }, 1);
                }, 800);
            }
        }
    }
</script>

<style scoped lang="scss">
    .trigger-carousel {
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            white-space: nowrap;
            &.trans {
                -webkit-transition: all .4s;
                -moz-transition: all .4s;
                -ms-transition: all .4s;
                -o-transition: all .4s;
                transition: all .4s;
            }
            li {
                display: inline-block;
                width: auto;
                padding-right: 130px;
                @media only screen and (max-width: 735px) {
                    /*small*/
                    padding-right: 60px;
                }
                @media only screen and (min-width: 736px) and (max-width: 1068px) {
                    /*medium*/
                    padding-right: 110px;
                }
                .trigger {
                    margin: 0;
                    padding: 0;
                    border: none;
                    background-color: transparent;
                    color: white;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    opacity: 0.25;
                    &.trans {
                        -webkit-transition: all .4s;
                        -moz-transition: all .4s;
                        -ms-transition: all .4s;
                        -o-transition: all .4s;
                        transition: all .4s;
                    }
                    &:hover {
                        opacity: 1;
                    }
                    &.is-active {
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>
