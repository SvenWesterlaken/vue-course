<template lang="pug">
    .row: .col-xs-12
      h3.text-center Qoutes Added
      .progress
        .progress-bar(role="progressbar" :aria-valuenow="qouteCount" aria-valuemin="0" aria-valuemax="10" :style="{width: qoutePercentage, minWidth: '4em'}")
          | {{ qouteCount }} / 10
</template>

<script>
    import { QouteBus } from './main'

    export default {
      data() { return {
        qouteCount: 0,
        qoutePercentage: '0%'
      }},
      created() {
        QouteBus.$on('QoutesUpdated', (count) => {
          this.qouteCount = count;
          this.qoutePercentage = `${count * 10}%`;
        });
      }

    }
</script>
