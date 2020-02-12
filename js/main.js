'use strict;'

var gCanvas;
var gCtx;
var gCurrentImg;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg();
    // getTopLine()
}

function drawImg() {
    var img = new Image()
    img.src = getImg(1).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.textAlign = 'center'
    gCtx.font = '50px impact';
    gCtx.fillText(text, x, y);
}

function draw() {
    drawText(getLine(), 275, 50);
}

function topLine() {
    document.querySelector('#topline').addEventListener('keyup', function() {
      gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
      console.log('Newimage')
      drawImg()
      console.log(this.value)
      drawText(this.value, 270, 50)
    //   console.log(elInput.value)
    //   ctx.fillText(text_title, 50, 50);
    });
  }













// TRASH //

// function getTopLine(){
//     var elInput = document.querySelector('#topline');
//     var txt = elInput.value;
    
    
//     elInput.addEventListener('input', function(event) {
//         // event.stopPropagation();
//         function drawImg() {
//             var img = new Image()
//             img.src = getImg(1).url
//             img.onload = () => {
//                 gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//             }
//         }
//         drawImg();
//         // console.log(document.querySelector('#topline').value)
//         drawText(elInput.value, 275, 50)
//     });
// }

    // elInput.onkeyup = function () {
        
    //     drawText(elInput.value, 275, 50);
    // }
// function clearCanvas() {
//     gCtx.clearRect(0, 0, gCan, gCanvas.height)
// }