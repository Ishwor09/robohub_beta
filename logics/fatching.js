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
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app); // <-- Don't forget to initialize the database!
window.sendingDatas = function() {
  orderingLoadShow();
    console.log("Data fetching..");

  let order_code = generateCode()+buyerPhone.slice(-4);

  const userData = {
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
};

window.reCall = function() {
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
        console.log("❌ Main tag VWHM4311 does not exist or is empty.");
      }
    })
    .catch((error) => {
      console.error("Error fetching main tag:", error);
    });
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



