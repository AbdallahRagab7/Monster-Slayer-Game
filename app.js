
function getRandomValue (min,max){
   return Math.floor(Math.random() * (max-min)) +min ;
}

const app = Vue.createApp({
    data () {
    return {
        playerHealth : 100 ,
        monsterHealth : 100,
        currentRound : 0 ,
     
    };
    } ,
    computed : {
        monsterBarStyles (){
            return {width: this.monsterHealth + '%'}
        },

        playerBarStyles (){
            return {width: this.playerHealth + '%'}
        },

        mayUseSpecialAttack (){
            return this.currentRound % 3 !== 0 ;
        }

    },
    methods : {
        attackMonster (){
            // generate Random num between 5,12
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            // when player attack Monster, the Monster attack back the player
            this.attackPlayer();
            this.currentRound++;
        } ,
        attackPlayer (){ 
            // monster attack player 
            const attackValue = getRandomValue(8,15);
            this.playerHealth-=attackValue;
        },
        specialAttackMonster (){
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;

        }
    }

});
app.mount('#game');