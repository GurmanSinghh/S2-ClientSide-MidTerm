function validity() {
    
    var fn = document.getElementById("fn");
    var ln = document.getElementById("ln");
    var sa = document.getElementById("sa");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");

    var fn1 = document.getElementById("fn1");
    var ln1 = document.getElementById("ln1");
    var sa1 = document.getElementById("sa1");
    var city1 = document.getElementById("city1");
    var state1 = document.getElementById("state1");
    var zip1 = document.getElementById("zip1");
    var phone1 = document.getElementById("phone1");

    if (!fn.checkValidity()) {
        fn.setCustomValidity("First Name is required.");
        fn.reportValidity();
    } else if (!ln.checkValidity()) {
        fn.setCustomValidity(" Last Name is required.");
        fn.reportValidity();
    } else if (!zip.checkValidity()) {
        zip.setCustomValidity("Zip Name must be in a numerical form only.");
        zip.reportValidity();
    }
}

function sameitems() {
    var checkbox = document.getElementById("copy");


    var fn = document.getElementById("fn");
    var ln = document.getElementById("ln");
    var sa = document.getElementById("sa");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");

    var fn1 = document.getElementById("fn1");
    var ln1 = document.getElementById("ln1");
    var sa1 = document.getElementById("sa1");
    var city1 = document.getElementById("city1");
    var state1 = document.getElementById("state1");
    var zip1 = document.getElementById("zip1");
    var phone1 = document.getElementById("phone1");

    if (checkbox.checked == true) {
        
        fn1.value = fn.value;
        ln1.value = ln.value;
        sa1.value = sa.value;
        city1.value = city.value;
        state1.value = state.value;
        zip1.value = zip.value;
        phone1.value = phone.value;
    } else {
        
        fn1.value = "";
        ln1.value = "";
        sa1.value = "";
        city1.value = "";
        state1.value = "";
        zip1.value = "";
        phone1.value = "";
    }
}