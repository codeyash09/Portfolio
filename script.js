var cursor = document.getElementById("cursor");
var title = document.getElementById("title");
var show = false;
var left = 5;
var del = false;
var stall = 0;
var port = 0;
var end = 30;



function blink(){
    if(show){
        cursor.innerHTML = "|<div class='cover'></div>";
    }else{
        cursor.innerHTML = " <div class='cover'></div>";

    }

    show = !show;
}

function wordChange(){
    port++;
    if(port > 7){
        port = 0;
        end = 30;
    }
    if(port == 0){
        end = 30;

        title.innerHTML = "Welcome"
    }
    if(port ==1){
        end = 30;

        title.innerHTML = "I am"

    }
    if(port ==2){
        title.innerHTML = "Yash Patel"

    }
    

    if(port ==3){
        title.innerHTML = "Programmer"

    }
    if(port ==4){
        title.innerHTML = "Game Dev"

    }
    if(port ==5){
        title.innerHTML = "Web Developer"

    }
    if(port ==6){
        
        title.innerHTML = "3D Artist"

    }
    if(port ==7){
        end = 200;
        title.innerHTML = "Animator"

    }
}

setInterval(blink, 800);

function type(){
    cursor.style.left = "" + left + "vw";
    if(!del){
        left += 7;

        if(left > 95){
            left = 95;
            stall ++;
        }

        if(stall > end){
            del = true;
            stall = 0;
        }
    }
    else{
        left -= 7;

        if(left < 5){
            left = 5;
            stall ++;
        }

        if(stall > end){
            wordChange();
            del = false;
            stall = 0;
        }
    }
}


setInterval(type, 50);
