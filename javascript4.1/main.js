document.getElementById("delivery").onclick = function () {

    let location = document.getElementById("location").value;
    let charges;

    if(location == "Mombasa") {
        
        charges = 500;

        let total = charges * 1;

        document.getElementById("display").innerText = "Ksh" + charges;
        
        
    }
    else if(location == "Nairobi") {

        charges = 200;
        
        let total = charges * 1;

         document.getElementById("display").innerText = "Ksh" + charges;
    }

     else if(location == "Nakuru") {

        charges = 280;
        
        let total = charges * 1;

         document.getElementById("display").innerText = "Ksh" + charges;
    }

     else if(location == "Kisii") {

        charges = 400;
        
        let total = charges * 1;

         document.getElementById("display").innerText = "Ksh" + charges;
    }
}