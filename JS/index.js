document.addEventListener("DOMContentLoaded", () => {
  const ticketList = JSON.parse(localStorage.getItem("tickets")) || [];
  const tbody = document.querySelector("#busTable tbody");

  ticketList.forEach(ticket => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ticket.ticket_id}</td>
      <td>${ticket.bus_name}</td>
      <td>${ticket.source}</td>
      <td>${ticket.destination}</td>
      <td>${ticket.seat_number}</td>
    `;
    tbody.appendChild(row);
  });
});
