export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options:{
          hotspot : true
        }
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author'
      },
      {
        name: 'launchedAt',
        type: 'datetime',
        title: 'LaunchedAt'
      }
    ]
  }