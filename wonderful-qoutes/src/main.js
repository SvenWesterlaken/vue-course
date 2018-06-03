import Vue from 'vue'
import App from './App.vue'

export const QouteBus = new Vue({
    data: {
      qoutes: []
    },
    methods: {
      addQoute(qoute) {
        this.qoutes.push(qoute);
        this.$emit('QoutesUpdated', this.qoutes.length);
      },
      deleteQoute(index) {
        this.qoutes.splice(index, 1);
        this.$emit('QoutesUpdated', this.qoutes.length);
      }
    }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
