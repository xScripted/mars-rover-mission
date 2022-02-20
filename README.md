# Mars Rover Mission

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. Develop a software that translates the commands sent from earth to instructions
that are understood by the rover.

### Requirements

● You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W)
it is facing.
● The rover receives a collection of commands. (E.g.) FFRRFFFRL
● The rover can move forward (f).
● The rover can move left/right (l,r).
● Suppose we are on a really weird planet that is square. 200x200 for example :)
● Implement obstacle detection before each move to a new square. If a given

sequence of commands encounters an obstacle, the rover moves up to the last
possible point, aborts the sequence and reports the obstacle.

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
