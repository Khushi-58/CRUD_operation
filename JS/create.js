document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(this);
  const ticket = {
    ticket_id: Date.now(),
    name: form.get("name"),
    age: form.get("age"),
    contact: form.get("contact"),
    bus_id: form.get("bus_id"),
    seat_number: form.get("seat_number"),
    journey_date: form.get("journey_date"),
    bus_name: "KSRTC", // static for now
    source: "City A",
    destination: "City B"
  };

  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));
  alert("Ticket booked successfully!");
  this.reset();
});
