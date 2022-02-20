<template>
  <div id="instructions">
    <input id="input-instructions" 
      readonly 
      :value="instructions"
      type="text" 
    />

    <div id="instructions-panel">
      <button @click="write('L')">L</button>
      <button @click="write('F')">F</button>
      <button @click="write('R')">R</button>
      <button @click="del()"> DEL </button>
    </div>
    
    <button id="send" @click="sendInstructions()"> Send Instructions </button>
  </div>
</template>

<script setup lang="ts">

  import { ref, computed, inject } from 'vue';
  import { useStore } from 'vuex';


  const emitter = inject('emitter');
  const store = useStore();

  const rover = computed(() => store.getters.rover);
  const mars = computed(() => store.getters.mars);


  const instructions = ref('');

  function write(direction: string): void {
    instructions.value += direction;
  }

  function del(): void {
    instructions.value = instructions.value.slice(0, -1);
  }

  function sendInstructions(): void {
    let x = 0;
    const instructionsArr = instructions.value.split(''); 

    instructions.value = ''; 

    const timer = setInterval(() => {
      const letter = instructionsArr[x++];
      const report = rover.value.moveLFR(letter, mars.value.board);
      emitter.emit('refreshBoard');

      emitter.emit('report', report.message + '<br>');
      
      if(x >= instructionsArr.length || report.status) clearInterval(timer);
    }, 1000)
  }



</script>

<style scoped lang="scss">

  #instructions {
    margin: 20px;
    margin-top: 0;

    input, button {
      margin: 10px 0px;
      padding: 5px 15px;
      font-size: 20px;
    }

    #instructions-panel{
      display: flex;
      justify-content: space-between;

      button {
        cursor: pointer;
      }
    } 

    #send {
      cursor: pointer;
      width: 100%;
    }
  }

</style>


