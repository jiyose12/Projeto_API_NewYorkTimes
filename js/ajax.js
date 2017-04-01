export function getJSON( url, callback ){
      let xhr = new XMLHttpRequest();
      xhr.onload = () => callback( xhr.responseText );
      xhr.open( 'GET', url );
      xhr.send();
    }

 