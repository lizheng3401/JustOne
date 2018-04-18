<template>
  <div>
    <mu-drawer :open="open">
      <mu-appbar title="Muse UI"/>
      <mu-list>
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  props:{
    open: {
      type: Boolean
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style>

</style>
