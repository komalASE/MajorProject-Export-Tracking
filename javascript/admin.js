let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));
console.log("line->3", productData);

let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);

let mailid = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log("line->10", mailid);

const handleReject =() => {
    console.log("Handle reject called");
}

mailid?.map((data) => {
    console.log("line-->12", data.status);
    if (data.status === "Pending") {
        console.log("line-->14", data.status);
        document.write(`
            <div  class="row">
            <div class="col-4">
                <div class="card" style="width:400px">
                    <div class="card-body">
                    <img class="card-img-top" src=${data.productImg}  alt="Card image" style="width:100%">
                    <p class="card-text">Pickup Point : ${data.productPickup}</p>
                    <p class="card-text">Destination Address : ${data.productDestination}</p>
                    <form method="POST">
                    <button class="btn btn-danger" onclick="handleReject()">Reject</button>
                    <button class="btn btn-success">Approve</button>
                    </form> 
                    </div>
                </div>
            </div>
            </div>
            <br>
            <br>`
        );
    }
})
