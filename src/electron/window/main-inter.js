

module.exports = {
  devUrl: function(){
    return process.env.WEBPACK_DEV_SERVER_URL;
  },
  isDev: function(){
    if(this.devUrl()) return true;
    return false;
  },
  url: function(){
    if(this.isDev()) return this.devUrl();
    return 'app://./index.html'
  },
}