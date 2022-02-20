<template>
  <div id="report">
    <h4> Reports </h4>
    <div class="reports" v-html="reports"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, inject } from 'vue';

  const emitter = inject('emitter');
  const reports = ref('');

  emitter.on('report', (report: string) => {
    reports.value += report;
  });

</script>

<style scoped lang="scss">
  #report {
    border: 1px solid gray;
    color: black;
    text-align: center;
    height: 300px;
    overflow-y: scroll;
    margin: 20px;
    margin-top: 50px;
    padding: 10px;
    border-radius: 5px;

    .reports {
      text-align: left;
      font-size: 12px;
    }
  }
</style>