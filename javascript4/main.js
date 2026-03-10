document.getElementById("checkout").onclick = function () {
    let location = document.getElementById("location").value;
    let number = document.getElementById("number").value;
    let rate;
    let delivery;

    if(location == "nairobi") {
        rate = 28000;
        delivery = 200;

        if(number > 0) {
          let total = number * rate + delivery;


          document.getElementById("display").innerText = "Ksh" + total;
        }
    }
    else if(location == "mombasa") {
            rate = 28000;
            delivery = 500;

            if( number > 0) {
                let total = number * rate + delivery;
                 document.getElementById("display").innerText = "Ksh" + total;
            }

        }

        else if(location == "nakuru") {
            rate = 28000;
            delivery = 280;

            if( number > 0) {
                let total = number * rate + delivery;
                 document.getElementById("display").innerText = "Ksh" + total;
            }

        }

        else if(location == "kisii") {
            rate = 28000;
            delivery = 400;

            if( number > 0) {
                let total = number * rate + delivery;
                 document.getElementById("display").innerText = "Ksh" + total;
            }

        }
}
