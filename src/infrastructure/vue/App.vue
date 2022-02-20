<template>
  <div>
    <MissionPanel/>
  </div>
</template>

<script setup lang="ts">
  import MissionPanel from '@/infrastructure/vue/views/MissionPanel.vue'
  import mitt, { Emitter } from 'mitt';
  import { computed, provide } from 'vue';
  import { useStore } from 'vuex';
  import Mars from '@/domain/services/Mars';
  import Rover from '@/domain/services/Rover';

  const store = useStore();
  const boardRows = computed(() => store.getters.boardRows);

  (function initPlanetComponents(): void {
    const roverCoords = {
      x: 2,
      y: 2
    }

    // Instance main objects
    const mars = new Mars(boardRows.value);
    const rover = new Rover(roverCoords.x, roverCoords.y);

    // Place rover on mars board
    mars.board[roverCoords.x][roverCoords.y] = 9;

    // Save mars on store
    store.commit('setMars', mars);
    store.commit('setRover', rover);
  })();

  // Event emmitter 
  type Events = {
    report: string,
    refreshBoard: string
  }

  const emitter: Emitter<Events> = mitt();
  provide('emitter', emitter);

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #502c2c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #502c2c;

    &.router-link-exact-active {
      color: #b9ad42;
    }
  }
}
</style>
