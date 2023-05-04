function  form_validate(){
    
    var cname = document.getElementById("client_name").value;
    var cemail = document.getElementById("client_email").value;  
    var dnt = document.getElementById("schedule_dnt").value;
    console.log("selected date and time : "+dnt);
    validate_input(cname);
    validate_email(cemail);


}

function validate_input(data){
    if(!(/^[A-Za-z]+$/.test(data))){
        document.getElementsByClassName("fname")[0].style.display="block";
        document.getElementById("client_name").classList.add("is-invalid");
    }
    else{
        document.getElementsByClassName("fname")[0].style.display="none";
        document.getElementById("client_name").classList.remove("is-invalid");

    }
}
function validate_email(data){
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))){
        document.getElementsByClassName("fname")[1].style.display="block";
        document.getElementById("client_email").classList.add("is-invalid");
    }
    else{
        document.getElementsByClassName("fname")[1].style.display="none";
        document.getElementById("client_email").classList.remove("is-invalid");

    }
}