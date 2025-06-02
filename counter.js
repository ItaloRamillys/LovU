const startDate = new Date("2020-06-12T08:30:00");

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // Ajuste de meses/dias se necessário
  if (days < 0) {
    months--;
    // Pegamos o último dia do mês anterior ao atual
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Tempo total em milissegundos
  const diffMs = now - startDate;

  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  document.getElementById("time").innerText =
    `${years} anos, ${months} meses e ${days} dias, ` +
    `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();
