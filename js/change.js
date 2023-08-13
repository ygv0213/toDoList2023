window.addEventListener('load', (e) => {


    let change = document.getElementById("change");
    let ol = document.getElementById("list");
    let tmp = ol.display;

    change.addEventListener('click', (event) => {
        if (tmp !== "null") {
            tmp = ol.display;
        }

        if (tmp === "flex" || tmp === "") {
            ol.id = "list";
            ol.display = "block"
        } else {
            ol.id = "listflex";
            ol.display = "flex"
        }
    })
});