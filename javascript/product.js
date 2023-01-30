let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));
console.log("line->3", productData);

let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);

let allEntriesOfTheProduct = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log("line->10", allEntriesOfTheProduct);


var statusOfProduct = allEntriesOfTheProduct.find(item => item.status === "Pending");
// console.log("line-->26" ,statusOfProduct.status); 


allEntriesOfTheProduct?.map((data) => {
    console.log(data);
    if (loggedInUservar == data.usermailId) {
        document.write(
            `<div class="card" style="width:400px">
                <div class="card-body">
                <img class="card-img-top" src=${data.productImg}  alt="Card image" style="width:100%">
                <h4 style="    border: 3px solid black;
                text-align: center;
                font-size: x-large;
                color: #d1d12e;" class="card-title"> ${data.status}</h4>
                <p class="card-text">Pickup Point : ${data.productPickup}</p>
                <p class="card-text">Destination Address : ${data.productDestination}</p>
                </div>

        </div>`
        );
    }

})










// for (let i = 0; i < productData.length; i++) {

//    document.write(`<div class="image-container">

//         <div class="prod-img" > <img class="prodImg" src=${productData[i].productImg} /></div>

//         <div>   
//             <div class="pickup" > Pickup Point : ${productData[i].productPickup} </div>
//             <div class="destination" > Destination Address : ${productData[i].productDestination} </div>
//         </div>               

//         </div>`);

// }


{/* <a href="#" class="btn btn-danger">Reject</a> */ }

