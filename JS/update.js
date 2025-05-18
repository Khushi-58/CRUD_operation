document.getElementById("updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(this);
  const ticketId = parseInt(form.get("ticket_id"));
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  const ticket = tickets.find(t => t.ticket_id === ticketId);
  if (ticket) {
    ticket.seat_number = form.get("seat_number");
    ticket.journey_date = form.get("journey_date");
    localStorage.setItem("tickets", JSON.stringify(tickets));
    alert("Ticket updated!");
  } else {
    alert("Ticket not found.");
  }
});
