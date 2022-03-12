startButton.addEventListener("click", activeGame);
document.addEventListener("keydown", function(event){
    
   switch (event.key) {
        case('a'): {
            player.directionX = "w";
            break;
        }
        case('d'): {
            player.directionX = "e";
            break;
        }
        case('s'): {
            player.directionY = "s";
            break;
        }
        case('w'): {
            player.directionY = "n";
            break;
        }
    }
    
    
})
document.addEventListener("keyup", function(event){
    
    switch (event.key) {
         case('a'): {
             if(player.directionX === "w") {
                 player.directionX = 0
             }
             break;
         }
         case('d'): {
             if(player.directionX === "e"){
                 player.directionX = 0;
             };
             break;
         }
         case('s'): {
             if(player.directionY === "s"){
                 player.directionY = 0;
             };
             break;
         }
         case('w'): {
            if(player.directionY === "n") {
                player.directionY = 0;
            };
            break;
         }
     }
     
     
 })