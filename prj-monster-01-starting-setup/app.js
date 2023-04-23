const { createApp } = Vue;

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackPoint = getRandomValue(5, 20);
      this.monsterHealth -= attackPoint;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackPoint = getRandomValue(10, 25);
      this.playerHealth -= attackPoint;
    }
  }
}).mount('#game');