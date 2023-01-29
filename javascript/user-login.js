const userData = [
    {
        id: 1,
        name: 'Ashish',
        email: 'ashish@gmail.com',
        role: 'user',
        password: 'Abcd@123'
    },
    {
        id: 2,
        name: 'Ajay',
        email: 'ajay@gmail.com',
        role: 'user',
        password: 'Abc@123'
    },
    {
        id: 3,
        name: 'komal',
        email: 'komal@gmail.com',
        role: 'admin',
        password: 'Abc@123'
    },
    {
        id: 4,
        name: 'manish',
        email: 'manish@gmail.com',
        role: 'user',
        password: 'Abc@123'
    }
]

function formSubmission(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // if (e.target.name.value === "" || e.target.name.value === null) {
    //     alert("Please enter a name");
    // }s
    if (e.target.email.value === "" || e.target.email.value === null) {
        alert("Please enter a valid email id");
    }
    // else if (e.target.role.value === "" || e.target.role.value === null) {
    //     alert("Please enter a valid password");
    // }
    else if (e.target.password.value === "" || e.target.password.value === null) {
        alert("Please enter a valid password");
    }

    else {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].email === email) {
                if(userData[i].password === password) {
                    localStorage.setItem("loggedInUser", email);
                    if(userData[i].role === "admin"){
                        // localStorage.setItem("loggedInUser", email);
                        console.log(userData[i].role);
                        window.location.href = "../html/admin.html"
                    }
                    else{
                        window.location.href = "../html/product.html"
                    }
                }
                else {
                    alert("please check yoour password")
                }
                break;
            }
            if (i === userData.length - 1) {
                console.log("User not found");
            }
        }

        // if (userData.some((ele) => ele.email === email)) {
        //     // alert("user found")
        //     if (userData.some((ele) => ele.password === password)) {
        //         console.log("PASSWORD MATCHED");
        //         // window.location.href = "../html/product.html"
        //         localStorage.setItem("loggedInUser", email);
        //         if(userData.some((ele) => ele.role === "admin")){
        //             window.location.href = "../html/admin.html"
        //         }
        //         else{
        //             window.location.href = "../html/product.html"
        //         }
        //     }
        //     else{
        //         alert("please check yoour password")
        //     }

        // }
        // else {
        //     console.log("Email not found, please check your email");
        // }
    }

}





