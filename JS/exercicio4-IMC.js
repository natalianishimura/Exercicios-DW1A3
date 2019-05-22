function calcularIMC(){
    var alt = parseFloat(document.imc.altura.value);
    var peso = parseFloat(document.imc.peso.value);
    var res, pesom;
    res = peso/(Math.pow(alt,2));
    
    if(res >= 16 && res <= 18.4){
        pesom = 63.74 - peso;
        alert("Seu IMC é de " + res.toFixed(1) + " kg/m², está abaixo do peso, sendo assim deve engordar pelo menos " + pesom.toFixed(1) + " kg.");
    }
    if(res >= 18.5 && res <= 24.9){
        alert("Seu IMC é de " + res.toFixed(1) + " kg/m², está no peso normal.");
    }
    if(res >= 25){
        pesom = peso - 63.74;
        alert("Seu IMC é de " + res.toFixed(1) + " kg/m², está acima do peso, sendo assim deve emagrecer pelo menos " + pesom.toFixed(1) + " kg.");
    }

    return false;
}
