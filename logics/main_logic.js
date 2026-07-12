
const info_notes = [
`<div class="more_info">
    <div style="display: flex; width: 100%; text-align: right; justify-content: flex-end;">
      <button id="cross" onclick="hideMoreInfo()" style="justify-self: right;">❌</button>
    </div>
    <img class="main_img" src="https://scontent.fpkr3-1.fna.fbcdn.net/v/t39.30808-6/745411731_122110637577363771_8138851320240399916_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1148&ctp=s2048x1148&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHX27BkwF2N2-RKXPIIKEAhSFLYdr4fZtVIUth2vh9m1Tsf2lrVcdoUYLQ5PK7bccDpeyzTY8pv-H8fE-FiK_UC&_nc_ohc=W65ihX-fs0gQ7kNvwHsNvVe&_nc_oc=AdpB51BFzP7Fbp15hlfx7cUCudj1D2DvYFtcXPZhm6v8IcAzHOnIa204rLw6r8fEn9g33qdiQRWZfB4iM5pid1CA&_nc_zt=23&_nc_ht=scontent.fpkr3-1.fna&_nc_gid=yAM2KxAqFEhJqa8Nl1lKwA&_nc_ss=7b2a8&oh=00_AQAvQVd90Oaokk_jhMdKXt37zsGItfDTLiNGWHdclNKXZQ&oe=6A595E51" alt="">
    <img class="main_img" src="https://scontent.fpkr3-1.fna.fbcdn.net/v/t39.30808-6/746503001_122110637481363771_3476711948870498917_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF71zYrsR0TyxYq3fFtmmtRp2BmeOKA326nYGZ44oDfbn56SxhvIjeEFpWqml6S4cYbg-iY8rCY-y0xFSWswG-Y&_nc_ohc=PwZccRqSuUIQ7kNvwHRoAYD&_nc_oc=Adr3t749RY8b_yRdqjeZNdbyrvsKMqTCBLPadQsidvmI3duIytMfrxa1O52dKt_1m3tcwoO3sNK96W_XVd1D1k2l&_nc_zt=23&_nc_ht=scontent.fpkr3-1.fna&_nc_gid=W0BEicVsnXvDAfJcV8tPdA&_nc_ss=7b2a8&oh=00_AQAa_Y4lD7woLXaJSpEonnSikYPTHoKb0dPSlfVhZDVFFQ&oe=6A595811" alt="">
    <img class="main_img" src="https://scontent.fpkr3-1.fna.fbcdn.net/v/t39.30808-6/743132100_122110637457363771_3084712289577684976_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2047&ctp=s2048x2047&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFy4E17dG6uVRlfm6BwWL6jT9uEVhaWFKhP24RWFpYUqNPajGSUmzCIduBpRV6frb9mKL2pSRVBVmqN0Ly6cJ0G&_nc_ohc=yptz9agakVQQ7kNvwFXI7wZ&_nc_oc=AdqD5NCYOBWWJkevcZsflG0J7FWedLoKP34ZX9zO8DCOUD7e_XAR9zrqCz3ng1JBT52eczPjCKB3_9nFEdHgai_4&_nc_zt=23&_nc_ht=scontent.fpkr3-1.fna&_nc_gid=eMKJXssCYzl06o_Hr8zjgg&_nc_ss=7b2a8&oh=00_AQBmj0X3u3Etgm-JB1vgzet7vLv5rSIaFvH0Hwz4vqRSkw&oe=6A5958BC" alt="">
    <div id="texts">
      <h4><b>SUK:</b> 45</h4>
      <h4><b>Chip:</b> Atmega328p</h4>
      <p class="item_infos">Arduino is an open-source electronics platform built around easy-to-use hardware and software, perfect for beginners and hobbyists to create interactive projects. It uses microcontroller boards (like the Arduino Uno) that you program with simple code to control sensors, motors, LEDs, and more.</p>
    </div></div>`,

    `<div class="more_info">
    <div style="display: flex; width: 100%; text-align: right; justify-content: flex-end;">
      <button id="cross" onclick="hideMoreInfo()" style="justify-self: right;">❌</button>
    </div><img class="main_img" src="https://tse3.mm.bing.net/th/id/OIP.gi9HogbqgVIC110gw5EzLwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="">
   <div id="texts">
      <h4><b>SUK:</b> 35</h4>
      <h4><b>Chip:</b> Relay Module</h4>
      <p class="item_infos">Arduino is an open-source electronics platform built around easy-to-use hardware and software, perfect for beginners and hobbyists to create interactive projects. It uses microcontroller boards (like the Arduino Uno) that you program with simple code to control sensors, motors, LEDs, and more.</p>
        <p class="item_infos">Arduino is an open-source electronics platform built around easy-to-use hardware and software, perfect for beginners and hobbyists to create interactive projects. It uses microcontroller boards (like the Arduino Uno) that you program with simple code to control sensors, motors, LEDs, and more.</p>
                <p class="item_infos">Arduino is an open-source electronics platform built around easy-to-use hardware and software, perfect for beginners and hobbyists to create interactive projects. It uses microcontroller boards (like the Arduino Uno) that you program with simple code to control sensors, motors, LEDs, and more.</p>

      </div></div>`

];


function product(index){
    document.body.style.overflow = "hidden";
    document.querySelector('#more_info_id').style = "display: block;";
     document.querySelector('#more_info_id').innerHTML = info_notes[index];
       document.getElementById("more_info_id").classList.add("show");
}
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
 


