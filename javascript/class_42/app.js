// best (async/await)
let cart = ["shoes", "shirts", "cap"];

async function processOrder() {
    try{
        const orderId = await api.order(cart)
        const paymentId = await api.payment(orderId)
        const trackingId = await api.shipping(paymentId)
        const deliveryStatus = await api.order(trackingId)
        const walletStatus = await api.order(deliveryStatus)
        const status = await api.order(walletStatus)
        console.log(`Final result: ${status}`);
    } catch(error){
        console.log(error)
    }
}

processOrder()