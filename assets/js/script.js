function heron() {
    let a = Number(document.getElementById("").value);
    let b = Number(document.getElementById("").value);
    let c = Number(document.getElementById("").value);

    if (a > 0 && b > 0 && c > 0){
    let p = (a+ b+ c)/2

    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))

    document.getElementById("").innerHTML = `O perímetro do triângulo é ${a+b+c} e a área é: ${area}`
    } else {
        alert("Insira valores válidos (positivos e diferentes de 0")
    }
}