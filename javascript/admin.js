let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));
console.log("line->3", productData);

let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);

let mailid = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log("line->10", mailid);


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
                   
                    <button id="approveBtn" onclick="approveRequest(${data.id})">Approve</button>
                    <button id="rejectBtn" onclick="rejectRequest(${data.id})">Reject</button>
                  
                    </div>
                </div>
            </div>
            </div>
            <br>
            <br>`
        );
    }
})

function approveRequest(id) {
    console.log("approved", id);
    const entries = JSON.parse(localStorage.getItem('entriesOfProduct'));

    entries?.map((data) => {
        console.log("line->43", data.id);
        if (data.id === id) { 
          data.status = "approved";
          alert("status updated successfully")
        }
    
    })

    localStorage.setItem("entriesOfProduct", JSON.stringify(entries));

}

function rejectRequest(id) {
    console.log("rejected",id);
    const entries = JSON.parse(localStorage.getItem('entriesOfProduct'));

    entries?.map((data) => {
        if (data.id === id) { 
          data.status = "rejected";
          alert("status updated successfully")
        }
    
    })
    localStorage.setItem("entriesOfProduct",JSON.stringify(entries));
}