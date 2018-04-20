import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters"
import states from "./states"
import mutations from "./mutations"

Vue.use(Vuex)


if (module.hot) {   
  module.hot.accept(['./mutations'], () => {  
    const mutations = require('./mutations').default  
    store.hotUpdate({  
      mutations  
    })  
  })  
} 

export default new Vuex.Store({
  getters,
  states,
  mutations
})