<template>
  <div id="compass">
    <img src="@/infrastructure/vue/assets/compass.png" alt="Compass"/>
    <div class="direction"> {{ direction }} </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, inject } from 'vue';
  import { useStore } from 'vuex';

  const emitter = inject('emitter');
  const store = useStore();
  const rover = computed(() => store.getters.rover);
  const direction = ref(rover.value.direction);

  emitter.on('refreshBoard', () => {
    direction.value = rover.value.direction;
  });

</script>

<style scoped lang="scss">
  #compass {

    border: 1px solid gray;

    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    
    display: flex;
    justify-content: space-evenly;

    img {
      width: 60px;
    }

    .direction {
      color: black;
      width: 30px;
      padding: 10px;
      font-size: 35px;
    }
  }
</style>