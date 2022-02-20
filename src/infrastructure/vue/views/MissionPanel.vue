<template>
  <div>
    <h1>Mars Rover Mission</h1>
    <h5>By Miquel Toran</h5>

    <div id="container">
      <Board/>

      <div id="control-panel">
        <InputInstructions/>
        <Compass/>
        <Report/>
      </div>
    </div>

  </div>
</template>

<script setup>
  import Board from '../components/Board.vue';
  import InputInstructions from '../components/InputInstructions.vue';
  import Compass from '../components/Compass.vue';
  import Report from '../components/Report.vue';
</script>

<style scoped lang="scss">
  h1, h5 {
    text-align: center;
  }

  #container {
    position: relative;
    margin: auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-evenly;
  }

  #control-panel {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
