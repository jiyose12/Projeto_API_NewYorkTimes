import {getJSON} from './ajax'

	const pesquisa = document.querySelector('#pesquisa');
    const inicio_data = document.querySelector('#inicio_data');
    const fim_data = document.querySelector('#fim_data');
    const botaopesquisa = document.querySelector('#botaopesquisa');
    const noticias_recentes = document.querySelector('#noticias_recentes .container .itens');
    const consulta_noticias = document.querySelector('#consulta_noticias .container .itens');
    loadGetInfo();

    //Seção notícias recentes
    function loadGetInfo(){
      let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8ff00e2c3ac145d093c95d8a403071fc&sort=newest`;
      getJSON( url, loadSearchInfo );
    }
    function loadSearchInfo( json ){
      let searchinfo = JSON.parse( json );
      console.log(searchinfo);
      //Inserindo no html
      let noticiasRecentes = '';
      for(let field of searchinfo.response.docs){
      	noticiasRecentes += `<li class="titulo">${field.headline.main}</li><li>${field.snippet}</li><li>${field.web_url}</li><li>${field.pub_date}</li>`;

      	noticias_recentes.innerHTML = noticiasRecentes;
      }
      //fim da inserção no html
    }
    //fim da Seção notícias recentes

    //Seção Consulta notícias
    function loadGetQueryEvent(){
      botaopesquisa.onclick = function(){
        loadGetQuery();
      }
    }

     function loadGetQuery(){

      let concat = '';
      if (pesquisa!=''){
        concat += `&q=${pesquisa.value}`
      }     
      if (inicio_data!=''){
        concat += `&begin_date=${inicio_data.value}`
      }   
      if (fim_data!=''){
        concat += `&end_date=${fim_data.value}`
      }
      console.log(concat);
      let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8ff00e2c3ac145d093c95d8a403071fc${concat}`;
      getJSON( url, loadSearchQuery );
    }

     function loadSearchQuery( json ){
      let searchquery = JSON.parse( json );
      console.log(searchquery);

      //Inserindo no html
      let noticias_pesquisa = '';
      for(let field of searchquery.response.docs){
        noticiaspesquisa += `<li class="titulo">${field.headline.main}</li><li>${field.snippet}</li><li>${field.web_url}</li><li>${field.pub_date}</li>`;

        consulta_noticias.innerHTML = noticiasRecentes;
      }
      //fim da inserção no html
    }
    //fim da Consulta notícias
   
    //&q=${pesquisa.value}&begin_date=${inicio_data.value}&end_date=${fim_data.value}
  	