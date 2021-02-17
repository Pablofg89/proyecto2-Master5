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

let usuarioActual;
let saldo = 0;

function validacion() {
    let usuario = document.getElementById('usuario');
    let password = document.getElementById('password');

    let error_usuario = document.getElementById('error_usuario');
    let error_password = document.getElementById('error_password');

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
    
    let usuarioValido = false;
    
    for (let i = 0; i < cuentas.length ; i++){
        let element = cuentas[i];
        if((element.nombre == usuario.value) && (element.password == password.value)){
            usuarioValido = true;
            usuarioActual = cuentas[i]; 
            console.log(usuarioActual); 
        }
    } 
    return usuarioValido;
}

function consultarSaldo(){
    console.log(usuarioActual.saldo);  
}