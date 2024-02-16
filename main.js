$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();   
        const enderecoImagemNova = $('#Endereco-Imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagemNova}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem></a>
            Ver imagem
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000);
        $('#Endereco-Imagem-nova').val(" ")
    })
    
})

