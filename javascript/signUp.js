function formSubmission(e) {
  e.preventDefault();

  let username = document.getElementById("userName").value;
  let useremail = document.getElementById("userEmail").value;
  let roleofperson = document.getElementById("userRole").value;
  let userpassword = document.getElementById("userPassword").value;

  const userdata = {
    name: username,
    email: useremail,
    role: roleofperson,
    password: userpassword
  }

  // check if the localStorage already has some data
  if (localStorage.getItem('userdata') === null) {
    let userData = []; // empty array
    // push new data

    userData.push(userdata);
    // set to localStorage
    localStorage.setItem('userdata', JSON.stringify(userData));
    window.location.href = "../html/user-login.html"

  } else {
    // get existing data from localStorage
    let userData = JSON.parse(localStorage.getItem('userdata'));

    if(userData.some((ele) => ele.email === useremail)){
      alert("Email Already Exist")
    }
    else{
      userData.push(userdata);
        localStorage.setItem('userdata', JSON.stringify(userData));
        window.location.href = "../html/user-login.html"
    }

    // push new data
    // userData.push(userdata);
    // reset localStorage
    // localStorage.setItem('userdata', JSON.stringify(userData));

    // alert("submitted successfully")
    // window.location.href = "../html/user-login.html"
  }

}

