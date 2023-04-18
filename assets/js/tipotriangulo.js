function tipotriangulo(){ 
    let a = Number(document.getElementById("").value);
    let b = Number(document.getElementById("").value);
    let c = Number(document.getElementById("").value);
    //parte a baixo é o script do tipo de triangulo
    if (a == b ==  c){
        document.getElementById("").value = "equilatero";
    } else if ( a == b !=  c ||  a != b == c){
        document.getElementById("").value = "isosceles";
    } else {
        document.getElementById("").value = "escaleno";
    }
}    
//trocar os ids e adicionar o id de onde vai sair a resposta
