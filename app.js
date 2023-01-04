
function getRandomValue (min,max){
    const attackValue = Math.floor(Math.random() * (max-min)) +min ;
}

const app = Vue.createApp({
    data () {
    return {
        playerHealth : 100 ,
        monsterHealth : 100,
    };
    } ,
    methods : {
        attackMonster (){
            // generate Random num between 5,12
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        } ,
        attackPlayer (){ 
            // monster attack player 
            const attackValue = getRandomValue(8,15);
            this.playerHealth-=attackValue;
        }
    }

});
app.mount('#game');