module.exports = {
    base: "/gulu-vue/",
    title: 'gulugulu~~',
    description: '简易UI组件',
    themeConfig: {
            sidebar: [
            {
              title: '入门',   // 必要的
              //path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/install/','/get-started/'
              ]
            },
            {
              title: '组件',
              children: [ '/components/button','/components/input',
            '/components/grid','/components/layout','/components/tabs',
            'components/collapse','components/toast','/components/popover'
            ],
              //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ]
      }
  }