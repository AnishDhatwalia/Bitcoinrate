let btcPrice= document.querySelector("#btc");
let latestTime = document.querySelector("#time");
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json", requestOptions)
    .then(response => response.json())
    .then(result =>{
         console.log(result);
         btcPrice.innerHTML=`BTC Price $${result.bpi.USD.rate}`
         latestTime.innerHTML=`Time Updated: ${result.time.updated}`;
        })
    .catch(error => console.log('error', error));