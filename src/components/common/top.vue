<template>
  <mu-appbar title="JUSTONE">
    <mu-icon-button icon="menu" @click="setSideBarSiwtch(true)" slot="left"></mu-icon-button>
    <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入搜索内容"/>
    <mu-flat-button color="white" label="Login" slot="right"/>
  </mu-appbar>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  name: 'top',
  methods: {
    ...mapMutations([
      "setSideBarSiwtch"
    ]),
  }
}
</script>

<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>
