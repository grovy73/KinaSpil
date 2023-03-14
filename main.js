function hideTekst(card){
    if(card.style.visibility == "visible"){
        card.style.visibility = "hidden";
    } else {
        card.style.visibility = "visible";
    }
}


function flipCard(id){
    var card = document.getElementById(id);
    hideTekst(card);
}