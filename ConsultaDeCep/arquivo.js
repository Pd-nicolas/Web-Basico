function consultarAPI(){
    let cep = document.getElementById("cep").value;

    if(cep.length !== 8){
        alert("cep invalido");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
        console.log(data);     
        monstrarEndereco(data);  
        });  
    });
}

function monstrarEndereco(dados){
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                           <p>DDD: ${dados.ddd}</p>
                           <p>IBGE: ${dados.ibge}</p>
                           <p>Bairro/Logradouro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade}</p>
                           <p>Estado: ${dados.uf}</p>`;
}
