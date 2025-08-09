$('#botao').click(function () {

    var cep = $('#cep').val();

    $('#rua').val("...");
    $('#bairro').val("...");
    $('#cidade').val("...");
    $('#uf').val("...");
    $('#ibge').val("...");

    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.getJSON(url, function (retorno) {
        if (!("erro" in retorno)) {
            $('#rua').val(retorno.logradouro);
            $('#rua').attr('disabled', true);
            $('#bairro').val(retorno.bairro);
            $('#bairro').attr('disabled', true);
            $('#cidade').val(retorno.localidade);
            $('#cidade').attr('disabled', true);
            $('#uf').val(retorno.uf);
            $('#uf').attr('disabled', true);
            $('#ibge').val(retorno.ibge);
            $('#ibge').attr('disabled', true);
        }
        else {
            alert("O CEP informado não foi encontrado.")
        }
    });
});
