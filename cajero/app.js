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
let saldo;
let deposito = 0;
let retiro = 0;

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
            window.sessionStorage.setItem('usuario', usuario.value); 
            window.sessionStorage.setItem('saldo',cuentas[i].saldo); 
            
        }
   } 
    return usuarioValido;
}

usuarioActual = sessionStorage.getItem('usuario');
saldo = parseInt(sessionStorage.getItem('saldo'));

function consultarSaldo(){
    document.getElementById("consultar").value = saldo;
    let valor = document.getElementById('consultar');
    valor.innerHTML= ( '$' + saldo);
}

function depositarMonto() {
    deposito = parseInt(document.getElementById("deposito").value);
    saldo = saldo + deposito;
    consultarSaldo();
    document.getElementById("deposito").value = '';
}

function retirarMonto() {
    retiro = document.getElementById("retirar").value;
    if (retiro > saldo) {
        error_retiroMonto.style.border = "1px solid red";
        error_retiroMonto.style.display= "block";
    } else {
      saldo = (parseFloat(saldo) - parseFloat(retiro));
      consultarSaldo();
    }
}