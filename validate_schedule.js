function  form_validate(){
    
    var cname = document.getElementById("client_name").value;  
    var dnt = document.getElementById("schedule_dnt").value;
    validate_input(cname);
    validate_date(dnt);

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
function validate_date(data){
    schedule_date = data.split('T');
    console.log("selected date : " +schedule_date);
    var today = new Date().toISOString().slice(0,10);
    //console.log("today date in ISO format...... "+new Date().toISOString())
    var currentTime = new Date().getTimezoneOffset();
    //console.log("today date : "+ today);
    //console.log("current time....."+currentTime);
  
    if(today>schedule_date[0]){
        console.log("inside if.........")
        document.getElementsByClassName("fname")[1].style.display="block";
        document.getElementById("schedule_dnt").classList.add("is-invalid");
    }
    else{
        document.getElementsByClassName("fname")[1].style.display="none";
        document.getElementById("schedule_dnt").classList.remove("is-invalid");

    }
}