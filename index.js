var currentSelected = 0;
function selectRating(value) {
    const rating = document.getElementById(value);
    if(currentSelected === 0) {
        currentSelected = value;
    }
    else {
        const prev = document.getElementById(currentSelected);
        prev.style.backgroundColor = "hsl(213, 17%, 24%)";
    }
    rating.style.backgroundColor = "hsl(217, 12%, 63%)";
    currentSelected = value;
}