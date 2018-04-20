<template>
  <div class="content">
    <div class="main">
      <h1 style="margin: auto; text-align: center">{{words.hitokoto}}</h1>
    </div>
    <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="Popup">
     {{popUpInfo}}
    </mu-popup>
  </div>
</template>

<script>
import {getword} from "../../api/api.js"
export default {
  name: 'index',
  data(){
    return {
      words:{},
      Popup: false,
      popUpInfo: ''
    }
  },
  watch: {
    Popup (val) {
      if (val) {
        setTimeout(() => {
          this.Popup = false
        }, 2000)
      }
    }
  },
  methods:{
    getWords(){
      const _this = this
      getword({}).then( resp =>{
        _this.words = resp.data
      }).catch( error => {
        _this.Popup = true
        _this.popUpInfo = "get data error: "+error
      })
    }
  },
  created(){
    this.getWords();  
  }
}
</script>

<style>
.demo-paper {
  display: inline-block;
  height: 600px;
  width: 100%;
  margin: 10px;
}
.content{
  height:80%;
  width: 100%;
  background-image: url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302);
}
.main{
  margin: 100px auto;
}
.demo-popup-top {
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}
</style>
