//variable declered
let bestPrice = document.getElementById("best-price");
let totalMemoryCost = document.getElementById("memory-cost");
let totalStorageCost = document.getElementById("storage-cost");
let totalDeliveryCost = document.getElementById("delivery-cost");
let totalPrice = document.getElementById("total-cost");
let totalPriceButtom = document.getElementById("all-price-bottom");
let promoInput = document.getElementById("input-cupon");


// this is for Cost Update
function costTotal(takeCost, price) {
    if (takeCost == "memory") {
        totalMemoryCost.innerText = price;
    } else if (takeCost == "ssd") {
        totalStorageCost.innerText = price;
    } else if ((takeCost = "delivery")) {
        totalDeliveryCost.innerText = price;
    }
    // all Calculation
    let allTotalPrice =
        parseInt(bestPrice.innerText) +
        parseInt(totalMemoryCost.innerText) +
        parseInt(totalStorageCost.innerText) +
        parseInt(totalDeliveryCost.innerText);
    totalPrice.innerText = allTotalPrice;
    totalPriceButtom.innerText = allTotalPrice;
}

//  Coupon Function
function promoCupon() {
    let total = parseInt(totalPrice.innerText);
    promoCode = promoInput.value;
    if (promoCode == "stevekaku") {
        totalPriceButtom.innerText = (totalPrice.innerText / 100) * 80;
    } else {
        alert("Invalid Promo Code");
    }
    promoInput.value = "";
}

// this is for Memory
document
    .getElementById("first-memory")
    .addEventListener("click", function () {
        costTotal("memory", 0);
    });

document
    .getElementById("last-memory")
    .addEventListener("click", function () {
        costTotal("memory", 180);
    });

// this is for Storage
document.getElementById("storage-256gb").addEventListener("click", function () {
    costTotal("ssd", 0);
});
document.getElementById("storage-512gb").addEventListener("click", function () {
    costTotal("ssd", 100);
});
document.getElementById("storage-1tb").addEventListener("click", function () {
    costTotal("ssd", 180);
});

// this is for delivery
document.getElementById("late-delivery").addEventListener("click", function () {
    costTotal("delivery", 0);
});
document.getElementById("fast-delivery").addEventListener("click", function () {
    costTotal("delivery", 20);
});

// this is for coupon
document.getElementById("cupon-btn").addEventListener("click", function () {
    promoCupon();
});