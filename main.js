
//referência que guarda lista de teclas de som
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio)

  if(elemento && elemento.localName === 'audio'){
    elemento.play();
  }
  else{
    console.log('Elemento não encontrado ou inválido!');
    alert('Elemento não encontrado');
  }

}
//Iteração dos elementos dentro das duas listas
for (let i = 0; i < listaDeTeclas.length; i++){ 
    const tecla = listaDeTeclas[i]; //recebe a tag inteira de cada item da lista
    const instrumento = tecla.classList[1]; //seleciona a informação da classe 'tecla_ ...' 

    //template string, uma string dinâmica que pode ser alterada com uma condicional ou iteração 
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    //console.log(i);

    tecla.onkeydown = function (keySelecionada) {
        if(keySelecionada.code === "Enter" || keySelecionada.code === "Space") {
        tecla.classList.add('ativa');
        }
      }

      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }

}


