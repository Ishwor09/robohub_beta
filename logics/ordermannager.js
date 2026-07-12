function placeOrder(){
  
let Name =   document.getElementById("name").value;
let Email =   document.getElementById("email").value;
let Phone =   document.getElementById("phone").value;
let Dist =   document.getElementById("district").value;
let Location =   document.getElementById("location").value;
let LocationLink =   document.getElementById("map").value;
let Pay =   document.getElementById("Payment").value;
// let let Name =   document.getElementById("name").value;
 let missing = [];

  if (!Name) missing.push("Name");

  // Email check
  if (!Email) {
    missing.push("Email");
  } else {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
      alert("Invalid email format. Please enter a valid email (e.g., user@example.com).");
    }
  }

    if (!Phone) {
    missing.push("Phone");
  } else {
    // Check phone number validity: must be 10 digits
    if (!/^\d{10}$/.test(Phone)) {
      alert("Phone number must be exactly 10 digits.");
    }
  }
  if (!Dist) missing.push("District");
  if (!Location) missing.push("Location");
  if (!Pay) missing.push("Payment Method");

  if (missing.length > 0) {
    alert("Missing fields: " + missing.join(", "));
  }else{
    buyerName =   Name;
    buyerEmail =  Email;
    buyerPhone =  Phone;
    buyerDist =   Dist;
    buyerLocation =  Location;
    buyerLocationLink =   LocationLink;
    buyerPay =  Pay;
    sendingDatas();
  }



}