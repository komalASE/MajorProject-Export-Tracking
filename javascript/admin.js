let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));
console.log("line->3", productData);

let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);

let mailid = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log("line->10",mailid);


var statusOfProduct = mailid.find(item => item.status === "Pending");


mailid?.map((data) => {
    console.log(data);
         
        document.write(`
        <div class="col-4">
            <div class="card" style="width:400px">
                <div class="card-body">
                <img class="card-img-top" src=${data.productImg}  alt="Card image" style="width:100%">
                <h4 class="card-title"> ${statusOfProduct.status}</h4>
                <p class="card-text">Pickup Point : ${data.productPickup}</p>
                <p class="card-text">Destination Address : ${data.productDestination}</p>
                </div>
            </div>
        </div>`
        );

})
