//Extra ram cost
const memoryCost = document.getElementById('memory-cost');
document.getElementById('first-ram').addEventListener('click', function () {
    memoryCost.innerText = ('memory-cost', 0);

})
document.getElementById('second-ram').addEventListener('click', function () {
    memoryCost.innerText = ('memory-cost', 100);
})

//Storage section
const storageCharge = document.getElementById('storage-cost');
document.getElementById('storage-256gb').addEventListener('click', function () {
    storageCharge.innerText = ('storage-cost', 100);
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageCharge.innerText = ('storage-cost', 200);
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    storageCharge.innerText = ('storage-cost', 300);
})

//Delivery cost 
const deliveryCharge = document.getElementById('delivery-cost');
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = ('delivery-cost', 0);
})
document.getElementById('delivery-charge').addEventListener('click', function () {
    deliveryCharge.innerText = ('delivery-cost', 20);
})

//Total cost 

function totalCost() {
    let bestPriceTotal = getInputValue('best-price');
    let memoryPriceTotal = getInputValue('memory-cost');
    let storagePriceTotal = getInputValue('storage-cost');
    let deliveryCostTotal = getInputValue('delivery-cost');
    let totalPrice = bestPriceTotal + memoryPriceTotal + storagePriceTotal + deliveryCostTotal;
    document.getElementById('total-cost').innerText = totalPrice;
    return totalPrice;
}