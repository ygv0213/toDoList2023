window.addEventListener('load', (e) => {

    let add = document.getElementById("add");
    let body = document.getElementById("body");

    add.addEventListener('click', (event) => {
        let ok = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("input");

        ok.className = "btn-ok";
        img.id = "ok";
        img.src = src = "/toDoList2023/icons/ok.png";

        text.id = "input";

        ok.appendChild(img);
        ok.appendChild(text);
        body.appendChild(ok);
        body.removeChild(document.getElementsByClassName("btn-add")[0]);


        img.addEventListener('click', (event) => {
            let str = text.value;

            let li = document.createElement("li");
            let ol = document.getElementById("list");

            li.innerText = str;
            li.className = "task";

            ol.appendChild(li);
        })
    })

});