import Vue from 'vue'
import Pluralize from 'pluralize'

const Pluralize = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        pluralize: pluralize
      }
    })
  }
}

Vue.use(Pluralize)
