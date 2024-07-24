$('form').on('submit', function(e){
    e.preventDefault();

    const novaTarefa = $('#tarefa-nome').val(); //Atribui a ID para a váriavel com jQuery.
    const novaLinhaTarefa = $(`<li class="novaTarefa"></li>`); //A mesma coisa que um innerHTML faria, porém simplificado.
    const botaoTarefa = $(`<a>${novaTarefa}</a>`).appendTo($('<div></div>').appendTo(novaLinhaTarefa));
    //Vai armazenar a informção. 

    novaLinhaTarefa.on('click', function(){ //Altera a classe ao clicar em cima da tarefa.
        $(this).find('a').toggleClass('tarefaFeita');
    });

    $(novaLinhaTarefa).appendTo('ul'); //adiciona a tarefa na lista

    $('#tarefa-nome').val(''); //Limpa o input de texto.
});