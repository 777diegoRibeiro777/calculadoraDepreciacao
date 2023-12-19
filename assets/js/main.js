const calcularDepreciacao = () => {
  var valorEquipamento = parseFloat(
    document.getElementById("valorEquipamento").value
  );
  var valorSucata = parseFloat(document.getElementById("valorSucata").value);
  var vidaUtil = parseFloat(document.getElementById("vidaUtil").value);
  var tempoDeUso = parseFloat(document.getElementById("tempoUso").value);

  var vidaTotal = vidaUtil * 12;
  var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaTotal;
  var depreciacaoTotal = taxaDepreciacaoAnual * tempoDeUso;
  var depreciacaoMensal = taxaDepreciacaoAnual / tempoDeUso;
  var valorContabilFinal = valorEquipamento - valorSucata;

  if (
    isNaN(valorEquipamento) ||
    isNaN(valorSucata) ||
    isNaN(vidaUtil) ||
    isNaN(tempoDeUso)
) {
    alert("Preencha os campos com valores numéricos.");
    return;
}

  var resultadoAnual =
    "Depreciação Total Anual: R$" + depreciacaoTotal.toFixed(2);
  var resultadoMensal = "Depreciação mensal: R$" + depreciacaoMensal.toFixed(2);
  var resultadoContabilfinal =
    "Valor Contábil Final: R$" + valorContabilFinal.toFixed(2);

    alert(`RESULTADO: \n ${resultadoAnual},\n ${resultadoMensal},\n ${resultadoContabilfinal}`)

  return;
};

function adicionarRegraCamposNumeros() {
  const elementosAceitaNumeros = document.querySelectorAll(
    '[data-accepts-numbers="true"]'
  );

  elementosAceitaNumeros.forEach(function (campo) {
    campo.addEventListener("keypress", function (e) {
      const inputChar = String.fromCharCode(e.charCode);

      // Permitir apenas números e ponto decimal
      if (!/^\d*\.?\d*$/.test(inputChar)) {
        e.preventDefault();
      }
    });
  });
}

function cleanAll(){
    document.getElementById("valorEquipamento").value = ""
    document.getElementById("valorSucata").value = ""
    document.getElementById("vidaUtil").value = ""
    document.getElementById("tempoUso").value = ""
}

adicionarRegraCamposNumeros();
calcularDepreciacao();
