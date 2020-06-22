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
                text: '指南',
                link: '/guide/'
            },
            {
                text: '前端',
                items: [{
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
                text: '后端',
                items: [{
                        text: 'Java',
                        link: '/java/'
                    },
                    {
                        text: 'Spring',
                        link: '/spring/'
                    },
                    {
                        text: 'MyBatis',
                        link: '/mybatis/'
                    },
                    {
                        text: 'Netty',
                        link: '/netty/'
                    },

                ],
            },
            {
                text: 'Github',
                link: 'https://www.github.com/zhuangchongyi/blog'
            }

        ],
        sidebar: {
            '/java/': [{
                    title: 'Java基础',
                    collapsable: false,
                    children: [
                        '',
                        'basics/doc1',
                        'basics/doc2',
                        'basics/doc3',
                        'basics/doc4'
                    ]
                },
                {
                    title: 'JVM',
                    collapsable: false,
                    children: [
                        'jvm/',
                        'jvm/doc1'
                    ]
                }
            ]
        }
    }
};
