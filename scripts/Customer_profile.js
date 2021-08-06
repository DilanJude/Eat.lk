function CreateProfile(){
    let userdata =
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        dob: document.getElementById("DOB").value,
        address: document.getElementById("address").value,
        number: document.getElementById("number").value,
        gender: document.getElementById("gender").value
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8085/api/createprofile",
        headers:
        {
            "Content-Type" : "application/json"
        },
        data: JSON.stringify(userdata),
        success: function(response){
            alert("Your profile has been created")
        },
        error: function(error){
            console.log(error);
            alert("An error has occured while creating your profile")
        }
    })
}




function loadprofile(){
    let useremail = sessionStorage.getItem("currentuser");

    $.ajax({
        type: "GET",
        url: "http://localhost:8085/api/getprofile/" + useremail,
        headers:
        {
            "Content-Type" : "application/json"
        },
        success:function(response){

            if(response.email == null){

                document.getElementById("name").innerHTML = "Please create your profile";

            }
            else{

                document.getElementById("name").innerHTML = response.name;
                document.getElementById("email").innerHTML = response.email;
                document.getElementById("address").innerHTML = response.address;
                document.getElementById("dob").innerHTML = response.dob;
                document.getElementById("gender").innerHTML = response.gender;
                document.getElementById("number").innerHTML = response.number;

                if(response.gender == "Male"){
                    document.getElementById("usertype").src = "../images/maleuser.png";
                }
                else{
                    document.getElementById("usertype").src = "../images/femaleuser.jpg";
                }
            }
        },
        error: function(error){
            console.log(error);
            alert("something went wrong when loading your profile")
        }

    })
}