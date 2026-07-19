function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
 
  return result;
}



// 1. Import all the required SDKs (App, Analytics, and Database)
 import { initializeApp, getApps, getApp} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, remove} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

  // 2. Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyChsA1JnRSDRtrYsIoGvNeH5iht37Y1R7g",
    authDomain: "order-management-6ae2e.firebaseapp.com",
    databaseURL: "https://order-management-6ae2e-default-rtdb.firebaseio.com",
    projectId: "order-management-6ae2e",
    storageBucket: "order-management-6ae2e.firebasestorage.app",
    messagingSenderId: "577208267723",
    appId: "1:577208267723:web:7c6607676cc620654f3c4e",
    measurementId: "G-7FNLKCCHYX"
  };

  // 3. Initialize Firebase services
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const analytics = getAnalytics(app);
  const db = getDatabase(app); // <-- Don't forget to initialize the database!

  
  const firebaseConfig2 = {
    apiKey: "AIzaSyCENnjTpE1bWdZDuwgMPGZbeR3pryTWaY8",
    authDomain: "backend-af2c8.firebaseapp.com",
    databaseURL: "https://backend-af2c8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "backend-af2c8",
    storageBucket: "backend-af2c8.firebasestorage.app",
    messagingSenderId: "699842068356",
    appId: "1:699842068356:web:86ff5cbbffc5e2c861e7d1",
    measurementId: "G-M8FRJ003Z5"
  };

 const app2 = initializeApp(firebaseConfig2, "secondary");
  const analytics2 = getAnalytics(app2);
  const db2 = getDatabase(app2); // <-- Don't forget to initialize the database!

window.sendingDatas = function() {
  if(checkNet()){
    orderingLoadShow();
    console.log("Data fetching..");

  let order_code = generateCode()+buyerPhone.slice(-4);
    updateDataAndTime();
  const userData = {
    sku: items_suk,
    date: bsDate,
    time: time,
    name: toTitleCase(buyerName),
    shippingfee: delivery_fee ,
    finalCost: grandTotal,
    phone: buyerPhone,
    location: toTitleCase(buyerLocation),
    email: buyerEmail,
    pay: buyerPay,
    dist: buyerDist,
    mapurl: buyerLocationLink,
    status: orderStart,
    items: items_name,    // make sure defined
    items_price: priceing // make sure defined
  };

  set(ref(db, order_code), userData)
    .then(() => {
        console.log("done...");

      sendEmail(order_code);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
  }
    else{
      alert("Check the Connection!");

  }
  
};

window.reCall = function() {
  if(checkNet()){
showLoadingCursor();
  const orderId = document.getElementById("id_track").value;
 get(ref(db, orderId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        viwerorderID = orderId;
        viwerName = snapshot.val().name;
        viwerPhone = snapshot.val().phone;
        viwerEmail = snapshot.val().email;
        viwerLocation = snapshot.val().location;
        viwerMap = snapshot.val().mapurl;
        viwerPay = snapshot.val().pay;
        viwerOrderStatus = snapshot.val().status;
        viwerShppingCost= snapshot.val().shippingfee;
        viwerItems = snapshot.val().items;
        viwerItemsPrice = snapshot.val().items_price;
        finalCostV = snapshot.val().finalCost;

        document.getElementById("id_track").value = "";

        reShow();
        
      } else {
        document.getElementById("noteNotFound").style.display = "block";
        resetCursor();

        console.log("❌ Main tag VWHM4311 does not exist or is empty.");
      }
    })
    .catch((error) => {
      console.error("Error fetching main tag:", error);
    });

  }else{
      alert("Check the Connection!");

  }
  
};


window.canceling = function() {
 // Point the reference directly to the main tag you want to delete
  const nodeRef = ref(db, viwerorderID);

  remove(nodeRef)
    .then(() => {
      sendEmailForCancel();
      console.log("✅ Node successfully deleted!");
    })
    .catch((error) => {
      console.error("❌ Error deleting node:", error);
    });
};


function readSKU() {
  
        console.log("db2 okay.0");

  get(ref(db2, "/"))   // root of your database
     .then((snapshot) => {
       if (snapshot.exists()) {
        let data = snapshot.val();

        let parentKeys = Object.keys(data);   // get all parent tag names

          let bagRecord =  "<h1>Conmponents</h1><div class=\"showing_conteneer\">";
           let kitsRecord = "<h1>Kits</h1><div class=\"showing_conteneer\">";
        let toolsRecord = "<h1>Tools</h1><div class=\"showing_conteneer\">";
        let projectRecord = "<h1>Project kits</h1><div class=\"showing_conteneer\">";
        let electricRecord = "<h1>Electica</h1><div class=\"showing_conteneer\">";

        // Loop through each parent tag name
        parentKeys.forEach((key) => {
           let childObj = data[key];
          let s = childObj.catagorey;
          
          if(s == "bag"){
              let imges;
              var l = childObj.imgs;
              imges = l.split(',');
              

              bagRecord += "<div title='Shift+Scroll' class='items_kept'>";
bagRecord += "<img onclick='product(\""+key+"\")' class='items' src='"+imges[0]+"' alt=''>";
if (childObj.disc_price > 0){
   bagRecord += "<span class='offer-ribbon'>Offer</span>"; // 👈 diagonal ribbon
   bagRecord += "<h4>"+childObj.productName+
                "<br><h3><del>Rs. "+childObj.disc_price+
                "</del> | Rs. "+childObj.main_price+"</h3></h4>";
}else{
   bagRecord += "<h4>"+childObj.productName+
                "<br><h3>Rs. "+childObj.main_price+"</h3></h4>";
}


bagRecord += "<button class='btn_item'>Inquiry</button>";
bagRecord += "<button onclick='addToCart(\""+childObj.productName+"\",\""+key+"\","+childObj.main_price+")' class='btn_item'>Add to Cart</button></div>";

          

          } else if(s == "kits"){
              let imges;
              var l = childObj.imgs;
              imges = l.split(',');
              

              kitsRecord +="<div title=\"Shift+Scroll\" class=\"items_kept\">";
              kitsRecord +="<img onclick='product(\""+key+"\")' class=\"items\" src='"+imges[0]+"' alt=\"\">";
              if (childObj.disc_price > 0){
   kitsRecord += "<span class='offer-ribbon'>Offer</span>"; // 👈 diagonal ribbon
   kitsRecord += "<h4>"+childObj.productName+
                "<br><h3><del>Rs. "+childObj.disc_price+
                "</del> | Rs. "+childObj.main_price+"</h3></h4>";
}else{
   kitsRecord += "<h4>"+childObj.productName+
                "<br><h3>Rs. "+childObj.main_price+"</h3></h4>";
}

              kitsRecord +="<button class=\"btn_item\">Inqury</button>";
              kitsRecord +="<button onclick='addToCart(\""+childObj.productName+"\",\""+key+"\","+childObj.main_price+")' class=\"btn_item\">Add to Cart</button></div>";      
            
          

          }else if(s == "kits"){
              let imges;
              var l = childObj.imgs;
              imges = l.split(',');
              

              toolsRecord +="<div title=\"Shift+Scroll\" class=\"items_kept\">";
              toolsRecord +="<img onclick='product(\""+key+"\")' class=\"items\" src='"+imges[0]+"' alt=\"\">";
             if (childObj.disc_price > 0){
   toolsRecord += "<span class='offer-ribbon'>Offer</span>"; // 👈 diagonal ribbon
   toolsRecord += "<h4>"+childObj.productName+
                "<br><h3><del>Rs. "+childObj.disc_price+
                "</del> | Rs. "+childObj.main_price+"</h3></h4>";
}else{
   toolsRecord += "<h4>"+childObj.productName+
                "<br><h3>Rs. "+childObj.main_price+"</h3></h4>";
}

              toolsRecord +="<button class=\"btn_item\">Inqury</button>";
              toolsRecord +="<button onclick='addToCart(\""+childObj.productName+"\",\""+key+"\","+childObj.main_price+")' class=\"btn_item\">Add to Cart</button></div>";      
            
          

          }
          else if(s == "kits"){
              let imges;
              var l = childObj.imgs;
              imges = l.split(',');
              

              projectRecord +="<div title=\"Shift+Scroll\" class=\"items_kept\">";
              projectRecord +="<img onclick='product(\""+key+"\")' class=\"items\" src='"+imges[0]+"' alt=\"\">";
              if (childObj.disc_price > 0){
   projectRecord += "<span class='offer-ribbon'>Offer</span>"; // 👈 diagonal ribbon
   projectRecord += "<h4>"+childObj.productName+
                "<br><h3><del>Rs. "+childObj.disc_price+
                "</del> | Rs. "+childObj.main_price+"</h3></h4>";
}else{
   projectRecord += "<h4>"+childObj.productName+
                "<br><h3>Rs. "+childObj.main_price+"</h3></h4>";
}

              projectRecord +="<button class=\"btn_item\">Inqury</button>";
              projectRecord +="<button onclick='addToCart(\""+childObj.productName+"\",\""+key+"\","+childObj.main_price+")' class=\"btn_item\">Add to Cart</button></div>";      
            
          

          }else if(s == "kits"){
              let imges;
              var l = childObj.imgs;
              imges = l.split(',');
              

              electricRecord +="<div title=\"Shift+Scroll\" class=\"items_kept\">";
              electricRecord +="<img onclick='product(\""+key+"\")' class=\"items\" src='"+imges[0]+"' alt=\"\">";
 if (childObj.disc_price > 0){
   electricRecord += "<span class='offer-ribbon'>Offer</span>"; // 👈 diagonal ribbon
   electricRecord += "<h4>"+childObj.productName+
                "<br><h3><del>Rs. "+childObj.disc_price+
                "</del> | Rs. "+childObj.main_price+"</h3></h4>";
}else{
   electricRecord += "<h4>"+childObj.productName+
                "<br><h3>Rs. "+childObj.main_price+"</h3></h4>";
}

              electricRecord +="<button class=\"btn_item\">Inqury</button>";
              electricRecord +="<button onclick='addToCart(\""+childObj.productName+"\",\""+key+"\","+childObj.main_price+")' class=\"btn_item\">Add to Cart</button></div>";      
            
          

          }

       
          });
                  document.getElementById("bag").innerHTML = bagRecord+"</div>";
                  document.getElementById("kits").innerHTML = kitsRecord+"</div>";
                  document.getElementById("tools").innerHTML = toolsRecord+"</div>";
                  document.getElementById("project").innerHTML = projectRecord+"</div>";
                  document.getElementById("electic").innerHTML = electricRecord+"</div>";

       } else {
        console.log("❌ No data found at root.");
       }
    })
    .catch((error) => {
      console.error("Error reading parent tags:", error);
    });
}


readSKU();


window.product = function(suk){
  
        console.log("db2 okay.1");
        
  get(ref(db2, suk))   // root of your database
     .then((snapshot) => {
      let imgs_url = snapshot.val().imgs.split(',');
       let h_lights = snapshot.val().highlight.split(',');

      console.log(h_lights);

       if (snapshot.exists()) {
        let htmlString = "<div class=\"more_info\"><div style=\"display: flex; width: 100%; text-align: right; justify-content: flex-end;\">";
        htmlString += "<button id='cross' onclick='hideMoreInfo()' style='justify-self: right;'>❌</button></div>";
            imgs_url.forEach((key) => {
             htmlString += "<img class=\"main_img\" src='"+key+"' alt=\"\">";
            });
            
    
        htmlString += "<div id=\"texts\"><h4><b>SUK:</b>"+suk;
        h_lights.forEach((key) => {
          htmlString  += "</h4><h4><b>"+key+"</b></h4>";
            });
        htmlString += "<p class=\"item_infos\">"+snapshot.val().discrip+"</p></div></div>";

    document.body.style.overflow = "hidden";
    document.querySelector('#more_info_id').style = "display: block;";
     document.querySelector('#more_info_id').innerHTML = htmlString;
       document.getElementById("more_info_id").classList.add("show");
       } else {
        console.log("❌ No data found at root.");
       }

    })
    .catch((error) => {
      console.error("Error reading parent tags:", error);
    });

};
