const tablazatHelyeX = 20
const tablazatHelyeY = 100;

function letrehoz(){
    sorokSzama = document.getElementById("SliSorokSzama").value;
    szelesseg = document.getElementById("SliSzelesseg").value;
    tablazat = document.getElementById("tabla");

    paros = false;
    
    while(tablazat.hasChildNodes()){
        tablazat.removeChild(tablazat.firstChild);
    }

    for (let indexX = 0; indexX < sorokSzama; indexX++) {
        if(indexX%2==0){
            paros = true;
        }
        else{
            paros = false;
        }
        for (let indexY = 0; indexY < sorokSzama; indexY++) {
            let elem = document.createElement("div");

            if (paros) {
                elem.classList.add("mezoParos");
                elem.onclick = function(){
                    document.querySelectorAll(".mezoParos").forEach(element => {
                        element.style.backgroundColor = "green";
                    });
                }
                paros = false;
            }
            else{
                elem.classList.add("mezoParatlan");
                elem.onclick = function(){
                    element.style.backgroundColor = "blue";
                }
                paros = true;
            }
            
            elem.style.width = szelesseg + "px";
            elem.style.height = szelesseg + "px";
            elem.style.position = "absolute";
            elem.style.top = tablazatHelyeY + indexY * szelesseg + "px";
            elem.style.left = tablazatHelyeX + indexX * szelesseg + "px";
            tablazat.appendChild(elem);
        }
        
    }
}