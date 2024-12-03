function getTicketPrice() {
    const age = document.getElementById('ageInput').value;
    let price;
    
    if (age <= 12) {
      price = "$10";
    } else if (age >= 13 && age <= 17) {
      price = "$15";
    } else {
      price = "$20";
    }
    
    document.getElementById('ticketPriceResult').innerText = `Ticket Price: ${price}`;
  }
  