
//fadein do texto da página home
document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("divtitle");

    function fade1(el) {
        let opacity = 0;
        let interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.03;
                el.style.opacity = opacity;

            } else {
                clearInterval(interval);
            }
        }, 50);
    }
    fade1(element);
});

//fade-in do texto da página sobre
document.addEventListener("DOMContentLoaded", function () {
    var element1 = document.getElementById("sobrefade1");
    var element2 = document.getElementById("sobrefade2");
    var element3 = document.getElementById("sobrefade3");
    var element4 = document.getElementById("sobrefade4");


    function fade2(el) {
        let opacity = 0;
        let interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                el.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
    fade2(element1);

    setTimeout(function () {
        fade2(element2)
    }, 1000);

    setTimeout(function () {
        fade2(element3)
    }, 2000);

    setTimeout(function () {
        fade2(element4)
    }, 3000);
});

// fade-in da imagem da página história
var image1 = document.getElementById("histimage1");
var image2 = document.getElementById("histimage2");



function fadeimage(el) {
    let opacity = 0;
    let interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            el.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

setTimeout(function () {
    fadeimage(image1)
}, 1000);

setTimeout(function () {
    fadeimage(image2)
}, 2000);

// carrosel
var count = 1;
document.getElementById("radio1").checked = true;

var radios = document.getElementsByClassName("radioclass");
var autoButtons = document.getElementsByClassName("auto-btn");
var manualButtons = document.getElementsByClassName("manual-btn");
var intervalId;

function mostrarCheck() {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            autoButtons[i].classList.add("active-btn");
            manualButtons[i].classList.add("active-btn");
        } else {
            autoButtons[i].classList.remove("active-btn");
            manualButtons[i].classList.remove("active-btn");
        }
    }
}

document.getElementById("radio1").checked = true;
mostrarCheck();

for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function () {
            count = i + 1;
            clearInterval(intervalId);
            intervalId = setInterval(function () {
                nextImage();
            }, 3000);
            mostrarCheck();
        });
    }

intervalId = setInterval(function () {
    nextImage();
}, 3000);

function nextImage() {
    count++;

    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
    mostrarCheck();
}
