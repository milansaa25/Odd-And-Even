document.getElementById("click").addEventListener("click", function(){
    var num = document.getElementById("numb").value;
    if (num % 2==0){
        alert("The number " + num + " is Even");
     }
     else{
        alert("The number " + num +  " is Odd");

     }
    });