//test
console.log("Hello");

//create const with all shortcuts

let classOne = document.querySelectorAll(".shortcuts");
console.log(classOne);


//create a function when we click open directly site


    for(i = 0; i < classOne.length ; i++){

      if( i == 0){
         
         classOne[0].addEventListener("click" , function a(){
            window.open("https://www.facebook.com/");
         })
        
      }else if(i == 1) {
         classOne[1].addEventListener("click" , function b(){
            window.open("https://www.youtube.com/");
         })
      }else if(i == 2){
         classOne[2].addEventListener("click" , function c(){
            window.open("https://www.w3schools.com/");
         })
      }else if(i == 3){
         classOne[3].addEventListener("click" , function d(){
            window.open("https://github.com/");
         })
      }else if( i == 4){
         classOne[4].addEventListener("click" , function e(){
            window.open("https://www.amazon.com/");
         })
      }else if(i == 5){
         classOne[5].addEventListener("click" , function f(){
            window.open("https://www.emag.ro/");
         })
      } else {
         "";
      }
      

      }
    






