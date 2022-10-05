
//inserindo variáveis
let seletorCesar = document.querySelector('.seletorCesar')
let cifras = document.getElementById('cifras')
let msg1 = document.getElementById('msg1')
let msg2 = document.getElementById('msg2')
let seletor = document.querySelectorAll('.codigo')
let incremento = document.getElementById('posiçãoCesar')
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let btncodificar = document.getElementById('codificar');
let btndecodificar = document.getElementById('decodificar');
let submit = document.getElementById('submit')
//inserindo Função para aparecer o complemento para utilização da codificação com Cifra de Cesar.

cifras.addEventListener('change', function() {
    if(cifras.value == 'cesar') {
        seletorCesar.style.display = 'flex'
    } else {
        seletorCesar.style.display = 'none'
    }
})

//Função para exibir o texto "Codificar" e "Decodificar"

btncodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Codificar!'
})

btndecodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Decodificar!'
})

//Função para trazer o método Cifra de César ou Base64
    
//Função Base64

    function codBase64() {
        let mensagem = document.querySelector('#msg1').value
        let codificado = btoa(mensagem)
        return codificado
}
    function decBase64(){
        let mensagem = document.querySelector('#msg1').value
        let decodificado = atob(mensagem)
        return decodificado
}

//Função Cifra de Cesar

    function codCesar() {
        let elementoDaMensagem = msg1.value;
        let mensagemMinuscula = elementoDaMensagem.toLowerCase();
        let transformarNumero = (Number(incremento.value) % 26);
        let mensagemCodificada = '';
      
        for(let i = 0; i < mensagemMinuscula.length; i++){
           for(let j =0; j < alfabeto.length; j++){
             if(mensagemMinuscula[i] == alfabeto[j]){
               mensagemCodificada += alfabeto [j + transformarNumero]
               break;
           } else if (mensagemMinuscula[i] == ' ') {
               mensagemCodificada += ' ';
               break;
           }
          }    
      }
      return mensagemCodificada
      }
      
          function decCesar() {
          let elementoDaMensagem = msg1.value;
          let mensagemMinuscula = elementoDaMensagem.toLowerCase()
          let transformarNumero = (Number(incremento.value) % 26)
          let mensagemCodificada = '';
        
          for(let i = 0; i < mensagemMinuscula.length; i++){
             for(let j = alfabeto.length - 1; j >= 0; j--){
               if(mensagemMinuscula[i] == alfabeto[j]){
                 mensagemCodificada += alfabeto [j - transformarNumero]
                 break;
             } else if (mensagemMinuscula[i] == ' ') {
                 mensagemCodificada += ' ';
                 break;
             }
            }       
        }
        return mensagemCodificada
      }
// adicionando eventos

      submit.addEventListener('click', function(e){
        e.preventDefault();
        if(btncodificar.checked && cifras.value === "base"){
            msg2.innerText = codBase64();

        } else if(btndecodificar.checked && cifras.value === "base"){
            msg2.innerText = decBase64();

        } else if(btncodificar.checked && cifras.value === "cesar"){
            msg2.innerText = codCesar()

        } else if(btndecodificar.checked && cifras.value === "cesar"){
            msg2.innerText = decCesar()

        } else{
            msg2.innerText = "digite novamente."
        }
    })
    