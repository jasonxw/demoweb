window.onload = function() {
    document.getElementById("showpage").style.display = "none";
    document.getElementById("loader2").style.display = "none";
    changeNavBar();
    togglePage();
    cardPage();
    h1Fix();
    loader1();

};

var h1Fix = function() {
    var x = document.getElementsByClassName("card");
    for (var i = 1; i < x.length; i++) {
        x[i].getElementsByTagName("h1")[0].className = "h1Fix";

    }
};

function showPage() {
    var x = document.getElementById("loader1").style.display = "none";
    var x1 = document.getElementById("showpage").style.display = "block";
}

function showpage2() {
    var x = document.getElementById("loader2").style.display = "block";
    var x1 = document.getElementById("showpage2").style.display = "none";
    setTimeout(loader2, 1000);
}

function loader1() {
    setTimeout(showPage, 1000);
}

function loader2() {
    var x = document.getElementById("loader2").style.display = "none";
    var x1 = document.getElementById("showpage2").style.display = "block";
}

var changeNavBar = function() {
    window.addEventListener("scroll", navBar);

};

var navBar = function() {
    var a = window.pageYOffset;
    var b = document.getElementsByClassName('top-bar')[0];
    if (a > 20) {
        b.classList.add("top-barchange");

    } else {
        b.classList.remove("top-barchange");
    }
};

function cardPage() {
    var m = document.getElementsByClassName("card");
    this.console.log(m);
    for (var i = 0; i < m.length; i++) {
        if (i == 0) {
            m[i].classList.add("display");
        } else {
            m[i].classList.add("non-display");
        }
    }

}

function togglePage() {
    var toggleP = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
    for (var i = 0; i < toggleP.length; i++) {
        toggleP[i].onclick = change;
    }
}

function change() {
    showpage2();
    var x = this.children[0].innerText;
    switch (x) {
        case "Home":
            setPage(0);
            break;
        case "Resume":
            setPage(1);
            break;
        case "Service":
            setPage(2);
            break;
        case "Blog":
            setPage(3);
            break;
        case "Contact":
            setPage(4);
            break;
    }
}

function setPage(v) {
    var m = document.getElementsByClassName("card");
    for (var i = 0; i < m.length; i++) {
        if (v == i) {
            m[i].className = "card";
        } else {
            m[i].classList.add("non-display");
        }
    }
}