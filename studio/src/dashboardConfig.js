export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8207396c099dd6ac116bff',
                  title: 'Sanity Studio',
                  name: 'kolonihave-studio',
                  apiId: 'ce0f4a11-6680-4ad3-a05f-7784ea1f89fd'
                },
                {
                  buildHookId: '5e82073939e47b864b092d44',
                  title: 'Blog Website',
                  name: 'kolonihave',
                  apiId: 'e45cc68a-303a-4757-ba17-8b8f64245cf9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jesperkc/kolonihave',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://kolonihave.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
