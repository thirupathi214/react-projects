function validation() {
    var usrnm = document.getElementById("user").value
    var pwd = document.getElementById("password").value

    // document.write(usrnm)
    // document.write("<br>" + pwd)

    if (usrnm == "santhosh" && pwd == "San@123") {
        // alert("Correct Credentials")
        document.write("valid")
    }

    else {
        alert("invalid cred")
    }

}