function upLikes(id){
    var text = document.querySelector(id);
    currentValue = text.textContent;
    number = parseInt(currentValue);
    number++;
    text.innerHTML = number;
}