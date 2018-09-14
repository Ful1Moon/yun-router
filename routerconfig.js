// 路由配置及各组件片段
var routeConfig = [
    {
      url: '',
      templateId: 'home'
    },
    {
      url: 'home',
      templateId: 'home',
      children:[
        {
          url: 'page1',
          templateId: 'page4',
          children: [
            {
              url: 'page2',
              templateId: 'page2'
            }
          ]
        },
        {
          url: 'page2',
          templateId: 'page5'
        },
        {
          url: 'page3',
          templateId: 'page6'
        }
      ]
    },
    {
      url: 'page1',
      templateId: 'page1'
    },
    {
      url: 'page2',
      templateId: 'page2'
    },
    {
      url: 'page3',
      templateId: 'page3'
    }
  ];