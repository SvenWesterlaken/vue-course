new Vue({
  el: '#app',
  data: {
    player_health: 100,
    monster_health: 100,
    game_started: false,
    logs: []
  },
  methods: {
    start() {
      this.player_health = 100;
      this.monster_health = 100;
      this.game_started = true;
    },
    giveUp() {
      this.reset();
    },
    win() {
      alert("You've beaten the monster!");
      this.reset();
    },
    reset() {
      this.game_started = false;
      this.logs = [];
    },
    attack() {
      let dmg = Math.floor((Math.random() * 7) + 4);
      this.monster_health -= dmg;
      this.addLog('player', 'attack', dmg);
      this.monsterTurn();
    },
    specialAttack() {
      let dmg = Math.floor((Math.random() * 10) + 11);
      this.monster_health -= dmg;
      this.addLog('player', 'attack', dmg);
      this.monsterTurn();
    },
    heal() {
      this.player_health += 10;
      this.addLog('player', 'heal', 10);
      this.monsterTurn();
    },
    monster() {
      let dmg = Math.floor((Math.random() * 7) + 4);
      this.player_health -= dmg;
      this.addLog('monster', 'attack', dmg);
    },
    monsterTurn() {
      this.monster_health <= 0 ? this.win() : this.monster();
    },
    addLog(from, type, amount) {
      this.logs.push({from, type, amount});
    },
    getReciever(type, from) {
      if (type == 'heal') return '';
      return from == 'player' ? 'monster' : 'player';
    }
  }
});
