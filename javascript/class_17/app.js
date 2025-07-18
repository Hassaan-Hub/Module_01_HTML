function chackAdress(email, password) {
    if ((document.getElementById(email).value !== "") && (document.getElementById(password).value !== "")) {
        alert("Form Submit")
    } else {
        alert("Invalid email or password")
    }
}

function expandText() {
    var largepera = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem debitis officiis, fuga veritatis, sit iure exercitationem aliquid repellat tempora laudantium voluptatibus at aspernatur incidunt nostrum consequatur laboriosam porro praesentium. Tempore!
Voluptatem reprehenderit, consectetur optio reiciendis at id expedita quo odit nam tenetur quia excepturi aperiam, asperiores iure odio vel quas, illo nostrum. Voluptatem iusto ea ab quae ipsa, veritatis odio?
Possimus accusamus ut aliquid fugit, minima harum quis quia molestias ea, velit illo, nobis accusantium debitis obcaecati voluptatem suscipit dolor sed error voluptatibus labore vel ipsa voluptate? Sint, quisquam exercitationem?
Sapiente enim aperiam dicta amet, quae quasi sit consequatur ut voluptas eum, sequi eos iure dolor, delectus voluptate corrupti quaerat nobis quibusdam sint autem inventore minima porro! Nemo, vero ex?
Nam voluptate ratione necessitatibus exercitationem omnis quisquam quam esse blanditiis voluptas minima, harum architecto reiciendis dicta ab tenetur voluptatibus delectus nihil quidem! Ducimus accusamus quis quaerat dolore? Rem, quas veniam!`

    document.getElementById('pera').innerHTML = (largepera)
}

function makeInvisible(){
    document.getElementById('hide').className = "hiden"
}

function makeVisible(){
    document.getElementById('hide').className = "show"
}



