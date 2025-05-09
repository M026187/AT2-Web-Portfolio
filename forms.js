function validateForm() {

    const requestor = document.getElementById("requestor").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const request = document.getElementById("request").value;
    const fields = [requestor, email, phone, request];

    const requestorErr = document.getElementById("name-error");
    const emailErr = document.getElementById("address-error");
    const phoneErr = document.getElementById("phone-error");
    const requestErr = document.getElementById("request-error");

    requestorErr.textContent = "";
    emailErr.textContent = "";
    phoneErr.textContent = "";
    requestErr.textContent = "";

    let valid = true;

    // Validate user has not input text containing "<script>"
    for (let field of fields) {
        if (field.toLowerCase().includes("<script>")) {
            alert('Input contains forbidden code');
            return false;
        }
    }

    // Validate requestor input has not been left blank
    if (requestor === "") {
        requestorErr.textContent = "*Please enter your Name";
        valid = false;
    }
    // Validate email input has not been left blank
    if (email === "") {
        emailErr.textContent = "*Please enter your Email Address";
        valid = false;
    }
    // Validate phone input has not been left blank
    if (phone === "") {
        phoneErr.textContent = "*Please enter your Phone Number";
        valid = false;
    }
    // Validate request input has not been left blank
    if (request === "") {
        requestErr.textContent = "*Please enter your Request";
        valid = false;
    }
    // Validate Form is completed and submitted successfully
    if (valid) {
        alert("Form submitted successfully");
        return true;
    }
    else {
        return false;
    }
}
