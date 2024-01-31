
for (let index = 1; index <= 8; index++) {
    window['myFunction' + index] = function(evt, menu) {
        if (document.getElementById(menu).style.display === "none") {
            document.getElementById(menu).style.display = 'block';
        } else document.getElementById(menu).style.display = 'none';
    }
}