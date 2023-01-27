let productData = document.getElementById("conatiner")
productData = JSON.parse(window.localStorage.getItem("entriesOfProduct"));


let loggedInUservar = localStorage.getItem("loggedInUser");
console.log(loggedInUservar);


let mailid = JSON.parse(localStorage.getItem("entriesOfProduct"));
console.log(mailid);

// particularMailId = mailid[1].usermailId;
// console.log(particularMailId);

mailid?.map((data) => {
    console.log(data);
    if(loggedInUservar == data.usermailId){
         
        document.write(`<div class="image-container">

        <div class="prod-img" > <img class="prodImg" src=${data.productImg} /></div>
    
        <div>
            <div class="pickup"> Current User : ${data.usermailId} </div>   
            <div class="pickup"> Pickup Point : ${data.productPickup} </div>
            <div class="destination" > Destination Address : ${data.productDestination} </div>
        </div>               
        
        </div>`);
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


