//document.write("<table>");
document.write("<div class='table'>")

for(let filas = 0; filas < 8; filas++){
    //document.write("<tr>");
    for(let columnas = 0; columnas < 8; columnas++){
        //document.write("<td></td>");
        if((filas+columnas)%2==0){
            document.write(`<div class='white' id='${columnas}:${filas}'></div>`);
        } else {
            document.write(`<div class='black' id='${columnas}:${filas}'></div>`)
        }

        if(filas == 0){
            switch(columnas){
                case 0:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BT</span>";
                    break;
                case 1:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BC</span>";
                    break;
                case 2:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BA</span>";
                    break;
                case 3:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BM</span>";
                    break;
                case 4:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BR</span>";
                    break;
                case 5:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BA</span>";
                    break;
                case 6:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BC</span>";
                    break;
                case 7:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BT</span>";
                    break;
            }
        } else if(filas == 7){
            switch(columnas){
                case 0:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WT</span>";
                    break;
                case 1:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WC</span>";
                    break;
                case 2:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WA</span>";
                    break;
                case 3:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WR</span>";
                    break;
                case 4:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WR</span>";
                    break;
                case 5:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WA</span>";
                    break;
                case 6:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WC</span>";
                    break;
                case 7:
                    document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WT</span>";
            }
        }
    
        if(filas == 1){
            document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='BP'>BP</span>";
        } else if(filas == 6){
            document.getElementById(`${columnas}:${filas}`).innerHTML = "<span class='WP'>WP</span>";
        }
    }
    
    
    //document.write("</tr>");
}

document.write("</div>")
//document.write("</table>");