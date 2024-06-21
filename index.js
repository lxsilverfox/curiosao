// para acessar o chrome por exemplo usa o = windown
// html = windown.document
// css = window.document.body.style

// window.location.href - acessa o link da pagina 
// window.document.body.style = "background: #000" - deixa o fundo da pagina preto
// window.document.write("escreve algum valor") - escreve algum valor na pagina

/* let mudandoCor = prompt("S para mudar a cor")

if(mudandoCor == "S"){
    window.document.body.style = "background: #0ff"
} */

/*   function responder(escolha) {
    if (escolha) {
        window.document.write();
    } else {
      window.document.write("Você disse Não.");
    }
  } */


function responder(escolha) {
    if (escolha) {
    if (escolha) {
        document.body.innerHTML = `
            <div class='mensagem seSim'>
                <h1>EEHh  <span>Curiosaooo!<span></h1>
                <img src='assets/img.jpeg'>
                <h1>😂😂😂</h1>
                <p>Se for abduzido vai tomar banho todo dia? kkk</p>
        
                
            </div>`;
    } else {
        document.body.innerHTML = "<h1>Você disse Não.</h1>";
    }
}}
