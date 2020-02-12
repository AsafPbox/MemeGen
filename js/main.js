'use strict;'

var gCanvas;
var gCtx;
var gCurrentImg = getImg(1).url;

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: '',
            align: '',
            color: ''
        },
        {
            txt: '',
            size: '',
            align: '',
            color: ''
        }
    ]
};

// destroyed something with the new img render

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    // topLine();
}

function showGen() {
    selectedImg = document.querySelector('#img01');
    selectedImg.style.display = 'none'
    drawImg()
    document.querySelector('.MemeGen').style.display = 'block';
}

function drawImg() {
    var img = new Image()
    img.src = './img/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function topLine() {
    document.querySelector('#topline').addEventListener('keyup', function () {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

        if (gMeme.selectedLineIdx === 0) {
            gMeme.lines[0].txt = this.value;
            drawText(this.value, 275, 50)
        } else if (gMeme.selectedLineIdx === 1) {
            gMeme.lines[1].txt = this.value
            drawText(this.value, 275, 500)
        }
    });
}

function changeLine() {
    document.querySelector('#topline').value = ''
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1
    }
    else {
        gMeme.selectedLineIdx = 0
    }
    console.log('Working on line :', gMeme.selectedLineIdx)
}



// function draw() {
//     drawText(getLine(), 275, 50);
// }


// function drawImg() {
//     var img = new Image()
//     gCurrentImg = getImg(1).url
//     img.src = getImg(1).url
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//     }
// }

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