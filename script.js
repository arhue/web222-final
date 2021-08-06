function rateCheck() {
    if (document.getElementById('hiring').checked) {
        document.getElementById('rate').style.display = 'block';
    }
    else document.getElementById('rate').style.display = 'none';
}

function validate() {
    var re = /\S+@\S+\.\S+/;
    var postal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if(document.main.Name.value=="") {
        alert( "Please provide your name!" );
        document.main.Name.focus() ;
        return false;
    }
    
    if(!re.test(document.main.Email.value)) {
        alert("Incorrect email format");
        document.main.Email.focus();
        return false;
    }

    if(document.main.Address.value=="") {
        alert( "Please provide your address" );
        document.main.Address.focus() ;
        return false;
    }

    if(document.main.city.value=="") {
        alert( "Please provide your city" );
        document.main.city.focus() ;
        return false;
    }

    if(!postal.test(document.main.Postal.value)) {
        alert("Incorrect Postal code");
        document.main.Postal.focus();
        return false;
    }

    if(document.main.type.value=="hiring" && document.main.rate.value=="") {
        alert("Enter hourly rate!");
        document.main.rate.focus();
        return false;
    }

    if(document.main.type.value=="hiring" && isNaN(document.main.rate.value)) {
        alert("Enter valid hourly rate!");
        document.main.rate.focus();
        return false;
    }

    if(document.main.message.value=="") {
        alert( "Please enter your message" );
        document.main.message.focus() ;
        return false;
    }

    return (true);
}
