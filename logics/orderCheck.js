let viwerorderID = "";
let viwerName = "";
let viwerPhone = "";
let viwerEmail = "";
let viwerLocation = "";
let viwerMap = "";
let viwerPay = "";
let viwerOrderStatus = "";
let viwerShppingCost= "";
let viwerItems =[];
let viwerItemsPrice =[];
let finalCostV = 0;

function reShow(){
    let record = "";
        record += " <h2><strong>Your Order Status: </strong><br>"+viwerOrderStatus+"</h2>";

    document.getElementById("enterCode").style.display = "none";
        document.getElementById("data_gets").style.display = "block";

     for (let i = 0; i < viwerItems.length; i++) {
        record += " <p>"+viwerItems[i]+" _ _ _ _ Rs. "+viwerItemsPrice[i]+"</p>";

  }
  record += " <h3><strong>Your Name: </strong>"+viwerName+"</h3>";
    record += " <h3><strong>Your Address: </strong>"+viwerLocation+"</h3>";
      record += " <h3><strong>Your Email: </strong>"+viwerEmail+"</h3>";
        record += " <h3><strong>Your Phone: </strong>"+viwerPhone+"</h3>";
        record += " <h3><strong> via: </strong>"+viwerPay+"</h3>";
    record += " <h3><strong>Items Total Cost: </strong>"+(finalCostV-viwerShppingCost)+"</h3>";
    record += " <h3><strong>Shipping fee: </strong>"+viwerShppingCost+"</h3>";
    record += "<button id='cancel' onclick='deleteOrder()' >Cancel</button>";



          document.getElementById("data_gets").innerHTML = record;
          document.getElementById("price_show").innerText = finalCostV;
          resetCursor();
    

}

function deleteOrder(){

  
  if (viwerOrderStatus == "pending"){
      let result = confirm("Are you sure you want to delete this order?");

    if (result) {

    canceling();
    hidecart();
      document.getElementById("enterCode").style.display = "block";
  document.getElementById("data_gets").style.display = "none";

  }
    
   else {
    // User clicked No
    console.log("Action cancelled.");
  }
    }else{
        alert("This order can no longer be cancelled because it is no longer pending. For further assistance, please contact our corporate support team.")
  
}
}
