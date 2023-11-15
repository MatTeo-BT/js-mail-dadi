const AiNumber=  Math.floor(Math.random() * 7);
const gamerNumber= Math.floor(Math.random() * 7);

if(AiNumber > gamerNumber){
    console.log(`CPU WIN`)
    document.getElementById("casual-computer-number").innerHTML = AiNumber;
} else if(AiNumber < gamerNumber){
    console.log(`GAMER WIN`)
    document.getElementById("casual-gamer-number").innerHTML = gamerNumber;
}






 