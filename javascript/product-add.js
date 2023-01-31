const input = document.getElementById('prod-img');
console.log("input", input);
let imageResult;

input.addEventListener('change', (event) => {
    console.log("INSIDE INPUT EVENT");
    const images = event.target.files;

    // console.log("EVENET", event);
    // console.log("EVENT TARGET", event.target);
    // console.log("TARGETED FILE", event.target.files);

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


    let uploadData = [];
    if (localStorage.getItem("entriesOfProduct")) {
        uploadData = JSON.parse(localStorage.getItem("entriesOfProduct"));
    }

    let shipment = {
        id: uploadData.length > 0 ? uploadData.length : 0,
        productImg: imageResult,
        usermailId: mailId,
        productPickup: prodPickup,
        productDestination: prodDestination,
        status: "Pending"
    };
    console.log("shipment", shipment);


    uploadData.push(shipment);

    localStorage.setItem("entriesOfProduct", JSON.stringify(uploadData));

    // console.log("uploadData", uploadData)
    // console.log("entries of product", entriesOfProduct)
    alert("successfully submitted, will let you know soon about the update")


    window.location.href = "../html/product.html"

}


