function changePage(current, next) {

    let oldPage = document.getElementById(current);
    let newPage = document.getElementById(next);

    oldPage.classList.add("leaving");

    setTimeout(function() {
        oldPage.classList.remove("active");
        oldPage.classList.remove("leaving");

        newPage.classList.add("active");
    }, 300);
}

function openLetter() {
    changePage("opening", "letter");
}

function nextPage(current,next) {
    changePage(current, next)
}