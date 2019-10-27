const myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');

function draw4x4() {
    let data_4x4 = [
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ]
    clearCanvas();
    console.log('4x4');
    let row = 128;
    let col = 128;
    for (var i = 0; i < 4; i++) {
        for( var c = 0; c < 4; c++) {
            ctx.fillStyle = `${'#'+data_4x4[i][c]}`;
            ctx.fillRect(row*c, col*i, 128, 128);
        }
    }
}

function clearCanvas() {
    console.log('clear');
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 512, 512);
}

draw4x4();