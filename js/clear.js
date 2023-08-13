window.addEventListener('load', (e) => {

    let clear = document.getElementById("reset");

    clear.addEventListener('click', (event) => {
        let ol = document.getElementById("list");
        let list = ol.getElementsByTagName("li");

        while (list.length > 0) {
            ol.removeChild(list[0]);
        }
    })
});