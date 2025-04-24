
//------Input-----------
let input = document.querySelector('input[name=Tarefa]');

//------Button----------
let botao = document.querySelector('#botao');

//------Lista-----------
let lista = document.querySelector('#lista');

//let tarefas = ['Jogar GTA 5', 'Correr', 'Nadar', 'Estudar Python'];
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //pega do storage ou um array vazio

/*
--------Funções------------
*/

function adicionar_tarefas(){
    lista.innerHTML = '';

    for(tarefa of tarefas){
        let itemLista = document.createElement('li');
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        
        itemLista.onclick = function(){ //evento de clique num elemento da lista
            excluir_tarefa(this);
        }

        let itemTexto = document.createTextNode(tarefa);
        itemLista.appendChild(itemTexto);
        lista.appendChild(itemLista);
    }
}

adicionar_tarefas();

function remover_spans(){ //msgns de erro
    let spans = document.querySelectorAll('span');
    let card = document.querySelector('.card');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function excluir_tarefa(tarefa){
    //Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tarefa.textContent), 1);

    adicionar_tarefas();
    salvar_dados_storage();
}

function salvar_dados_storage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

/*
----------Eventos--------------
*/

botao.onclick = function(){
    let novatarefa = input.value;

    if(novatarefa !== ""){
        tarefas.push(novatarefa);

        adicionar_tarefas();

        //limpar input a cada nova adição
        input.value = '';
        remover_spans();
        salvar_dados_storage();

    }else{
        remover_spans();
        
        let card = document.querySelector('.card');
        
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);
        card.appendChild(span);     
    }
}