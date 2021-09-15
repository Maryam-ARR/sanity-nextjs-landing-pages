export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6142094986468853b97bfdc0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rpa92hd4',
                  apiId: 'b6fe18b4-d6b9-4ec4-9e0e-61fb251380f2'
                },
                {
                  buildHookId: '614209490ddc52541e84743a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vxc7twzc',
                  apiId: 'd6c5a0ce-63f7-4967-b1c3-4549bb706001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Maryam-ARR/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vxc7twzc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
