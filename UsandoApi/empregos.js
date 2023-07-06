function acessarAPI(url) {
                
        request.open("GET", url, false);
        request.send();
        return request.responseText;
}

function carregarDadosAPI() {
    let dados = acessarAPI(" https://mock-json-service.glitch.me/");
    let vagas = JSON.parse(dados);
    console.log(vagas);

    divDados = '';
    vagas.forEach(e => {
        divDados += '<div class="card">';
        divDados += '<div class="container">';
        divDados += '<h4>';
        divDados += '<b>Vagas ID ' + e.id + '</b>';
        divDados += '</h4>';
        divDados += '<p>Empesa: ' + e.company + '</p>';
        divDados += '<p>Descrição: ' + e.description + '</p>'; 
        divDados += '<p>Tipo: ' + e.employmentType + '</p>';
        divDados += '<p>Localização: ' + e.location + '</p>';
        divDados += '<p>Cargo: ' + e.position + '</p>';
        divDados += '<p>Habilidades: ' + e.skillsRequired + '</p>';
        divDados += '</p></p>';
    });
    document.getElementById("dados_vagas").innerHTML = divDados;
}