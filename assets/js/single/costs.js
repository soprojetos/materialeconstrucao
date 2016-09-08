var spj = angular.module('spjCost', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.utils.masks', 'xeditable']);

spj.run(['editableOptions', function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
}]);

spj.controller('HousecostController', ['$scope', '$http', function($scope, $http) {
  //  Entrou no passo 3
  //  Get pra API perguntando a melhor montagem praquele terreno
  //  APi retorna um Json com todos os ambientes para aquela montagem

}]);


spj.controller('WallcostController', ['$scope', '$http', '$parse', '$interpolate', '$filter', function($scope, $http, $parse, $interpolate, $filter) {
  $scope.orca = orca;
  $scope.orca.variavel = {};
  $scope.getSubTotal = function(bloco) {
    var subtotal = 0;
    for (var i = 0; i < $scope.orca[bloco].length; i++) {
      var line = $scope.orca[bloco][i];
      subtotal += (line.quantidade * line.punit);
    }

    return subtotal;
  };


 $scope.orcaChapisco = [{
  "nome": "orcachapisco",
  "titulo": "Quanto custa para chapiscar uma parede?",
  "subtitulo": "Este é um simples orçamento GRATUITO, feito para auxiliar na hora de calcular quanto custará para fazer o chapisco com argamassa no traço 1:3 de sua parede",
  "descricao": "Simples orçamento para auxiliar na hora de calcular o **chapisco da sua parede com argamassa no traço 1:3**. Basta dizer a altura e largura da parede que você deseja pintar, totalmente GRÁTIS!",
  "conteudo": "Após construir sua parede e antes de rebocar, é necessário chapiscá-la. O custo do chapisco foi simplificado neste nosso simples orçamento. Abaixo você pode entrar com o comprimento e altura da sua parede e descobrir quanto vai custar seu chapisco.<br><br><b>Mas afinal, o que é o chapisco?</b><br>\nO chapisco é a primeira camada de argamassa aplicada nas paredes ou tetos que serve para fixar o revestimento posterior, pois promove uma melhor aderência devido sua superfície porosa, evitando que esta camada se solte com o tempo.",
  "image": "orc-parede-tijolo/chapiscar-parede.jpg",
  "entradas": [
    {
      "nome": "Comprimento da parede",
      "identidade": "comprimento",
      "valor_padrao": 6,
      "unidade": "metros",
      "tipo": "text"
    },
    {
      "nome": "Altura da parede",
      "identidade": "altura",
      "valor_padrao": 2,
      "unidade": "metros",
      "tipo": "text"
    },
    {
      "nome": "Área da parede",
      "identidade": "area",
      "calculo": "orca.variavel.altura * orca.variavel.comprimento",
      "unidade": "metros quadrados",
      "tipo": "hidden",
      "hide": true
    }
  ],
  "materiais": [
    {
      "nome": "Areia (argamassa)",
      "unidade": "m³",
      "indice": 0.0033,
      "multiplicador": "variavel.area",
      "punit": 20
    },
    {
      "nome": "Cimento (argamassa)",
      "unidade": "sacos",
      "indice": 0.0285,
      "multiplicador": "variavel.area",
      "punit": 27
    }
  ],
  "trabalhadores": [
    {
      "nome": "Pedreiro",
      "unidade": "horas",
      "indice": 0.23,
      "multiplicador": "variavel.area",
      "punit": 5.49
    },
    {
      "nome": "Servente (chapisco)",
      "unidade": "horas",
      "indice": 0.23,
      "multiplicador": "variavel.area",
      "punit": 3.34
    },
    {
      "nome": "Servente (argamassa)",
      "unidade": "horas",
      "indice": 0.03,
      "multiplicador": "variavel.area",
      "punit": 3.34
    }
  ]
}];


  $scope.mudarEntradas = function() {

    for (var i = 0; i < orca.entradas.length; i++) {
      var theString = orca.entradas[i].identidade; // comprimento
      if (orca.entradas[i].calculo) {
        $scope.orca.variavel[theString] = $parse(orca.entradas[i].calculo)($scope);
      }
    }

    for (var j = 0; j < orca.materiais.length; j++) {
      $scope.orca.materiais[j].multiplicar = $parse('orca.' + orca.materiais[j].multiplicador)($scope);
    }

    for (var k = 0; k < orca.trabalhadores.length; k++) {

      $scope.orca.trabalhadores[k].multiplicar = $parse('orca.' + orca.trabalhadores[k].multiplicador)($scope);
    }

  };

  var initializer = function() {
    for (var i = 0; i < orca.entradas.length; i++) {
      var theString = orca.entradas[i].identidade;
      $scope.orca.variavel[theString] = orca.entradas[i].valor_padrao || $parse(orca.entradas[i].calculo)($scope);
    }

    $scope.mudarEntradas();
  };

  initializer();

  // Entrou no passo 3
  // Get pra API perguntando a melhor montagem praquele terreno
  // APi retorna um Json com todos os ambientes para aquela montagem


}]);