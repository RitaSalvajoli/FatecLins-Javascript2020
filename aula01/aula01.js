function muda_texto(){
    console.log('Entrei na função muda_texto.');
    //alert('Minha função muda_texto.');
    //como acessar um elemento HTML?
    //classe DOCUMENT tem acesso a toda estrutura da árvore DOM do HTML.
    var elementoP = document.getElementById('info');
    elementoP.innerHTML = 'Novo Texto Javascript JS'; 

    document.getElementById('infoP').innerHTML = 'TROCADO';
    console.log('elementoP');
    console.log('Saí na função muda_texto.');
}