module.exports = {
    title: '轱辘UUC',
    description: '玩得开心',
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
              children: [ '/components/button'],
              //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ]
      }
  }