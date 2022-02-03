function consultarCepAjax(){
    // pegando o valor do campo cep
    var cep = $('#cep').val();
    // chamando a api passando o cep
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data, status){
    //armazenando o resultado
      var dadosCep = data
    //preenchendo os campos com o resultado
      $('#localidade').val(dadosCep.localidade)
      $('#bairro').val(dadosCep.bairro)
      $('#uf').val(dadosCep.uf)
      $('#logradouro').val(dadosCep.logradouro)
      $('#ddd').val(dadosCep.ddd)
    });
  }