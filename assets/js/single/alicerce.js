




/*
     FILE ARCHIVED ON 5:38:00 mar 19, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:10:32 ago 30, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/




//Aqui vem o Jquery

$(document).ready(function(){
var FORMATTER = 
{
		toReal       : function(value) { return 'R$ ' + value.toFixed(2).replace(".",","); },
		toPerc    : function(value) { return (value * 100).toFixed(2) + '%'; },
		toRealDec       : function(value) { var newValue = parseFloat(value); return newValue.toFixed(2).replace(".",","); }
};


var dadocomprimento, dadolargura, dadoprofundidade, inareia, incimento, inpedra, inpedreiro, inservente, ptotalareia, ptotalcimento, ptotalpedra, ptotalpedreiro, ptotalservente, punitareia, punitcimento, punitpedra, punitpedreiro, punitservente, qtareia, qtcimento, qtpedra, qtpedreiro, qtservente, volumealicerce;



   

function ajeitaInput(id,value){



$('#input' + id).val(value);

return window[id] = value;
}





ajeitaInput('dadocomprimento', "100,00");
ajeitaInput('dadolargura', "0,50");
ajeitaInput('dadoprofundidade', "0,50");

  $("#inputdadocomprimento").click(function () {
      var valorinput = $(this).val();
      if (valorinput == "100,00"){
      $(this).val('');
      }
    });
    
      $("#inputdadolargura").click(function () {
      var valorinput = $(this).val();
      if (valorinput == "0,50"){
      $(this).val('');
      }
    });
    
      $("#inputdadoprofundidade").click(function () {
      var valorinput = $(this).val();
      if (valorinput == "0,50"){
      $(this).val('');
      }
    });
    
    
ajeitaInput('incimento', "3,50");
ajeitaInput('inpedra', "0,76");
ajeitaInput('inareia', "0,26");
ajeitaInput('inservente', "9,00");
ajeitaInput('inpedreiro', "6,00");

ajeitaInput('punitcimento', "27,00");
ajeitaInput('punitpedra', "36,00");
ajeitaInput('punitareia', "24,00");
ajeitaInput('punitservente', "3,50");
ajeitaInput('punitpedreiro', "5,20");


var atualizaTudo = function(){


var comp = $('#inputcomprimento').val();
	$('.entrada').each(function(index,value) {
  var ident = $(this).attr('id').replace('input','');
  var value = $(this).attr('value').replace('.','').replace(',','.'); //300.000,00  300000,00 3000000.00
      window[ident] = eval(value);
      $('.'+ident).html(FORMATTER.toReal(parseFloat(value)));
                  });
                  $('.entradareal').each(function(index,value) {
  var ident = $(this).attr('id').replace('input','');
  var value = $(this).attr('value').replace('R$ ','').replace('.','').replace(',','.'); //300.000,00  300000,00 3000000.00
      window[ident] = eval(value);
      $('.'+ident).html(FORMATTER.toReal(parseFloat(value)));
                  });



var atualizaValor = function(valor,obj) {
$('.' +obj).html(FORMATTER.toRealDec(valor));
}

var atualizaPreco = function(valor,obj) {
$('.' +obj).html(FORMATTER.toReal(parseFloat(valor)));
}


volumealicerce = window.dadocomprimento * window.dadolargura * window.dadoprofundidade;

qtcimento = volumealicerce * window.incimento;
atualizaValor(qtcimento,'qtcimento');

qtpedra = volumealicerce * window.inpedra;
atualizaValor(qtpedra,'qtpedra');

qtareia = volumealicerce * window.inareia;
atualizaValor(qtareia,'qtareia');

qtservente = volumealicerce * window.inservente;
atualizaValor(qtservente,'qtservente');

qtpedreiro = volumealicerce * window.inpedreiro;
atualizaValor(qtpedreiro,'qtpedreiro');

ptotalcimento = window.punitcimento * qtcimento;
atualizaPreco(ptotalcimento,'ptotalcimento');

ptotalpedra = window.punitpedra * qtpedra;
atualizaPreco(ptotalpedra,'ptotalpedra');

ptotalareia = window.punitareia * qtareia;
atualizaPreco(ptotalareia,'ptotalareia');

var ptotalmateriais = ptotalcimento + ptotalpedra + ptotalareia;
atualizaPreco(ptotalmateriais,'ptotalmateriais');

ptotalservente = window.punitservente * qtservente;
atualizaPreco(ptotalservente,'ptotalservente');

ptotalpedreiro = window.punitpedreiro * qtpedreiro;
atualizaPreco(ptotalpedreiro,'ptotalpedreiro');

var ptotalmaodeobra = ptotalservente + ptotalpedreiro;
atualizaPreco(ptotalmaodeobra,'ptotalmaodeobra');

var ptotalgeral = ptotalmaodeobra + ptotalmateriais;
$('#ptotalgeral').html(FORMATTER.toReal(ptotalgeral));
		


}


$(".entradareal").maskMoney({symbol:'R$ ', showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
$(".entrada").maskMoney({symbol:'', showSymbol:false, thousands:'.', decimal:',', symbolStay: true});
$(".entradareal").mask();
$(".entrada").mask();
 atualizaTudo();	

$('body').on('keyup', '.entrada', function(){

 atualizaTudo();			
			
		
			});
$('body').on('keyup', '.entradareal' ,function()
			{
 atualizaTudo();			
			
		
			});			
$().click(function () {
      var valorinput = $(this).val();
      if (valorinput == "0,50"){
      $(this).val('');
      }
    });	
    

    
			
			

		});