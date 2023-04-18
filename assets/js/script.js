function heron() {
    let a, b, c;
    a = Number(document.getElementById("valor1").value);
    b = Number(document.getElementById("valor2").value);
    c = Number(document.getElementById("valor3").value);

    if (a > 0 && b > 0 && c > 0) {
    let p = (a + b + c)/2;

    let area = Math.sqrt(p*((p-a)*(p-b)*(p-c)));

    document.getElementById("perimetro").innerHTML = `O perímetro do triângulo é: ${a+b+c}`;
    document.getElementById("area").innerHTML = `A área do triângulo é: ${area}`;
    }

    if (isNaN()) {
        document.getElementById("area").innerHTML = `O triângulo não é válido!`;
    }

    else {
        alert("Insira valores válidos (positivos e diferentes de 0");
    }

    if (a > 0 && b > 0 && c > 0) {
    if (a == b && b == c){
        document.getElementById("tipo").innerHTML = "O triângulo é do tipo equilátero!";
    } else if ( a == b && a!=  c ||  a != b && a == c){
        document.getElementById("tipo").innerHTML = "O triângulo é do tipo isosceles!";
    } else {
        document.getElementById("tipo").innerHTML = "O triângulo é do tipo escaleno!";
    }
}
}