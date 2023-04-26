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
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' }
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' }
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Monster lost
        this.winner = 'player';
      }
    }
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackPoint = getRandomValue(5, 20);
      this.monsterHealth -= attackPoint;
      this.addLogMessages('player', 'attack', attackPoint);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackPoint = getRandomValue(10, 25);
      this.playerHealth -= attackPoint;
      this.addLogMessages('monster', 'attack', attackPoint);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackPoint = getRandomValue(15, 30);
      this.monsterHealth -= attackPoint;
      this.addLogMessages('player', 'attack', attackPoint);
      this.attackPlayer();
    },
    healPlayer() {
      const healPoint = getRandomValue(12, 30);

      this.currentRound++;
      if (this.playerHealth + healPoint > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healPoint;
      }

      this.addLogMessages('player', 'heal', healPoint);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessages(who, what, value) {
      // 因為有三個參數會傳進來，所以這裡可以使用物件
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    }
  }
}).mount('#game');