function upLikes(){
    var text = document.querySelector("#likes");
    currentValue = text.textContent;
    number = parseInt(currentValue);
    number++;
    text.innerHTML = number;
}