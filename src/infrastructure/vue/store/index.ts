import Mars from '@/domain/services/Mars';
import Rover from '@/domain/services/Rover';
import { createStore } from 'vuex';

export default createStore({
  state: {
    boardRows: 10 as number,
    mars: new Mars(0),
    rover: new Rover(0,0),
  },
  getters: {
    boardRows: (state) => state.boardRows,
    mars: (state) => state.mars,
    rover: (state) => state.rover,
  },
  mutations: {
    setMars: (state, mars: Mars) => state.mars = mars,
    setRover: (state, rover: Rover) => state.rover = rover,
  },
  actions: {
  }
})
