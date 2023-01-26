const userData = [
    {
        id: 1,
        name: 'Ashish',
        email: 'ashish@gmail.com',
        role: 'user',
        password: 'Abc@123'
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
        role: 'user',
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
    // }
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
        if (userData.some((ele) => ele.email === email)) {
            // alert("user found")
            if (userData.some((ele) => ele.password === password)) {
                console.log("PASSWORD MATCHED");
                localStorage.setItem("loggedInUser", email);
            }
        }
        else {
            console.log("Email not found, please check your email");
        }
        // const res = emailCheck(email);
        // alert("Form Submitted"+res);
        // console.log("Form Submitted", res)
    }
    
    window.location.href = "../html/product.html"

    // else{
    //     const user = {
    //         name: e.target.name.value,
    //         email:
    //     }
    //     // localStorage.setItem('name', e.target.name.value);
    //     // localStorage.setItem('email', e.target.email.value);
    //     // localStorage.setItem('role', e.target.role.value);
    //     // localStorage.setItem('password', e.target.password.value);
    //     // localStorage.setItem('loggedInUuuuuuuuuuuuuuuuuuuuuuuu')
    //     alert('Your account has been created');
    // }

}

// const emailCheck = (userEmail) => {
//     console.log("UNNDER EMAILCHECK", userEmail)
//     return userData.some((item) => {
//         return item.email === userEmail;
//     })
// }



