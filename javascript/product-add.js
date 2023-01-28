const input = document.getElementById('prod-img');
console.log("input", input);
let imageResult;

input.addEventListener('change', (event) => {
    console.log("INSIDE INPUT EVENT");
    const images = event.target.files;
    
    console.log("EVENET", event);
    console.log("EVENT TARGET", event.target);
    console.log("TARGETED FILE", event.target.files);

    const reader = new FileReader();

    reader.readAsDataURL(images[0]);

    reader.addEventListener('load', () => {
        imageResult = reader.result;
    });
});

function addProduct(e) {
    e.preventDefault;

    let mailId = localStorage.getItem('loggedInUser');
    // console.log("mailIdabove",mailId);
    let prodPickup = document.getElementById('pickup').value;
    let prodDestination = document.getElementById('destination').value

    //storing all details of product in localstorage in array of object form

    let uploadData = [];
    // agar calSttttorage me data hoga to hi ye chaleeega and uploaaaad data me datttttttttttttttta add krega
    if (localStorage.getItem("entriesOfProduct")) {
        uploadData = JSON.parse(localStorage.getItem("entriesOfProduct"));
    }

    // upload Data k andar 1 record hoga

    let shipment = {
        productImg: imageResult,
        usermailId: mailId,
        productPickup: prodPickup,
        productDestination: prodDestination,
        status: "Pending"
    };
    console.log("shipment", shipment);

    
    uploadData.push(shipment);
    // Yaha pe 2nd record uploadData me push ho jaega
    // agar localstorage me koi data nahi hogi to ye 1st record bann jaega
    localStorage.setItem("entriesOfProduct", JSON.stringify(uploadData));

    // let allentries = JSON.parse(localStorage.getItem("entriesOfProduct"));
    // allentries.push(shipment);

    // console.log("allentries",allentries)
    // localStorage.setItem("entriesOfProduct",JSON.stringify(allentries));

    alert("successfully submitted, will let you know soon about the update")


window.location.href = "../html/product.html"

}


