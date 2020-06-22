module.exports = {
    title: '个人主页',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        [
            'link', {
                rel: 'icon',
                href: '/logo.png'
            }

        ] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 3,
        nav: [ // 导航栏配置
            {
                text: '首页',
                link: '/'
            },
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: '了解更多',
                items: [{
                        text: 'Java',
                        link: '/java/'
                    },
                    {
                        text: 'Vue',
                        link: '/vue/'
                    },
                    {
                        text: '微信小程序',
                        link: '/wechat/'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://www.github.com/zhuangchongyi/blog'
            },

        ],
        sidebar: {
            '/guide/': [{
                    title: '指南',
                    collapsable: false,
                    children: [
                        'document/introduce',
                    ]
                },
                {
                    title: '深入',
                    collapsable: false,
                    children: [
                        'document/thorough',
                    ]
                }
            ]

        }
    }
};
