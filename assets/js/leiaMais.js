function leiaMais(){
  var btnLeiaMais = document.getElementById("btnLeiaMais");
  var titulo = document.getElementsByClassName("titulo_foto");
  var maisTexto = document.getElementsByClassName("descricao_foto");

  if(titulo.style.display == "none"){
    titulo.sytle.display = "flex";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "Leia Mais";
  }else{
    titulo.sytle.display = "none";
    maisTexto.style.display = "flex";
    btnLeiaMais.innerHTML = "Leia Menos";
  }
}