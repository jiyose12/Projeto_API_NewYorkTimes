import {getJSON} from './ajax'

const cep = document.querySelector('#cep');
const uf = document.querySelector('#uf');
const cidade = document.querySelector('#cidade');

loadCepEvent();

function loadCepEvent(){
  cep.onblur = function(){
    loadCepInfo();
  }
}

function loadCepInfo(){
  let cepValue = cep.value;
  let url = `https://viacep.com.br/ws/${cepValue}/json/`;
  getJSON(url, loadCepFields);
}

function loadCepFields(json){
  let cepInfo = JSON.parse(json);
  uf.value = cepInfo.uf;
  cidade.value = cepInfo.localidade;
}