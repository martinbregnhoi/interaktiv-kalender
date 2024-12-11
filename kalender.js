document.addEventListener("DOMContentLoaded", runProgram);

async function runProgram() {
    let selected;
  

    
    // 1. Load svg map
    //------------------------------------------------------------------------------------	

    let rawSvg = await fetch('kalender.svg');
    let svg = await rawSvg.text();

    document.querySelector("#kalender").innerHTML = svg;

  
    // 2. gør låge klikbar
    //------------------------------------------------------------------------
    document.querySelector('#kalender #laager').addEventListener("click", function (e) {
        clicked(e);
    });

    // 3. Skjul låger og vis indhold
    //-------------------------------------------------------------------------
    function clicked(obj) {

        // a. find det klikkede element
        //----------------------------------------------
        selected = obj.target;
        
        
        // b. skjul låge
        //----------------------------------------------
        selected.parentElement.style.display = "none";
    }

    // runProgram end      
};
