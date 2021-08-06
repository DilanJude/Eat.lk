var modal = document.getElementById("myModal");

var btn = document.getElementById("verify");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function(){
    console.log("works");
    modal.style.display = "block";
    getUnverified();
}

span.onclick = function(){
    modal.style.display = "none";
}


window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function getUnverified(){

    $.ajax({
        type: "GET",
        url: "http://localhost:8085/api/get/unverified",
        success: function(restaurants){
            document.getElementById("Verify_List").innerHTML = "";

            for(restaurant of restaurants){
                let template = "<li>"+ restaurant.name +" <button onclick='verifyRestaurant(\""+ restaurant.name +"\")'>Verify</button></li>";
                document.getElementById("Verify_List").innerHTML += template;
            }
        },
        error: function(error){
            alert("An error occurred");
        }
    });
}

function verifyRestaurant(name){

    $.ajax({
        type: "PUT",
        url: "http://localhost:8085/api/verify/" + name,
        success: function(status){
            if(status == 1){
                alert("Profile Verified");
                window.location.reload();
            }
            else{
                alert("An error occurred");
            }
        },
        error: function(error){
            alert("An error occurred");
        }
    })
}