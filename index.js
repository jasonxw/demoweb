window.onload = loading;

function loading() {
    var navitem = document.getElementsByClassName("nav-item");
    console.log(navitem);
    for (var i = 0; i < navitem.length; i++) {
        navitem[i].addEventListener("click", test)
    }
}



function test() {
    var c = document.getElementsByClassName("container");
    switch (this.id) {
        case "p-home":
            loadinPage(c[0], this);
            break;
        case "p-resume":
            loadinPage(c[1], this);
            break;
        case "p-service":
            loadinPage(c[2], this)
            break;
        case "p-blog":
            loadinPage(c[3], this)
            break;
        case "p-contact":
            loadinPage(c[4], this)
            break;
        default:
            loadinPage(c[5], this)
            break;
    }
}



function loadinPage(i, p) {
    var c = document.getElementsByClassName("container")
    var c2 = document.getElementById("nav")
    for (x = 0; x < c.length; x++) {
        c[x].children[0].className = "card-hide";
        c2.getElementsByTagName("li")[x].className = "";
        if (i.children[0].id == c[x].children[0].id) {
            c[x].children[0].className = "card";
            c2.getElementsByTagName("li")[x].className = "active active-m";
        }
    }
}
