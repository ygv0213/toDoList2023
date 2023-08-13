window.addEventListener('load', (e) => {

    let add = document.getElementById("add");
    let body = document.getElementById("body");

    let btn = document.getElementsByClassName("btn-add")[0];

    add.addEventListener('click', (event) => {
        let ok = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("input");

        ok.className = "btn-ok";
        img.id = "ok";
        img.src = src = "/icons/ok.png";

        text.id = "input";

        ok.appendChild(img);
        ok.appendChild(text);
        body.appendChild(ok);
        body.removeChild(btn);


        img.addEventListener('click', (event) => {
            let str = text.value;

            let li = document.createElement("li");
            let ol = document.getElementById("list");

            if (str != "") {
                li.innerText = str;
                li.className = "task";

                ol.appendChild(li);

                body.removeChild(ok);
                body.appendChild(btn);
            }

        })
    })

});