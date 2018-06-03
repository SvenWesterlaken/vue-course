<template lang="pug">
    .container
      .row: .col-xs-12: progress-bar
      .row: .col-xs-12: new-qoute
      .row
        qoute(v-for="(qoute, index) in qoutes")
          .panel.panel-default
            .panel-body(@click="deleteQoute(index)")
              p.qoute {{qoute}}
      .row: .col-xs-12
        .alert.alert-info.text-center(role="alert")
          b Info:
          | Click on a Qoute to delete it
</template>

<script>
    import ProgressBar from './ProgressBar.vue';
    import Qoute from './Qoute.vue';
    import NewQoute from './NewQoute.vue';
    import { QouteBus } from './main';

    export default {
      components: {
        ProgressBar,
        NewQoute,
        Qoute
      },
      computed: {
        qoutes() {
          return QouteBus.qoutes;
        },
        deleteQoute(index) {
          QouteBus.deleteQoute(index);
        }
      }
    }
</script>

<style>
  .container {
    margin-top: 50px;
  }

  .row {
    margin-bottom: 10px;
  }
</style>
