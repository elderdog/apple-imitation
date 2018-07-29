/**
 * Created by heyuanxiang on 7/19/2018.
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

let mock = new MockAdapter(axios);
let homeData = Mock.mock({
    success: true,
    data: {
        images: [
            function() {
                let cover = Mock.mock({
                    "cover|1": [
                        "grimes",
                        "boniface",
                        "phoebe",
                        "peter",
                        "makato",
                        "majid"
                    ]
                }).cover;
                return {
                    title: "Behind the Mac",
                    description: "",
                    url_sm: "https://www.apple.com/v/home/ds/images/heroes/behind-the-mac/behind_the_mac_" + cover + "_small.jpg",
                    url_md: "https://www.apple.com/v/home/ds/images/heroes/behind-the-mac/behind_the_mac_" + cover + "_medium.jpg",
                    url_lg: "https://www.apple.com/v/home/ds/images/heroes/behind-the-mac/behind_the_mac_" + cover + "_large.jpg",
                    url_mdtl: "https://www.apple.com/v/home/ds/images/heroes/behind-the-mac/behind_the_mac_" + cover + "_mediumtall.jpg",
                    url_lgtl: "https://www.apple.com/v/home/ds/images/heroes/behind-the-mac/behind_the_mac_" + cover + "_largetall.jpg"
                }
            }, {
                title: "MacBook Pro",
                description: "More power. More performance. More pro.",
                url_sm: "https://www.apple.com/v/home/ds/images/heroes/macbook-pro/macbook_pro_performance_small.jpg",
                url_md: "https://www.apple.com/v/home/ds/images/heroes/macbook-pro/macbook_pro_performance_medium.jpg",
                url_lg: "https://www.apple.com/v/home/ds/images/heroes/macbook-pro/macbook_pro_performance_large.jpg",
                url_mdtl: "https://www.apple.com/v/home/ds/images/heroes/macbook-pro/macbook_pro_performance_mediumtall.jpg",
                url_lgtl: "https://www.apple.com/v/home/ds/images/heroes/macbook-pro/macbook_pro_performance_largetall.jpg"
            }, {
                title: "iMac Pro",
                description: "The most powerful Mac ever.",
                url_sm: "https://www.apple.com/v/home/ds/images/heroes/imac-pro/imac_pro_creator_series_small.jpg",
                url_md: "https://www.apple.com/v/home/ds/images/heroes/imac-pro/imac_pro_creator_series_medium.jpg",
                url_lg: "https://www.apple.com/v/home/ds/images/heroes/imac-pro/imac_pro_creator_series_large.jpg",
                url_mdtl: "https://www.apple.com/v/home/ds/images/heroes/imac-pro/imac_pro_creator_series_mediumtall.jpg",
                url_lgtl: "https://www.apple.com/v/home/ds/images/heroes/imac-pro/imac_pro_creator_series_largetall.jpg"
            }, {
                title: "macOS Mojave",
                description: "Simply powerful.",
                url_sm: "https://www.apple.com/v/home/ds/images/heroes/macos-mojave-preview/macos_small.jpg",
                url_md: "https://www.apple.com/v/home/ds/images/heroes/macos-mojave-preview/macos_medium.jpg",
                url_lg: "https://www.apple.com/v/home/ds/images/heroes/macos-mojave-preview/macos_large.jpg",
                url_mdtl: "https://www.apple.com/v/home/ds/images/heroes/macos-mojave-preview/macos_mediumtall.jpg",
                url_lgtl: "https://www.apple.com/v/home/ds/images/heroes/macos-mojave-preview/macos_largetall.jpg"
            }, {
                title: "Turn up summer",
                description: "Buy a Mac or iPad Pro for college. Get beats on us.",
                url_sm: "https://www.apple.com/v/home/ds/images/heroes/back-to-school/shop_for_college_small.jpg",
                url_md: "https://www.apple.com/v/home/ds/images/heroes/back-to-school/shop_for_college_medium.jpg",
                url_lg: "https://www.apple.com/v/home/ds/images/heroes/back-to-school/shop_for_college_large.jpg",
                url_mdtl: "https://www.apple.com/v/home/ds/images/heroes/back-to-school/shop_for_college_mediumtall.jpg",
                url_lgtl: "https://www.apple.com/v/home/ds/images/heroes/back-to-school/shop_for_college_largetall.jpg"
            }
        ],
        promos: [{
            title: "iPhone 8",
            description: "A new generation of iPhone.",
            url_sm: "https://www.apple.com/v/home/ds/images/promos/iphone_8_small.jpg",
            url_md: "https://www.apple.com/v/home/ds/images/promos/iphone_8_medium.jpg",
            url_lg: "https://www.apple.com/v/home/ds/images/promos/iphone_8_large.jpg"
        }, {
            title: "How to shoot on iPhone",
            description: "Make the beautiful game even more beautiful.",
            url_sm: "https://www.apple.com/v/home/ds/images/promos/how_to_shoot_small.jpg",
            url_md: "https://www.apple.com/v/home/ds/images/promos/how_to_shoot_medium.jpg",
            url_lg: "https://www.apple.com/v/home/ds/images/promos/how_to_shoot_large.jpg"
        }, {
            title: "AirPods",
            description: "Wireless. Effortless. Magical.",
            url_sm: "https://www.apple.com/v/home/ds/images/promos/airpods_small.jpg",
            url_md: "https://www.apple.com/v/home/ds/images/promos/airpods_medium.jpg",
            url_lg: "https://www.apple.com/v/home/ds/images/promos/airpods_large.jpg"
        }, {
            title: "Watch",
            description: "The freedom of celluar.",
            url_sm: "https://www.apple.com/v/home/ds/images/promos/watch_series_3_small.jpg",
            url_md: "https://www.apple.com/v/home/ds/images/promos/watch_series_3_medium.jpg",
            url_lg: "https://www.apple.com/v/home/ds/images/promos/watch_series_3_large.jpg"
        }]
    }
});
let macData = Mock.mock({
    success: true,
    data: {
        icons: [
            {
                title: 'MacBook',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'
            }, {
                title: 'MacBook Air',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg'
            }, {
                title: 'MacBook Pro',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg'
            }, {
                title: 'iMac',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg'
            }, {
                title: 'iMac Pro',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_dark_large.svg'
            }, {
                title: 'Mac Pro',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg'
            }, {
                title: 'Mac mini',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg'
            }, {
                title: 'Accessories',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg'
            }, {
                title: 'High Sierra',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg'
            }, {
                title: 'Compare',
                url: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg'
            }
        ],
        carousels: [
            {
                title: 'Photographer',
                description: 'Learn how photographer Bruce Hall, who is legally blind, uses his Mac to create beautiful images.',
                url_sm: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/photographer/small.mp4',
                url_md: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/photographer/medium.mp4',
                url_lg: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/photographer/large.mp4',
                url_xl: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/photographer/xlarge.mp4'
            }, {
                title: 'Coder',
                description: 'See how Peter Kariuki developed an app on his Mac that’s helping make Rwanda’s roads safer.',
                url_sm: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/coder/small.mp4',
                url_md: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/coder/medium.mp4',
                url_lg: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/coder/large.mp4',
                url_xl: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/coder/xlarge.mp4'
            }, {
                title: 'Musician',
                description: 'Discover how Grimes writes, records, and produces her own music — all on her Mac.',
                url_sm: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/musician/small.mp4',
                url_md: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/musician/medium.mp4',
                url_lg: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/musician/large.mp4',
                url_xl: 'https://www.apple.com/105/media/us/mac/family/2018/46c4b917_abfd_45a3_9b51_4e3054191797/anim/musician/xlarge.mp4'
            }
        ]
    }
});

mock.onGet('/home').reply(200, homeData);
mock.onGet('/mac').reply(200, macData);
