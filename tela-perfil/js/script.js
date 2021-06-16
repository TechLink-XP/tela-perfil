function carregarInfo() {
document.getElementById("primeiroNome").innerHTML = localStorage.getItem("primeironome");
document.getElementById("segundoNome").innerHTML = localStorage.getItem("segundonome");
document.getElementById("email").innerHTML = localStorage.getItem("email");
document.getElementById("setor").innerHTML = localStorage.getItem("setor");
};

function confirmarAlteracao() {
    var primeiroNome = document.getElementById("primeiroNomeInput").value;
    localStorage.setItem("primeironome", primeiroNome);
    var segundoNome = document.getElementById("segundoNomeInput").value;
    localStorage.setItem("segundonome", segundoNome);
    var email = document.getElementById("emailInput").value;
    localStorage.setItem("email", email);
    var setor = document.getElementById("setorInput").value;
    localStorage.setItem("setor", setor);
    window.location.href = "index.html"
}