// Função para calcular o montante com juros compostos e aportes mensais
function calcularJurosCompostosComAportes(
  capitalInicial,
  taxaJurosAnual,
  meses,
  aporteMensal
) {
  // Converter a taxa anual para mensal
  const taxaJurosMensal = taxaJurosAnual / 100 / 12;

  // Fórmula dos juros compostos com aportes
  const montanteFinal =
    capitalInicial * Math.pow(1 + taxaJurosMensal, meses) +
    aporteMensal *
      ((Math.pow(1 + taxaJurosMensal, meses) - 1) / taxaJurosMensal);

  return montanteFinal.toFixed(2); // Arredondar para 2 casas decimais
}

// Exemplo de uso
const capitalInicial = 0; // Capital inicial
const taxaJurosAnual = 10.5; // Taxa de juros anual em %
const meses = 48; // Tempo em meses (10 anos)
const aporteMensal = 2000; // Aporte mensal

const montanteFinal = calcularJurosCompostosComAportes(
  capitalInicial,
  taxaJurosAnual,
  meses,
  aporteMensal
);

console.log(
  `Após ${meses / 12} anos, o montante final será de R$${montanteFinal} com o aporte inicial de R$${capitalInicial},
  aporte mensal de R$${aporteMensal} a uma taxa de juros de ${taxaJurosAnual}% ao ano.`
);

