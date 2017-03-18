export function getJSON(url, callback){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    callback(xhr.responseText);
  };
  xhr.open('get', url);
  xhr.send();
}