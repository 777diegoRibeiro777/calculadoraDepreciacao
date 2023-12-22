const calcularDepreciacao = () => {
  var valorEquipamento = parseFloat(
    document.getElementById("valorEquipamento").value
  );
  var valorSucata = parseFloat(document.getElementById("valorSucata").value);
  var vidaUtil = parseFloat(document.getElementById("vidaUtil").value);
  var tempoDeUso = parseFloat(document.getElementById("tempoUso").value);

  if (tempoDeUso > vidaUtil) {
    alert("O tempo de uso não pode ser maior que a vida útil.");
    return null;
}

  var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaUtil;
  var depreciacaoTotal = taxaDepreciacaoAnual * tempoDeUso;
  var valorContabilFinal = valorEquipamento - depreciacaoTotal;

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
    "Depreciação Anual: R$" + taxaDepreciacaoAnual.toFixed(2);
  
    var resultadoDepreciacaoTotal =
    "Depreciação Acumulada: R$" + depreciacaoTotal.toFixed(2);
  
  var resultadoContabilfinal =
    "Valor Contábil: R$" + valorContabilFinal.toFixed(2);

    alert(`RESULTADO: \n ${resultadoAnual}\n ${resultadoDepreciacaoTotal}\n ${resultadoContabilfinal}`)

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
