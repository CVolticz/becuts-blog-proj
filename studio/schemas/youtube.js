/**
 * Schema to set up youtube embedding on the blog post page
 */
export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
      }
    ]
  }