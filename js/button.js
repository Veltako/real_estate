function btn() {
    var btn = document.getElementById("btn");
    if (btn.innerHTML === "Contactez") {
        btn.innerHTML = "Au 00 65 87 99 00";
    } else {
        btn.innerHTML = "Contactez";
    }
}