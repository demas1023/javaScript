document.write("<table>");

for(let filas = 0; filas < 8; filas++){
    document.write("<tr>");
    for(let columnas = 0; columnas < 8; columnas++){
        

        if(filas==0 || filas==7){
            
            switch(columnas){
                case 0:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "T";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>T</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>T</td>`);
                    }
                    break;
                case 1:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "C";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>C</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>C</td>`);
                    }
                    break;
                case 2:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "A";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>A</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>A</td>`);
                    }
                    break;
                case 3:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "M";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>M</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>M</td>`);
                    }
                    break;
                case 4:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "R";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>R</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>R</td>`);
                    }
                    break;
                case 5:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "A";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>A</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>A</td>`);
                    }
                    break;
                case 6:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "C";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>C</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>C</td>`);
                    }
                    break;
                case 7:
                    
                    //document.getElementById(`${columnas}:${filas}`).innerText = "T";
                    if((filas+columnas)%2==0){
                        document.write(`<td class='white' id='${columnas}:${filas}'>T</td>`);
                    } else {
                        document.write(`<td class='black' id='${columnas}:${filas}'>T</td>`);
                    }
                    break;
            }
        } else if(filas==1 || filas==6){
           //document.getElementById(`${columnas}:${filas}`).innerText = "P";
            if((filas+columnas)%2==0){
                document.write(`<td class='white' id='${columnas}:${filas}'>P</td>`);
            } else {
                document.write(`<td class='black' id='${columnas}:${filas}'>P</td>`);
            }
        } else {
            if((filas+columnas)%2==0){
                document.write(`<td class='white' id='${columnas}:${filas}'></td>`);
            } else {
                document.write(`<td class='black' id='${columnas}:${filas}'></td>`);
            }
        }
    }
    
    document.write("</tr>");
}

document.write("</table>");