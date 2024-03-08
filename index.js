let vetMenu = null;
let vet = null;
let span = document.getElementById("btnCerca");
let check = false;

    let elFilm = document.getElementById("Film");
    let elSerieTV = document.getElementById("serieTV");
    let elAnimazione = document.getElementById("Animazione");



window.onload = async()=>{
    let busta = await fetch("http://localhost:5000/prelievo")

    let risposta = await busta.json();

    while(!check){
        span = document.getElementById("btnCerca").value;
        if(span = ""){

        }else{
            check = true;
        }
    }


    vetMenu = risposta;
    console.log(vetMenu);


    let somma = 0;
    let media = 0;
    let i = 0
    for(let j = 0; j < vetMenu.length; j++){
        for (i = 0; i < vetMenu.voto.length;i++){
            somma += vetMenu.voto[i];
        }
    }
    media = somma/i;
    console.log(somma);
    let ricerca = document.getElementById("txtCerca");
    let recensione = document.getElementById("nuovaRecensione");
    let voto = document.getElementById("rngNuovo").value;
    let btn = document.getElementById("btnPlus");

    btn.addEventListener("click", function(){
        mandata(voto);
    });
    
    for( let i = 0; i < vetMenu.length;i++){
        console.log("ciao");
       /*  vet[i] = {titolo:vetMenu.titolo,tipo:vetMenu.tipo,voto:[vetMenu.voto]};
        console.log(vet[i]);*/
        /*
        if(vetMenu[i].tipo == "animazione"){
            creaIMG(vetMenu[i],1);
        }else if(vetMenu[i].tipo == "film"){
            creaIMG(vetMenu[i],2);
        }else{
            creaIMG(vetMenu[i],3);
        }
        */
       let div2 = document.createElement("div");
       div2.setAttribute("class","dati");
       div2.addEventListener("click",()=>{
        ricerca.setAttribute("display","flex");
        recensione.setAttribute("display","flex");
       });
        let div = document.createElement("div");
        div.innerHTML = vetMenu[i].titolo;
        let div1 = document.createElement("div");
        div1.innerHTML = vetMenu[i].media;
        elAnimazione.appendChild(div);
        elAnimazione.appendChild(div1);


    }


}

async function mandata(voto){
    let busta = await fetch("http://localhost:5000/recensione",{
            "method":"POST",
            "headers":{"Content-Type":"application/json"},
            "body":JSON.stringify(voto),
        });
        let risposta = await busta.json();
}

/*
function creaIMG(tipo,n){
    let article = document.createElement("article");
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let somma = 0;
    let media = 0;
    let i = 0
    for (i = 0; i < tipo.voto.length;i++){
        somma += tipo.voto[i];
    }
    media = somma/i;

    switch(n){
        case 1:
            
            div.setAttribute("class","dati");
            article.appendChild(div);
            div1.innerHTML = tipo.titolo;
            div.appendChild(div1);
            
            div1 = document.createElement("div");
            div.innerHTML = tipo.media;
            elAnimazione.appendChild(article);
            break;
        case 2:
                
                div.setAttribute("class","dati");
                article.appendChild(div);
                div1.innerHTML = tipo.titolo;
                div.appendChild(div1);
                
                div1 = document.createElement("div");
                div.innerHTML = tipo.media;
                elFilm.appendChild(article);
            break;
        case 3:
                
                div.setAttribute("class","dati");
                article.appendChild(div);
                div1.innerHTML = tipo.titolo;
                div1 = document.createElement("div");
                div1.innerHTML = tipo.media;
                div.appendChild(div1);
                elSerieTV.appendChild(article);
            break;
    }
    
}*/