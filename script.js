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
