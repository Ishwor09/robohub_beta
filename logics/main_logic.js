

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    
  }
  if (event.key === "Escape") {
hideMoreInfo();
hidecart();
  }
});

async function loadBSDate() {
      try {
        const response = await fetch("https://english.hamropatro.com/");
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const bsElement = doc.querySelector("span.nep");
        if (bsElement) {
          return bsElement.textContent.trim();
        } else {
          console.log("Date not found");
          return null;
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    // Use async/await properly
function updateDataAndTime(){
  (async () => {
       bsDate = await loadBSDate();
      
    })();
  const now = new Date();

      // Format with 12-hour clock and AM/PM
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
      time = formatted;
    
  }
    updateDataAndTime();

// function product(index){
//   checkNet();
//     document.body.style.overflow = "hidden";
//     document.querySelector('#more_info_id').style = "display: block;";
//      document.querySelector('#more_info_id').innerHTML = info_notes[index];
//        document.getElementById("more_info_id").classList.add("show");
// }
function hideMoreInfo(){
  document.querySelector('#more_info_id').style = "display: none;";
  document.body.style.overflow = "auto";
    document.getElementById("more_info_id").classList.remove("show");
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function showcart() {
  document.body.style.overflow = "hidden";

  const panel = document.getElementById("viwe_cart");
  panel.classList.add("open");   

  const plane2 = document.getElementById("show_all");  
  plane2.classList.add("cartD"); 

}

function hidecart() {
      document.body.style.overflow = "auto";

  const panel = document.getElementById("viwe_cart");
  panel.classList.remove("open"); // slide out

  const plane2 = document.getElementById("show_all");  
  plane2.classList.remove("cartD");
  plane2.classList.remove("open"); // if you want to remove 'open' too

  if(items_name.length > 0){
    document.getElementById("show_ordered_items").style.display = "none";
  document.getElementById("show_items").style.display = "block";   

  }else{
    document.getElementById("show_ordered_items").style.display = "block";
  document.getElementById("show_items").style.display = "none";
  document.getElementById("enterCode").style.display = "block";
  document.getElementById("data_gets").style.display = "none";
      document.getElementById("id_track").value = "";


  }
  document.getElementById("noteNotFound").style.display = "none";


}

function updateCart(){
  // Numbers
  let Num = 0;
  let recoding = "";
  total_cost = 0;
  if(items_name.length > 0){
    document.getElementById("show_ordered_items").style.display = "none";
  document.getElementById("show_items").style.display = "block";
  document.getElementById("enterCode").style.display = "none";
  document.getElementById("data_gets").style.display = "none";
  }else{
    document.getElementById("show_ordered_items").style.display = "block";
  document.getElementById("show_items").style.display = "none";
   document.getElementById("enterCode").style.display = "block";
  document.getElementById("data_gets").style.display = "none";

  }

  document.querySelector('#show_items').innerHTML = "";
  cart_dats = [];

  for (let i = 0; i < items_name.length; i++) {
    Num += 1;
    cart_dats.push('<p>'+Num+' '+items_name[i]+'  _   <b>Rs.'+priceing[i]+'<b> <button class="delet_itmes" onclick="item_delet('+i+')">🗑️</button></p>');

  }

  for (let i = 0; i < cart_dats.length; i++) {
    recoding += cart_dats[i];
  }

  for (let i = 0; i < priceing.length; i++) {
    total_cost += priceing[i];
  }
  document.querySelector('#show_bill').innerHTML = "<h2><b>Total:   </b><h1 id='price_show'>Rs. "+total_cost+"</h1></h2>";

  document.querySelector('#show_items').innerHTML = recoding;
  if (items_name.length > 0){
      document.querySelector('#checkout').style = "display: block";
  }else{
          document.querySelector('#checkout').style = "display: none";

  }

}

function item_delet(items){
    

  // cart_dats.splice(items-cart_deletNum,1);
  items_name.splice(items,1);
items_suk.splice(items,1);
priceing.splice(items,1);

  updateCart();

}


async function addToCart(name, suk, price){
      updateDataAndTime();

  console.log(time);
        document.getElementById("adding_cart").style = "display: flex;";
        await delay(500);
      
        
items_name.push(name);
items_suk.push(suk);
priceing.push(price);

        updateCart();
document.getElementById("adding_cart").style = "dispay: none;";

}
function checkOut(){
 paymentMethords();

  hidecart();
       document.getElementById("orderFormConteneer").style = "display: flex;";

}
function showLoadingCursor() {
  document.body.style.cursor = "wait"; // pointer becomes loading
}

function resetCursor() {
  document.body.style.cursor = "default"; // back to normal
}

function urgentMode(){
  
  let tick = document.getElementById("tick");
  
  if(tick.checked){
    document.getElementById("shiping_fee").style = "color: red;";
    document.getElementById("shiping_fee").innerText = "Order Delivery via Yango and charge will be pay by you self to riders after reaching order, And COD option can't be able to use.";
        document.getElementById("Payment").innerHTML = ' <option value="pre pay">Online Payment</option>';
  }else{
    document.getElementById("shiping_fee").style = "color: black;";
    document.getElementById("shiping_fee").innerText = "Delivery fee: Rs. "+shiping_fee;
    document.getElementById("Payment").innerHTML = ' <option value="cod">Cash on Deivery</option><option value="pre pay">Online Payment</option>';
  }
  paymentMethords();

  }
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", () => {
  // Remove non-numeric characters
  phoneInput.value = phoneInput.value.replace(/\D/g, "");

  // Limit to 10 digits
  if (phoneInput.value.length > 10) {
    phoneInput.value = phoneInput.value.slice(0, 10);
  }
});

function orderingLoadShow(){
     document.getElementById("purchecing").style = "display: flex;";
}

function orderingLoadHide(){
     document.getElementById("purchecing").style = "display: none;";
}
function hideform(){
     document.getElementById("orderFormConteneer").style = "display: none;";
         document.getElementById("stage_1").style.display = "block";
                  document.getElementById("stage_2").style.display = "none";


}
function toggle_payment() {
  const toggle = document.getElementById("myToggle");
  const show = document.getElementById("qr_title");

  if (toggle.checked) {
    document.getElementById("khalti").style = "display: none;";
    document.getElementById("bank").style = "display: auto; height: 320px;";
    show.innerHTML = "Khalti&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Bank</strong>";
  } else {
     document.getElementById("khalti").style = "display: auto;";
    document.getElementById("bank").style = "display: none;";
    show.innerHTML = "<strong>Khalti</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bank";
  }
}
toggle_payment();

function paymentMethords(){
  const fee =     document.getElementById("shiping_fee");
  const final = document.getElementById("grand_total");
    const toggle = document.getElementById("Payment").value;
    if(toggle == "pre pay"){
      shiping_fee = 150;
    document.getElementById("pre_payment_bar").style.display = "block";
    }else{
      shiping_fee = 180;
      document.getElementById("pre_payment_bar").style.display = "none";


    }
    fee.innerText = "Delivery fee: Rs. "+shiping_fee;
    grandTotal = shiping_fee+total_cost;
    final.innerText = "Grand Total: Rs. "+grandTotal;

}

function toTitleCase(str) {
  return str
    .split(" ") // split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter
    .join(" "); // join back
}
 function checkNet() {
  if (navigator.onLine) {
    console.log("✅ You are online");
    return true;
  } else {
    console.log("❌ You are offline");
    return false;
  }
}

const texts = document.querySelectorAll('.text');
  let index = 0;

  function showNextText() {
    // 1. Mark current active as exiting
    const currentText = texts[index];
    currentText.classList.remove('active');
    currentText.classList.add('exit');

    // Remove the exit class after animation finishes so it resets at the bottom
    setTimeout(() => {
      currentText.classList.remove('exit');
    }, 600); 

    // 2. Move to next text
    index = (index + 1) % texts.length;
    texts[index].classList.add('active');
  }

  setInterval(showNextText, 2500); // change every 2.5 seconds
