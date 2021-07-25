const totalB = document.getElementById('totalBill');
const buttonCalcul = document.getElementById("calcul");
var e = document.getElementById("numberPersons");
var result = document.getElementById("rezult");


function getValueFromRadioButton() {
  var ele = document.getElementsByName('service_level');
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked) {
        return ele[i].value;
      } 
  }
};

function calculResult() {
  let calculR = (totalB.value * getValueFromRadioButton()) / e.value;
  result.innerHTML = calculR;
};


buttonCalcul.addEventListener('click', calculResult);










