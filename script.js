var entrada = document.querySelector('#text-input');
var saida = document.querySelector('#text-output');
var conteudoVazio = document.querySelector('.box__input');
var conteudoOk = document.querySelector('.conteudo-resultado');

conteudoVazio.style.display = 'block'
conteudoOk.style.display = 'none'

function botaoCriptografar() {
    const textoEncriptografado = criptografar(entrada.value);
    saida.value = textoEncriptografado;

    conteudoVazio.style.display = 'none'
    conteudoOk.style.display = 'block'
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["aimes", "ai"]]; // o aimes foi adicionado pois o programa identificava o i do "ai" como um uma nova letra pra encriptar. Ex: se eu colocasse "ola", ao invés de aparecer "oberlai", aparecia "oberlaimes"
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(entrada.value);
    saida.value = textoDescriptografado;
    conteudoVazio.style.display = 'none'
    conteudoOk.style.display = 'block'
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}

function copiarTexto() {
    saida.select();
    document.execCommand("copy");
    alert('Texto Copiado');
}