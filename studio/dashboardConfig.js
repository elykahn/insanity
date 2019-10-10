export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d9f25764839f0a9b87897ab',
                  title: 'Sanity Studio',
                  name: 'insanity-studio',
                  apiId: '56a599ae-8a68-4933-baee-b6b85d10a860'
                },
                {
                  buildHookId: '5d9f2577373a816795ff3017',
                  title: 'Blog Website',
                  name: 'insanity-web',
                  apiId: 'dc344a97-8d05-4a17-b203-5df173e430d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elykahn/insanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://insanity-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
