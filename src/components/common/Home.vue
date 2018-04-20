<template>
  <div>
    <mu-appbar title="JUSTONE">
      <mu-icon-button icon="menu" @click="toggle(true)" slot="left"></mu-icon-button>
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入搜索内容"/>
      <mu-flat-button color="white" label="Login" slot="right"/>
    </mu-appbar>
    <mu-drawer :open="open">
      <mu-appbar title="JUSTONE"/>
      <mu-list>
        <mu-list-item title="API"/>
        <mu-list-item title="You"/>
        <mu-list-item title="About"/>
        <mu-list-item @click.native="toggle(false)" title="Close"/>
      </mu-list>
    </mu-drawer>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <footer style="text-align:center;">
      CopyRight &copy; 2018
    </footer>
  </div>
</template>

<script>
import top from "./top"
import sidebar from "./sidebar"
export default {
  name: 'Home',
  components:{
    top,
    sidebar,
  },
  data(){
    return {
      open: false
    }
  },
  methods: {
    toggle(value){
      this.open = value
    }
  }
}
</script>

<style>

</style>
