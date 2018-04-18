<template>
  <div>
    <top></top>
    <sidebar :open="true"></sidebar>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
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
  }
}
</script>

<style>

</style>
