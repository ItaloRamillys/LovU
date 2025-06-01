
const startDate = new Date("2020-06-12T08:30:00");
function updateCounter() {
  const now = new Date();

  // Calcular anos e meses corretamente
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  // Se o mês atual for anterior ao mês de início, ajustamos o cálculo
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calcular a diferença de dias, sem considerar anos e meses
  const tempStartDate = new Date(startDate);
  tempStartDate.setFullYear(now.getFullYear());
  tempStartDate.setMonth(now.getMonth());

  // Se a data inicial for posterior ao dia atual deste ano e mês, subtrair um mês para não contar dias de um mês anterior
  if (tempStartDate > now) {
    tempStartDate.setMonth(now.getMonth() - 1);
  }

  const days = Math.floor((now - tempStartDate) / (1000 * 60 * 60 * 24));

  const hours = Math.floor(((now - startDate) / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(((now - startDate) / (1000 * 60)) % 60);
  const seconds = Math.floor(((now - startDate) / 1000) % 60);

  document.getElementById(
    "time"
  ).innerText = `${years} anos, ${months} meses e ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}
setInterval(updateCounter, 1000);
updateCounter();