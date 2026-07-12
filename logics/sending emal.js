(function(){
  emailjs.init("WfTUnKTDa605IEIs1"); // Public Key
})();

function sendEmail(trackCode) {
  let recodMsg = "Hello & Namaste Dear "+toTitleCase(buyerName)+",\nWe have received your order and it is currently under review. Your items will be shipped soon. Below are the details of your order.\n\n Order Id: "+trackCode;
  for (let i = 0; i < items_name.length; i++) {
   recodMsg += "\n "+items_name[i]+"_____   Rs. "+priceing[i];
  }
  recodMsg += "\n\n Total Cost: "+total_cost;


  recodMsg += "\n\n Thanks for chooseing us for more information.";
  recodMsg += "\nPhone: 9803374311";
  recodMsg += "\nEmail: rmakershub@gmail.com";
  recodMsg += "\nLocation: Sorry not available now, We are online base store and it's available soon.";




  emailjs.send("service_pwffi3l", "template_5piuag7", {
    title: orderStart,
    time: new Date().toLocaleTimeString(),
    message: recodMsg,
    email: buyerEmail
  })
  .then(function(response) {
     Numbers = [];
        items_name = [];
        items_suk = [];
        priceing = [];
        updateCart();
        orderingLoadHide();

        buyerName = "";
        buyerEmail = "";  
        buyerPhone = "";  
        buyerDist = "";  
        buyerLocation = "";  
        buyerLocationLink = "";  
        buyerPay = "";  
        document.getElementById("stage_1").style.display = "none";
        document.getElementById("stage_2").style.display = "block";

    console.log("SUCCESS!", response.status, response.text);
  })
  .catch(function(error) {

    console.log("FAILED...", error);
  });
}


function sendEmailForCancel() {
  let recodMsg = "Hello & Namaste Dear "+viwerName(v)+",\nWe have received your request to cancel order "+viwerorderID+". This order has now been cancelled successfully, and no further action will be taken.";

recodMsg += "If you had already made a payment, the refund will be processed within a business days 9am to 8pm. You will receive a separate confirmation once the refund is complete.";
recodMsg += "We’re sorry to see you cancel, but we hope to serve you again in the future. If you have any questions, please contact us."

  recodMsg += "\n\nPhone: 9803374311";
  recodMsg += "\nEmail: rmakershub@gmail.com";
  recodMsg += "\nLocation: Sorry not available now, We are online base store and it's available soon.";




  emailjs.send("service_pwffi3l", "template_5piuag7", {
    title: orderStatus_diloc[3],
    time: new Date().toLocaleTimeString(),
    message: recodMsg,
    email: viwerEmail
  })
  .then(function(response) {
    

    console.log("SUCCESS!", response.status, response.text);
  })
  .catch(function(error) {

    console.log("FAILED...", error);
  });
}

