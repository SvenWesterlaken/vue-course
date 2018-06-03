<template lang="pug">
  .add-qoute
    .form-group
      .row: .col-xs-12.text-center
        b Qoute
      .row: .col-xs-12.col-sm-6.col-sm-offset-3
        textarea.form-control#newqoute(v-model="newQoute", rows="5")
    .form-group
      .row: .col-xs-12.col-sm-2.col-sm-offset-5
        button.btn.btn-primary.btn-block(type="button", @click="addQoute") Add Qoute
</template>

<script>
  import { QouteBus } from './main';
  export default {
    data() { return {
      newQoute: ''
    }},
    methods: {
      addQoute() {
        QouteBus.addQoute(this.newQoute);
      }
    }
  }
</script>
