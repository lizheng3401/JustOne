<template>
  <div class="content">
    <div class="main">
      <h1 style="margin: auto; text-align: center">{{words.hitokoto}}</h1>
      <div style="margin: 10px -100px; text-align:right;">
        <span style="font-size: 20px"><em>----{{words.from}}</em></span>
      </div>
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
      getword({c: 'b'}).then( resp =>{
        _this.words = resp.data
      }).catch( error => {
        _this.Popup = true
        _this.popUpInfo = "get data error: "+error
      })
    }
  },
  created(){
    const _this = this;
    _this.getWords();
    setInterval(function () {
      _this.getWords();
    }, 5000);
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
.di{
  filter: brightness(0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(https://piccdn.freejishu.com/images/2018/03/11/qf3cu.jpg) center no-repeat;
  background-size: cover;
}
.content{
  width: 100%;
  height: 400px; 
  /* z-index: 1; */
  /* background-image: url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302); */
 
}
.main{
  max-width: 600px;
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
