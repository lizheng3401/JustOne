<template>
  <div>
    <mu-drawer :open="true">
      <mu-appbar title="Muse UI"/>
      <mu-list>
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item @click.native="setSideBarSiwtch(false)" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
  name: 'side-bar',
  computed: {
    ...mapState([
      'sideBarSiwtch'
    ])
  },
  methods: {
    ...mapMutations([
      "setSideBarSiwtch"
    ]),
  }
}
</script>

<style>

</style>
