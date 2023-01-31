let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));
console.log("line->3", productData);

let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);

let allEntriesOfTheProduct = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log("line->10", allEntriesOfTheProduct);


allEntriesOfTheProduct?.map((data) => {
    console.log("line-->12", data.status);
    if (data.status === "Pending") {
        console.log("line-->14", data.status);
        document.write(`
           
                <div class="card" style="width:400px">
                    <div class="card-body">
                    <img class="card-img-top" src=${data.productImg}  alt="Card image" style="width:100%">
                    <p class="card-text">Pickup Point : ${data.productPickup}</p>
                    <p class="card-text">Destination Address : ${data.productDestination}</p>
                   
                    <button id="approveBtn" onclick="approveRequest(${data.id})">Approve</button>
                    <button id="rejectBtn" onclick="rejectRequest(${data.id})">Reject</button>
                  
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
          data.status = "Approved";
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
          data.status = "Rejected";
          alert("status updated successfully")
        }
    
    })
    localStorage.setItem("entriesOfProduct",JSON.stringify(entries));
}