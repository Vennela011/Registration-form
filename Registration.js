function validation() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var mobile = document.getElementById("mobile").value;

    if (name == null || name == "") {
        alert("Please enter the name.");
        return false;
    }


    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }


    if (email == null || email == "") {
        alert("Please enter the email.");
        return false;
    }


    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }


    if (password1 == null || password1 == "") {
        alert("Please enter the confrim password.");
        return false;
    }


    if (password != password1) {
        alert("password doen't matched.");
        return false;
    }


    if (mobile == null || mobile == "") {
        alert("Please enter the mobile number.");
        return false;
    }


    alert("Thank you for Registering");

}
