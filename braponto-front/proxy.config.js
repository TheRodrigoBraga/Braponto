const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://braponto.lojafarol.com.br:8000',
      secure: false,
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = PROXY_CONFIG;