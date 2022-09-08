var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth - 600;
var height = window.innerHeight;
var scale = 15;

canvas.width = width;
canvas.height = height;

var bgColor = "#F9f9f9";
var axiColor = "#000";
var gridColor = "#200";


var pixel = {
    x: 0,
    y: 0,
};

var pixelOrigin = {
    x: width / 2 - pixel.x,
    y: height / 2 - pixel.y,
}

var point = {
    x: pixelOrigin.x + scale,
    y: pixelOrigin.x + scale,
}

function drawXAxis(){   //draw axis X
    ctx.beginPath();
    ctx.moveTo(0, pixelOrigin.y);
    ctx.lineTo(width, pixelOrigin.y);
    ctx.strokeStyle = axiColor;
    ctx.lineWidth = 3;
    ctx.stroke();
};

function drawYAxis(){   //draw axis Y
    ctx.beginPath();
    ctx.moveTo(pixelOrigin.x, 0);
    ctx.lineTo(pixelOrigin.x, height);
    ctx.strokeStyle = axiColor;
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawLine(){   //draw axis Y
    ctx.beginPath();
    ctx.moveTo(height, 0);
    ctx.lineTo(width, pixelOrigin.x);
    ctx.strokeStyle = axiColor;
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawGrid(){ //draw square grid X, Y coordinates
    ctx.strokeStyle = gridColor;
    ctx.fillStyle = "#000";
    let leftBorder = Math.floor( - (width / 2 - pixel.x) / scale );
    let rightBorder = Math.ceil((width / 2 + pixel.x) / scale );
    let topBorder = Math.floor( - (width / 2 - pixel.y) / scale );
    let bottomBorder = Math.ceil((width / 2 - pixel.y) / scale );

    for(var x = leftBorder; x <= rightBorder; x++) {
        var px = pixelOrigin.x + scale * x;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, height);
        ctx.lineWidth = 0.40;
        ctx.stroke();
        if(x !== 0 && x % 2 === 0) {
            ctx.fillText(x.toString(), px, pixelOrigin.y);
        }
    }

    for (var y = topBorder; y <= bottomBorder; y++) {
        var py = pixelOrigin.y + scale * y;
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
        ctx.lineWidth = 0.40;
        ctx.stroke();
        if (y !== 0 && y % 2 === 0) {
            ctx.fillText((-y).toString(), pixelOrigin.x, py);
        }
    }

}

window.onresize = function (){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

canvas.onwheel = function (event) {
    var beforeOffsetX = pixel.x;
    var beforeOffsetY = pixel.y;
    var beforeOffsetXCart = pixel.x / scale;
    var beforeOffsetYCart = pixel.y / scale;
    scale -= event.deltaY * scale / 2500;
    pixel.x = beforeOffsetXCart * scale;
    pixel.y = beforeOffsetYCart * scale;
    if (scale < 8) {
        scale = 8;
        pixel.x = beforeOffsetX;
        pixel.y = beforeOffsetY;
    }
};

{
    var drag_1 = false;
    var mouseX_1 = 0;
    var mouseY_1 = 0;
    canvas.onmousedown = function (event) {
        drag_1 = true;
        mouseX_1 = event.clientX + pixel.x;
        mouseY_1 = event.clientY + pixel.y;
    };
    canvas.onmousemove = function (event) {
        var currentMouseX = event.clientX;
        var currentMouseY = event.clientY;
        if (drag_1) {
            pixel.x = mouseX_1 - currentMouseX;
            pixel.y = mouseY_1 - currentMouseY;
        }
    };
    canvas.onmouseup = function (event) {
        drag_1 = false;
    };
}
//

// function pontoMedio(a, b){
//     pixelOrigin.x = a;
//     pixel.y = b;
// }

function pontoMedio(pixel1, pixel2){
    let pixelX = {
        x: 0,
        y: 0,
    };
    
    pixelX.x = (pixel1.x + pixel2.x) / 2;
    pixelX.y = (pixel1.y + pixel2.y) / 2;

    return pixelX;
}

function CriarNovaReta(pixel1, pixel2){

    let reta2 = {
        m: 0,
        k: 0,
    };

    reta2.m = (pixel1.y - pixel2.y) / (pixel1.x - pixel2.x);
    reta2.k = pixel1.y - (reta2.m * pixel1.x);
    console.log("X", reta2.m, reta2.k);
    return reta2;
}

function perpenducular(reta, pixel1){

    let retaX = {
        m: 0,
        k: 0,
    };

    retaX.m = -1/reta.m;
    retaX.k = pixel1.y - (retaX.m * pixel1.x);

    return retaX;
}

function novoPonto(reta, value){
    let pontoX = {
        x: 0,
        y: 0,
    };

    pontoX.x = value;
    pontoX.y = (reta.m * pontoX.x) + reta.k;

    return pontoX;
}

function interseccao(md1, md2) {
    
    let a = {
        x: 0,
        y: 0,
    };  

    a.x = (md2.k - md1.k) / (md1.m - md2.m);
    a.y = (md1.m * a.x) + md1.k;

    return a;
}

function raio(circurferencia, pixel1){
    let raio;

    let pointY = {
        x: 0,
        y: 0,
    };

    pointY.x = pixel1.x - circurferencia.centro.x;
    pointY.y = pixel1.y - circurferencia.centro.y;
    let num1;
    let num2;
    num1 = pointY.x * pointY.x;
    num2 = pointY.y * pointY.y;

    raio = Math.sqrt((num1) + (num2));

    return raio;
}


let pixel1 = {
    x: -12,
    y: -9,
};

let pixel2 = {
    x: 15,
    y: 15,
};

let reta3 = {
    m: 0,
    k: 0,
};
let reta = {
    m: 17,
    k: 20,
};
function segment(reta, pixel1, pixel2) {
    
    let rp = {
        m: 0,
        k: 0,
    }
    rp = perpenducular(reta, pixel1);
    console.log(rp.m, rp.k);
    ctx.beginPath();
    
    let init = pixelOrigin.x + scale * 10;
    let final = pixelOrigin.y + scale * 10;

    ctx.strokeStyle = "#929";

    ctx.moveTo(pixelOrigin.x, pixelOrigin.y);//saindo da origem
    ctx.lineWidth = 2;
    ctx.lineTo(init, final);
    //ctx.arc(init, final, 1, 0, Math.PI*2); //marcando um ponto no gráfico
    ctx.stroke();
}

function drawCircle(i){ // pontos definidos com pixelOrigin.x(ou y) + scale * (ponto da coordanada X ou Y);
    
    

    let pixel3 = {
        x: 0,
        y: 0,
    };

    let md1 = {
        m: 0,
        k: 0,
    };

    let md2 = {
        m: 0,
        k: 0,
    };

    let circurferencia = {
        centro: {
            x: 0,
            y: 0,
        },
        raio:   0,
    }
    let value = i;
    
    pixel3 = novoPonto(reta, value);
    // console.log(pixel3.x);
    // console.log(pixel3.y);

    let pixel4 = {
        x: 0,
        y: 0,
    };
    
    pixel4 = pontoMedio(pixel1, pixel3);

    // console.log("ponto4Medio.x: ", pixel4.x);
    // console.log("ponto4Medio.y: ", pixel4.y);

    md1 = perpenducular(CriarNovaReta(pixel1, pixel2), pontoMedio(pixel1, pixel2));
    md2 = perpenducular(CriarNovaReta(pixel1, pixel3), pontoMedio(pixel1, pixel3));

    // console.log("Md1.m: ", md1.m);
    // console.log("Md1.k: ", md1.k);

    // console.log("Md2.m: ", md2.m);
    // console.log("Md2.k: ",md2.k);

    
    circurferencia.centro = interseccao(md1, md2);
    circurferencia.raio = raio(circurferencia, pixel1);
    
    let x = pixelOrigin.x + scale * 2;
    let y = pixelOrigin.y + scale * -2;


    // console.log(Number(circurferencia.centro.x));
    // console.log(circurferencia.centro.y);
    // console.log(circurferencia.raio);
    
    ctx.beginPath();
    ctx.arc(pixelOrigin.x + scale * circurferencia.centro.x, pixelOrigin.x + scale * -circurferencia.centro.y, circurferencia.raio, 0, Math.PI*2); 
    // ctx.moveTo(pixelOrigin.x + scale * circurferencia.centro.x, pixelOrigin.y + scale * -circurferencia.centro.y);
    // ctx.lineTo(pixelOrigin.x + scale + md1.k, pixelOrigin.y + scale + md1.m);
    ctx.lineWidth = 2%scale;
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = scale;
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
}


function draw(){    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    //grid and background
    drawXAxis();
    drawYAxis();
    drawGrid();
    drawLine();

    //test

    for(i = -0.9; i < 599.9; i += 0.1){
        drawCircle(i);
    }

    //segment(reta, pixel1);
};



if(canvas.getContext){
    draw();
    requestAnimationFrame(drawScreen);

} else{
    console.log('Canvas is not available for this browser');
}