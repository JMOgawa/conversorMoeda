//API: AWESOMEAPI - https://docs.awesomeapi.com.br/api-de-moedas
function btnConvert(){
  var value = parseFloat(document.getElementById("valor-entrada").value);
  
  // Verifique se 'value' é NaN (vazio)
  if (isNaN(value)) {
    var result = 0.00;
    document.getElementById("valor-saida").innerHTML = result.toFixed(2);
    return; // Saia da função, já que 'value' está vazio
  }

  //fetch para acessar API
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,EUR-BRL')
    .then(response => response.json())
    .then(data => {
        var euro_reais = data.EURBRL.high;
        var dolar_reais = data.USDBRL.high;
        var dolar_euro = data.USDEUR.high;
    
        console.log("USDBRL: ",dolar_reais, " - ", data.USDBRL.create_date);
        console.log("EURBRL: ", euro_reais, " - ", data.EURBRL.create_date);
        console.log("USDEUR: ", euro_reais, " - ", data.USDEUR.create_date);
    
        const moeda_entrada = document.getElementById("entrada1").value
        const moeda_saida = document.getElementById("entrada2").value;
        var result;
    
        switch(moeda_entrada) {
            case '1':
              if(moeda_saida=='11')
                  result=value;
              else if(moeda_saida=='22')
                result=value/dolar_reais;
              else if(moeda_saida=='33')
                result=value/euro_reais;
              break;
            case '2':
              if(moeda_saida=='11')
                  result=value*dolar_reais;
              else if(moeda_saida=='22')
                result=value;
              else if(moeda_saida=='33')
                result=value*dolar_euro;
              break;
            case '3':      
              if(moeda_saida=='11')
                  result=value*euro_reais;
              else if(moeda_saida=='22')
                result=value/dolar_euro;
              else if(moeda_saida=='33')
                result=value;
              break;
            default:
              result = 0.00;
          }
    
        document.getElementById("valor-saida").innerHTML = result.toFixed(2);
    }).catch(error => console.log(error));  
}
