document.write("<table>");

for(let filas = 0; filas < 8; filas++){
    document.write("<tr>");
    for(let columnas = 0; columnas < 8; columnas++){
        //document.write("<td></td>");
        if((filas+columnas)%2==0){
            document.write("<td class='white'></td>");
        } else {
            document.write("<td class='black'></td>")
        }
    }
    document.write("</tr>");
}

document.write("</table>");