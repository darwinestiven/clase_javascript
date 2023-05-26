function operaciones(){
    let num1, num2
    num1 = parseInt(document.getElementById('numero1').value);
    num2 = parseInt(document.getElementById('numero2').value);
    let suma = num1 + num2
    let resta = num1 - num2
    let multi = num1 * num2
    if(num2==0){
        alert("La suma es: " + suma + "\n" + "La resta es: " + resta +"\n" + "La multiplicacion es: "+multi +"\n"+"La division no se puede realizar ");
    
    }
    else{
        let div = num1 / num2
        alert("La suma es: " + suma + "\n" + "La resta es: " + resta +"\n" + "La multiplicacion es: "+multi +"\n"+"La division es: "+ div);
    }
    


}