function pegar_token() {

  var settings = {
    "url": "http://127.0.0.1:8200/v1/database/creds/psmdb",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-vault-token": " s.iKF2ts0fx6WNtIvILIx2ADWY"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  //alert('Sucesso');
}

