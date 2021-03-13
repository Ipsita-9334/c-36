class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (state)=>{
            gameState = state.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState: state
        });
    }
}