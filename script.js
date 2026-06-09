<<<<<<< HEAD
function buyPhone(phoneName) {
  fetch("/buy", {
    method: "POST",
    body: JSON.stringify({ phone: phoneName }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => alert("Order confirmed: " + data.message))
  .catch(err => alert("Error: " + err));
}
=======
function buyPhone(phoneName) {
  fetch("/buy", {
    method: "POST",
    body: JSON.stringify({ phone: phoneName }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => alert("Order confirmed: " + data.message))
  .catch(err => alert("Error: " + err));
}
>>>>>>> 1ab945a271670f2b7397e53e2797301d867e8bd5
