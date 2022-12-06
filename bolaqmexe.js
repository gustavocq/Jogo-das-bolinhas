let contador = 0; 

function adicionarBola() {
    let bola = document.createElement('div');
    bola.setAttribute('class','bola');

    let p1 = Math.floor(Math.random() * 500);
    let p2 = Math.floor(Math.random() * 500);   

    bola.setAttribute('style','left:'+p1+'px;top:'+p2+'px');
    bola.setAttribute('onclick','tirarBola(this)');

    document.body.appendChild(bola);    
}

function tirarBola(elemento) {  
    const mostrar = document.getElementById('contador');       
    contador++;    
    mostrar.innerHTML = contador;

    console.log(contador);  
    document.body.removeChild(elemento);
            
    
    
}


    

function iniciar() {
    setInterval(adicionarBola,500);
}
