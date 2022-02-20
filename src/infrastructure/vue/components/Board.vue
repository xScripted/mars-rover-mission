<template>
  <div id="board">
    <canvas 
      id="canvas" 
      :style="{ width, height }"
    />
  </div>
</template>

<script setup lang="ts">

  import { onMounted, ref, computed, inject } from 'vue';
  import CanvasBoard from '../helpers/CanvasBoard';
  import CanvasRover from '../helpers/CanvasRover';
  import { useStore } from 'vuex';

  const store = useStore();
  const emitter = inject('emitter')

  const width = ref(700);
  const height = ref(700);
  const boardRows = computed(() => store.getters.boardRows);
  const size = Math.round(width.value/boardRows.value);
  const mars = computed(() => store.getters.mars);

  let canvasBoard: CanvasBoard;
  let canvasRover: CanvasRover;


  emitter.on('refreshBoard', () => {
    canvasBoard.refresh(mars.value.board, canvasRover.canvas);
  });

  onMounted(async() => {

    const canvas = document.querySelector('#canvas');

    if(canvas instanceof HTMLCanvasElement) {
      canvasBoard = new CanvasBoard(width.value, height.value, size, canvas);
      canvasRover = new CanvasRover(size);
      await canvasRover.getRover();

      canvasBoard.refresh(mars.value.board, canvasRover.canvas);
      //canvasBoard.drawImage(0,0, canvasRover.canvas);
      //canvasBoard.drawObstacles(mars.value.board);
    } else {
      throw 'HTMLCanvasElement could not be found';
    }
  })

</script>

<style scoped lang="scss">
  #board {
    #canvas {
      border: 5px solid;
      border-radius: 5px;
    }
  }
</style>
