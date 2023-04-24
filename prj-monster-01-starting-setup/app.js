const { createApp } = Vue;

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + '%' }
    },
    playerBarStyle() {
      return { width: this.playerHealth + '%' }
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackPoint = getRandomValue(5, 20);
      this.monsterHealth -= attackPoint;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackPoint = getRandomValue(10, 25);
      this.playerHealth -= attackPoint;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackPoint = getRandomValue(15, 30);
      this.monsterHealth -= attackPoint;
      this.attackPlayer();
    }
  }
}).mount('#game');