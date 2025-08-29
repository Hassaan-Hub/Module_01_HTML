// CallBack Hell

// Start Shopping...
// 1: Order placed
// 2: Payment done
// 3: Shipping started
// 4: Delivery checked
// 5: Wallet updated
// 6: Final status: SUCCESS

// console.log("Start shopping");

// setTimeout(() => {
//     console.log("Step 1: Order placed");
//     setTimeout(() => {
//         console.log("Step 2: Payment done");
//         setTimeout(() => {
//             console.log("Step 3: Shipping started");
//             setTimeout(() => {
//                 console.log("Step 4: Delivery checked");
//                 setTimeout(() => {
//                     console.log("Step 5: Wallet updated");
//                     setTimeout(() => {
//                         console.log("Step 6: Final status: SUCCESS");
//                     }, 1000)
//                 }, 1000)
//             }, 1000);
//         }, 1000)
//     }, 1000)
// }, 1000)





// PROMISES

// const api = {
//     Order: c => Promise.resolve("ORDER123"),
//     Payment: o => Promise.resolve("PAYMENT456"),
//     Shipping: p => Promise.resolve("TRACK789"),
//     CheckDelivery: t => Promise.resolve("Delivered")
// }

// api.Order(["Shoes"])
//     .then(api.Payment)
//     .then(api.Shipping)
//     .then(api.CheckDelivery)
//     .then(status => console.log("Delivery Status: ", status))
//     .catch(console.error)






// Async / Await (Most Readable)

// const api = {
//     Order: () => Promise.resolve("ORDER123"),
//     Payment: () => Promise.resolve("PAYMENT456"),
//     Shipping: () => Promise.resolve("TRACK879"),
//     CheckDelivery: () => Promise.resolve("Delivered")
// };

// (async () => console.log("Delivery Status: ", await api.CheckDelivery(await api.Shipping(await api.Payment(await api.Order())))))();




const user = fatch('https://api.github.com/users/Hassaan-Hub')       //  not actual value

user.then(function (data) {
    console.log(data);
})


fatch('https://api.github.com/users/Hassaan-Hub')                        // actual value
    .then(Response => Response.json())  // convert Response to JSON
    .then(data => console.log(data))     // actual data
    .catch(error => console.error(error));


