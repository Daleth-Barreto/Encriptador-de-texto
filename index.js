let currentPassword = generateRandomPassword(10);
document.getElementById("password").value = currentPassword;

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let password = document.getElementById("password").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = btoa(unescape(encodeURIComponent(texto + password)));

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let password = document.getElementById("password").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoDesencriptado = decodeURIComponent(escape(atob(texto))).replace(password, '');

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copiarTexto() {
    let texto = document.getElementById("texto").value;
    if (texto.length !== 0) {
        navigator.clipboard.writeText(texto);
        swal("Texto Copiado", "El texto ha sido copiado al portapapeles.", "success");
    } else {
        swal("Ooops!", "No hay texto para copiar", "warning");
    }
}

document.getElementById('themeSwitch').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('changePassword').addEventListener('click', () => {
    currentPassword = generateRandomPassword(10);
    document.getElementById("password").value = currentPassword;
});
