function converter(){
  const value = document.getElementById('valor').value
  const valueFloat = parseFloat(value).toFixed(2)
  console.log(valueFloat)
  const convert = valueFloat * 5;
  const inputRes = document.getElementById('result')
  inputRes.innerHTML = convert.toFixed(2)
}
