window.addEventListener('load', (e) => {

    let clear = document.getElementById("reset");

    clear.addEventListener('click', (event) => {
        let ol = document.getElementById("list");
        let list;
        let lifl = document.getElementById("lifl");

        if (!lifl.contains(ol)) {
            ol = document.getElementById("listflex");
            list = ol.getElementsByTagName("li");

            while (list.length > 0) {
                ol.removeChild(list[0]);
            }
        } else {
            list = ol.getElementsByTagName("li");

            while (list.length > 0) {
                ol.removeChild(list[0]);
            }
        }
    })
});