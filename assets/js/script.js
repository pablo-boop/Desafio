
function heron() {
    let a, b, c;
    a = Number(document.getElementById("valor1").value);
    b = Number(document.getElementById("valor2").value);
    c = Number(document.getElementById("valor3").value);

    if (a > 0 && b > 0 && c > 0) {
    let p = (a + b + c)/2;

    /*fórmula de heron*/

    let area = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
        if ( a + b <= c || b < a + c || c < a + b) {
            document.getElementById("area").innerHTML = "triangulo inválido";
            return; 
        }
        /* verificação se é impar ou par ~*/
        if (area % 2 == 0 && p % 2 == 0) {
            document.getElementById("perimetro").innerHTML = `O perímetro do triângulo é: ${a+b+c} (par)`;
            document.getElementById("area").innerHTML = `A área do triângulo é: ${area} (par)`;
        } else if (area % 2 !== 0 && p % 2 == 0) {
            document.getElementById("perimetro").innerHTML = `O perímetro do triângulo é: ${a+b+c} (par)`;
            document.getElementById("area").innerHTML = `A área do triângulo é: ${area} (ímpar)`;
        } else if (area % 2 !== 0 && p % 2 !== 0) {
            document.getElementById("perimetro").innerHTML = `O perímetro do triângulo é: ${a+b+c} (ímpar)`;
            document.getElementById("area").innerHTML = `A área do triângulo é: ${area} (par)`;
        } else {
            document.getElementById("perimetro").innerHTML = `O perímetro do triângulo é: ${a+b+c} (ímpar)`;
            document.getElementById("area").innerHTML = `A área do triângulo é: ${area} (ímpar)`;
        }
    /* caso não insira valores */
    }  else {
        alert("Insira valores válidos (positivos e diferentes de 0");
    }
    /* definir triangulo */
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