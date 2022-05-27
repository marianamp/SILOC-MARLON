var canvas = document.getElementById("meu_canvas");
var ctx = canvas.getContext("2d");

function make_geladeira(row,column){
    canvas.hidden = "";
    var x = 0;
    var y = 0;
    canvas.height = 600;
    for(var i=1;i<=column;i++){       
        for(var j=1;j<=row;j++){  
            ctx.rect(20+x, 20+y, 130, 80);
            ctx.fill(); 
            
            ctx.fillStyle = "gray"; 
            console.log("x="+ x + "e y=" + y );  
            x += 170;                          
        } 
        y += 140;  
        x = 0;     
    }   
}

function open_necroterio(){
    canvas.width = 1200;
    make_geladeira(7,3);
}

function open_patio(){
    canvas.width = 500;
    make_geladeira(3,2);
}
function open_corredor(){
    canvas.width = 1550;
    make_geladeira(9,2);
}
