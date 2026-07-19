
let cart_dats = [];
var cart_deletNum = 0;
let orderStatus_diloc = [
  "pending",
  "confirmed & shipped",
  "delivered",
  "cancelled",
  "refunded",
  "completed",
  "on_hold",
  "failed"
];
    let bsDate;
let time;
let Numbers = [];
let items_name = [];
let items_suk = [];
let priceing = [];
let total_cost = 0;



var delivery_fee = 150;
let buyerName = "";
let buyerEmail = "";  
let buyerPhone = "";  
let buyerDist = "";  
let buyerLocation = "";  
let buyerLocationLink = "";  
let buyerPay = "";  
let grandTotal = 0;
let orderStart =orderStatus_diloc[0];