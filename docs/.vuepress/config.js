module.exports = {
    title: 'My Blog',
    description: '我的个人博客',
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
                text: '我的',
                link: '/blog/'
            }
        ],
        sidebar: {
            '/blog/': [{
                title: '介绍',
                collapsable: false,
                children: [
                    'document/vuepress',
                ]
            }]

        }
    }
};
