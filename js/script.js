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