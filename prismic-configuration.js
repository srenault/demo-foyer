module.exports = {

  apiEndpoint: 'https://foyer-demo.prismic.io/api/v2',

  // -- Access token if the Master is not open
  accessToken: 'MC5XWGhodlNnQUFDY0ExOXhJ.UVnvv70Pae-_ve-_ve-_ve-_ve-_vXzvv73vv73vv70EY--_vXzvv73vv73vv73vv71pVx5rOQrvv73vv73vv704',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    if (doc.type == 'page') return `/${doc.lang}/page/${doc.uid}`;
    else if (doc.type == 'homepage') return `/${doc.lang}`;
    else if (doc.type == 'banner') return `/${doc.lang}/client-zone`;
    return '/';
  }
};
