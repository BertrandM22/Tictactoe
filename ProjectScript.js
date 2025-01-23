
    document.querySelectorAll(".cell").forEach((elem) => {
        elem.addEventListener("click", XOrO);
    });


    let isPlayerTurn = true;

    let victoire = false;

    let gagnant = document.getElementById("nameJ1");
    let gagnant2= document.getElementById("nameJ2")


    function XOrO(event) {
        if (isPlayerTurn) {
            event.target.innerText = "X";
            VicCondition();
            console.log("Joueur 1");
        } else {
            event.target.innerText = "O";
            VicCondition();
            console.log("joueur 2");
        }
        
    
        isPlayerTurn = !isPlayerTurn;
    
        function VicCondition() {
            if (
                (C1.innerText === "X" && C2.innerText === "X" && C3.innerText === "X") 
                ||
                (C1.innerText === "X" && C4.innerText === "X" && C7.innerText === "X") 
                ||

                (C1.innerText === "X" && C5.innerText === "X" && C9.innerText === "X") 
                ||
                (C2.innerText === "X" && C5.innerText === "X" && C8.innerText === "X")
                 ||

                (C3.innerText === "X" && C6.innerText === "X" && C9.innerText === "X") 
                ||
                (C3.innerText === "X" && C5.innerText === "X" && C7.innerText === "X") 
                ||

                (C4.innerText === "X" && C5.innerText === "X" && C6.innerText === "X")
                 ||
                (C7.innerText === "X" && C8.innerText === "X" && C9.innerText === "X")
            ) {
                console.log("C'est une victoire pour le Joueur 1 !");
                gagnant.innerText='Bravo aux X !'
                victoire = true 
            
            
            }  
                else if (

                (C1.innerText === "O" && C2.innerText === "O" && C3.innerText === "O") 
                ||
                (C1.innerText === "O" && C4.innerText === "O" && C7.innerText === "O")
                 ||

                (C1.innerText === "O" && C5.innerText === "O" && C9.innerText === "O") 
                ||
                (C2.innerText === "O" && C5.innerText === "O" && C8.innerText === "O") 
                ||

                (C3.innerText === "O" && C6.innerText === "O" && C9.innerText === "O")
                 ||
                (C3.innerText === "O" && C5.innerText === "O" && C7.innerText === "O") 
                ||

                (C4.innerText === "O" && C5.innerText === "O" && C6.innerText === "O") 
                ||
                (C7.innerText === "O" && C8.innerText === "O" && C9.innerText === "O")
            ) 
            {
                console.log("C'est une victoire pour le Joureur 2 !");
                gagnant2.innerText='Bravo  aux O ! '
                victoire = true;
            }
        }
    
        if (victoire) {
            stopClick();
        }
    }
     
    
    function stopClick() {
        document.querySelectorAll(".cell").forEach((elem) => {
            elem.removeEventListener("click", XOrO);
        });
    }
    
    // document.querySelectorAll(".DcAll2").forEach((elem) => {
    //     elem.addEventListener("click", () => {
    //         console.log('Est-ce bon ?');
    //     });
    // });
    
    // document.querySelectorAll(".DcAll3").forEach((elem) => {
    //     elem.addEventListener("click", () => {
    //         console.log('Est-ce bon ?');
    //     });
    // });
    