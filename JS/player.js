class Player{
    constructor(){
        this.name = "";
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });

    }
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }
}