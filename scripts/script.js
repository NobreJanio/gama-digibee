//Criando variáveis para armazenar posições do vetor curso
let curso1 = cursos[0];
let curso2 = cursos[1];
let curso3 = cursos[2];

//Definindo uma variavel constante para armazenar comando de seleção unica.
const c = (el)=>document.querySelector(el);



verCursos = (idIni, tituloIni, descricaoIni, nomeIni){

    let containerVerCursos = document.querySelector('#container__verCursos');

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

    containerVerCursos.appendChild(div1);
    div1.appendChild(div1Box);
    div1.appendChild(div1Title);
    div1.appendChild(div1Desc);
    div1FPiece.appendChild(div1PNome);
}

verPosts = (idIniPost, tituloIniPost, descricaoIniPost, nomeIniPost){
    let containerVerCursos = document.querySelector('#container__verPosts');

    let div2 = document.createElement('div');
    div2.className = "banner__box";

    let div2Title = document.createElement('div');
    div2Title.className = "box__title";
    div2Title.innerHTML = tituloIniPost;

    let div2Desc = document.createElement('div');
    div2Desc.className = "box__description";
    div2Desc.innerHTML = descricaoIniPost;

    let div2PNome = document.createElement('div');
    div2PNome.className = "piece__nome";
    div2PNome.innerHTML = `Professor: ${nomeIniPost}`;

    containerVerCursos.appendChild(div2);
    div2.appendChild(div2Box);
    div2.appendChild(div2Title);
    div2.appendChild(div2Desc);
    div2FPiece.appendChild(div2PNome);
}



/*************************************************************************************************************/
//Chamando funções e passando parametrôs para exibir os cursos cadastrados inicialmente


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Função para ao clicar modificar os itens da página modificando as opções de display para INICIO
c('#pagina--inicial').addEventListener('click', ()=>{
    c('#container__pagInicial').style.display = "flex";
    c('#container__verCursos').style.display = "none";
    c('#container__verPost').style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Função para ao clicar modificar os itens da página modificando as opções de display para INICIO
c('#ver--cursos').addEventListener('click', ()=>{
    c('#container__pagInicial').style.display = "none";
    c('#container__verCursos').style.display = "flex";
    c('#container__verPost').style.display = "none";
    verCursos(curso1.id, curso1.titulo, curso1.descricao, curso1.nomeProfessor);
    verCursos(curso2.id, curso2.titulo, curso2.descricao, curso2.nomeProfessor);
    verCursos(curso3.id, curso3.titulo, curso3.descricao, curso3.nomeProfessor);
    
    for(let i = 0; i < cursos.length; i++){
        verCursos(cursos[i].id, cursos[i].titulo, cursos[i].descricao, cursos[i].nomeProfessor)
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Função para ao clicar modificar os itens da página modificando as opções de display para INICIO
c('#ver--post').addEventListener('click', ()=>{
    c('#container__pagInicial').style.display = "none";
    c('#container__verCursos').style.display = "none";
    c('#container__verPost').style.display = "flex";
    for(let x = 0; x < posts.length; i++){

    }
});