window.addEventListener('load', (e) => {

    let search = document.getElementById("srch");
    let body = document.getElementById("body");
    let input = document.createElement("input");
    input.id = "inp";

    search.addEventListener('click', (event) => {
        let ol = document.getElementById("list");
        let li = ol.getElementsByTagName("li");

        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "block";
        }

        let maindiv = document.getElementById("inputsearch");
        if (maindiv.contains(input)) {
            maindiv.removeChild(input);
            input.value = "";
        } else {
            maindiv.appendChild(input);
        }

        input.addEventListener('keyup', (event) => {
            for (let i = 0; i < li.length; i++) {
                if (!li[i].innerText.includes(input.value)) li[i].style.display = "none";
            }
            for (let i = 0; i < li.length; i++) {
                if (li[i].innerText.includes(input.value)) li[i].style.display = "block";
            }
        })
    })
});