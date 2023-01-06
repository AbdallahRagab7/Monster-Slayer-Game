
function getRandomValue (min,max){
   return Math.floor(Math.random() * (max-min)) +min ;
}

const app = Vue.createApp({
    data () {
    return {
        playerHealth : 100 ,
        monsterHealth : 100,
        currentRound : 0 ,
        winner : null , //treated as false
     
    };
    } ,
    computed : {
        monsterBarStyles (){
            if (this.monsterHealth <0 ) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },

        playerBarStyles (){
            if (this.playerHealth <0 ) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },

        mayUseSpecialAttack (){
            return this.currentRound % 3 !== 0 ;
        }

    }, watch : {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                //draw
                this.winner='draw';
            }else if (value <= 0 ) {
                //player lost 
                this.winner='monster'
            }

        },
        monsterHealth (value){
            if (value <= 0 && this.playerHealth <= 0){
                //draw
                this.winner= 'draw';
            }else if (value <= 0 ) {
                //Monster lost
                this.winner = 'Player';
            }
        }
    },

    methods : {
        startGame (){
            this.playerHealth=100;
            this.monsterHealth = 100;
            this.currentRound=0;
            this.winner='null';

        },
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

        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if (this.playerHealth+healValue>100){
                this.playerHealth = 100;
            }else {
                this.playerHealth+=healValue;
            }
            this.attackPlayer()
        },
        surrender (){
            this.winner='monster'; 
        }
    }

});
app.mount('#game');