//Criando variáveis para armazenar posições do vetor curso
let curso1 = cursos[0];
let curso2 = cursos[1];
let curso3 = cursos[2];

//Definindo uma variavel constante para armazenar comando de seleção unica.
//const c = (el)=>document.querySelector(el);

pagInicial = (idIni, tituloIni, descricaoIni, nomeIni){

    let containerPrincipal = document.querySelector('#container__principal');

    let div1 = document.createElement('div');
    div1.className = "banner__box";

    let div1Title = document.createElement('div');
    div1Title.className = "box__title";
    div1Title.innerHTML = tituloIni;

    let div1Desc = document.createElement('div');
    div1Desc.className = "box__description";
    div1Desc.innerHTML = descricaoIni;

    let div1PNome = document.createElement('div');
    div1PNome.className = "piece__nome";
    div1PNome.innerHTML = `Professor: ${nomeIni}`;

    containerPrincipal.appendChild(div1);
    div1.appendChild(div1Box);
    div1.appendChild(div1Title);
    div1.appendChild(div1Desc);
    div1FPiece.appendChild(div1PNome);
}

/*************************************************************************************************************/
//Chamando funções e passando parametrôs para exibir os cursos cadastrados inicialmente
startPag(curso1.id, curso1.titulo, curso1.descricao, curso1.nomeprofessor);
startPag(curso2.id, curso2.titulo, curso2.descricao, curso2.nomeprofessor);
startPag(curso3.id, curso3.titulo, curso3.descricao, curso3.nomeprofessor);