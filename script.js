//OBS: código incompleto
function btnConvert(){
  var value = document.getElementById("valor-entrada").value;
  //API: AWESOMEAPI - https://docs.awesomeapi.com.br/api-de-moedas
  //fetch para acessar a API
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        var euro = data.EURBRL.high;
        var dolar = data.USDBRL.high;
        console.log("Dola: ",dolar);
        console.log("última Atualização: ", data.USDBRL.create_date);
        console.log("Euro: ", euro);
        console.log("última Atualização: ", data.EURBRL.create_date);
        const moeda_entrada = document.getElementById("entrada1").value
        const moeda_saida = document.getElementById("entrada2").value;
        //alert(moeda)
        var result;
        switch(moeda_entrada) {
          case '1':
            if(moeda_saida=='11')
                result=value;
            else if(moeda_saida=='22')
              result=value*dolar;
            else if(moeda_saida=='33')
              result=value*euro;
            break;
          case '2':
            if(moeda_saida=='11')
                result=value*dolar;
            else if(moeda_saida=='22')
              result=value;
            else if(moeda_saida=='33')
              result=value*euro;
            break;
          case '3':      
            if(moeda_saida=='11')
                result=value*euro;
            else if(moeda_saida=='22')
              result=value*dolar;
            else if(moeda_saida=='33')
              result=value;
            break;
          default:
            result = 0.00;
        }
        document.getElementById("valor-saida").innerHTML = result;
    }).catch(error => console.log(error));  
}
