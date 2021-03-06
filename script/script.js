var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      //console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
      // WindowオブジェクトではなくVueオブジェクトを指定するため.bind(this)を追加
    }.bind(this))
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
    // 通信に関する全ての処理が終わった時に呼び出される
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDemical(value) {
      return value.toFixed(2)
    }
  }
})