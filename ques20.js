
function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
document.write("Valid email address!");  
}  
else  
{  
document.write("You have entered an invalid email address!");  
}
}

valid_email('abc@example.com');
