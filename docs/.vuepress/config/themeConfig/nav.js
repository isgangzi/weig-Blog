// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端乱炖',
    link: '/backend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '原生能力',
        items: [
          { text: 'JavaScript', link: '/pages/98424b/' },
          { text: 'Node', link: '/pages/04a264/' }
        ],
      },
      {
        text: '框架能力',
        items: [
          { text: 'Spring', link: '/pages/235d3a/' },
          { text: 'SpringBoot', link: '/pages/58cdc3/' },
          { text: 'Mybaties', link: '/pages/58cdc3/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《TypeScript》学习笔记', link: '/note/typescript/' },
          { text: '《JavaScript高程4》学习笔记', link: '/note/javascript4/' }
        ],
      }
    ],
  },
  {
    text: '技术杂谈',
    link: '/tech/',
    items: [
      { text: '大杂烩', link: '/pages/4e5c11/' },
      { text: 'Docker', link: '/pages/a3da47/' },
      { text: '秋招面经系列', link: '/pages/3a9163/' },
      { text: '博客搭建', link: '/pages/bf819e/' },
    ],
  },
  {
    text: '百草屋',
    link: '/read/',
    items: [
      { text: '最近在读', link: '/pages/511ed7/' },
      { text: '奇思妙想', link: '/pages/44e592/' },
      { text: '读书收获', link: '/pages/b79286/' },
    ],
  },
  // { text: '归档', link: '/archives/'},
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '归档', link: '/archives/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
    ],
  },
  { text: '收藏', link: '/collect/' },
  { text: '关于我', link: '/about/' }
]
