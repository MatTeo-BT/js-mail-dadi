// DICE GAME
const AiNumber=  Math.floor(Math.random() * 7);
const gamerNumber= Math.floor(Math.random() * 7);

if(AiNumber > gamerNumber){
    console.log(`CPU WIN`)
    document.getElementById("casual-computer-number").innerHTML = AiNumber;
} else if(AiNumber < gamerNumber){
    console.log(`GAMER WIN`)
    document.getElementById("casual-gamer-number").innerHTML = gamerNumber;
}




// MAIL LIST
const userMail = prompt(`Type your e-mail`);
const mailList = [ `filipponeri@gmail.com, matteoverdi@hotmail.it, marcorossi@libero.it, simonegialli@hmail.org, mirkomarroni@e-mail.net`]
if(mailList === true){
    console.log(`Come in!!`)
}else if(mailList === false){
    console.log(`Sorry, you are not on the list`)
}

 