const proxy = [
    {
      context: '/api',
      target: 'http://braponto.lojafarol.com.br:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;