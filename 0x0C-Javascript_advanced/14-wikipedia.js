//  Simple callback 

function createElement(data) {
    data = JSON.parse(data.target.response).query.pages["21721040"].extract);
    const new_p = document.createElement("p");
    new_p.innerHTML = data;
  
    document.body.appendChild(new_p);
  }
  
  function queryWikipedia(callback) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", callback);
    oReq.open(
      "GET",
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    );
    oReq.send();
  }
  
  queryWikipedia(createElement);