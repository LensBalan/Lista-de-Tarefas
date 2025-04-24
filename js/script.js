/*
------Input-----------
*/
let input = document.querySelector('input[name=Tarefa]');
//console.log(input);

/*
------Button----------
*/
let botao = document.querySelector('#botao');
//console.log(botao);

/*
Lista
*/
let lista = document.querySelector('#lista');
//console.log(lista);

/*
<li class="list-group-item list-group-item-action"> Jogar GTA 5</li>
<li class="list-group-item list-group-item-action"> Correr</li>
<li class="list-group-item list-group-item-action"> Nadar</li>
<li class="list-group-item list-group-item-action"> Estudar Python</li>
*/

let tarefas = [
    'Jogar GTA 5',
    'Correr',
    'Nadar',
    'Estudar Python'
];

function adicionar_tarefas(){

    //limpar antes de adicionar
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //criar item da lista
        let itemLista = document.createElement('li');
        //adiocionar classe a ele
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        //criar um texto da tarefa
        let itemTexto = document.createTextNode(tarefa);
        //adicionar um filho a lista
        itemLista.appendChild(itemTexto);
        //Adicionar o item da lista na lista global
        lista.appendChild(itemLista);
    }
}

adicionar_tarefas();

//1 - Capturar o clique do botão
//2 - recuperar o valor digitado no input 
botao.onclick = function(){
    let novatarefa = input.value;

    if(novatarefa !== ""){
        tarefas.push(novatarefa);

        adicionar_tarefas();

        //limpar input a cada nova adição
        input.value = '';
        //limpar msgns de erro
        remover_spans();
    }else{
        //limpar msgns de erro
        remover_spans();
        
        let card = document.querySelector('.card');
        
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);
        card.appendChild(span);     
    }
}

function remover_spans(){
    let spans = document.querySelectorAll('span');
    let card = document.querySelector('.card');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}