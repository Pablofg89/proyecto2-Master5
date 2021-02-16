//Validacion de los inputs

var usuario = document.getElementById('usuario');
var password = document.getElementById('password');

let error_usuario = document.getElementById('error_usuario');
let error_password = document.getElementById('error_password');

var cuentas  = [{
        "nombre": "Hiromi",
        "saldo": 200,
        "password": "helloworld"
    },
    {
        "nombre": "Manuel",
        "saldo": 290,
        "password": "l33t"
    },
    {
        "nombre": "Luis",
        "saldo": 67,
        "password": "123"
    }
];

function validacion() {
    if(usuario.value.length < 3){
        usuario.style.border = "1px solid red";
        error_usuario.style.display= "block";
        usuario.focus();
        return false;
    }
    if(password.value.length < 3){
        password.style.border = "1px solid red";
        error_password.style.display= "block";
        password.focus();
        return false;
    }
    for (let i = 0; i < cuentas.length ; i++){
        let element = cuentas[i];
        if((element.nombre == usuario) && (element.password == password)){
            alert(usuario);
             return true;
           
        }else{
            usuario.style.border = "1px solid red";
            error_usuario.style.display= "block";
            password.style.border = "1px solid red";
            serror_password.style.display= "block";
        
        return false;
           
        }
    }
}