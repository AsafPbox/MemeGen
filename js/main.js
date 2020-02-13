'use strict;'

// default values :

var gDefaultFontSize = 40;
var gDefaultUpperLinePos = { posX: 50, posY: 50 };
var gDefaultLowerLinePos = { posX: 50, posY: 500 };

// 

var gCanvas;
var gCtx;
var gImg;

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: gDefaultFontSize,
            align: '',
            color: ''
        },
        {
            txt: '',
            size: gDefaultFontSize,
            align: '',
            color: ''
        }
    ]
};

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function showGen(elImg) {
    var memeImg = elImg;
    gMeme.selectedImgId = memeImg.src.split('/')[4].split('.')[0] // need regex
    document.querySelector('.image-gallery').style.display = 'none'
    document.querySelector('.MemeGen').style.display = 'block';
    drawImg(elImg.src)
    writeLine()
}

function drawImg(source) {
    gImg = new Image()
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    }
    gImg.src = source;
}

function drawText(text, x, y) {
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font =  gDefaultFontSize.toString() + 'px impact'
    // gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function writeLine() {
    document.querySelector('#topline').addEventListener('keyup', function () {
        if (gMeme.selectedLineIdx === 0) {
            gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
            gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
            drawText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY)
            gMeme.lines[0].txt = this.value;
            gCtx.fillText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY);
        } else if (gMeme.selectedLineIdx === 1) {
            gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
            gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
            drawText(gMeme.lines[0].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY)
            gMeme.lines[0].txt = this.value;
            gCtx.fillText(gMeme.lines[1].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY);
        }
    });
}

function switchLine() {
    document.querySelector('#topline').value = ''
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1;
        drawImg(gCanvas.toDataURL());
    }
    else {
        gMeme.selectedLineIdx = 0;
        drawImg(gCanvas.toDataURL());
    }
    console.log('Working on line :', gMeme.selectedLineIdx);
}

function getCurrentLine() {
    return gMeme.selectedLineIdx
}


// need to combine both function to one 
function moveLineUp() {
    if (getCurrentLine() === 0){
        console.log(gDefaultUpperLinePos.posY)
        if (gDefaultUpperLinePos.posY <= 35) return
        gDefaultUpperLinePos.posY -= 5;
    }
    else if (getCurrentLine() === 1){
        if (gDefaultLowerLinePos.posY <= 35) return;
        gDefaultLowerLinePos.posY -= 5;
    }
}
function moveLineDown() {
    if (getCurrentLine() === 0){
        console.log(gDefaultUpperLinePos.posY)
        if (gDefaultUpperLinePos.posY === 495) return;
        gDefaultUpperLinePos.posY += 5;
    }
    else if (getCurrentLine() === 1){
        if (gDefaultLowerLinePos.posY === 495) return;
        gDefaultLowerLinePos.posY += 5;
    }
}

function increaseFontSize() {
    if (gDefaultFontSize === 55) return;
    gDefaultFontSize += 5;
    console.log(gDefaultFontSize)
}

function decreaseFontSize() {
    if (gDefaultFontSize === 35) return;
    gDefaultFontSize -= 5;
    console.log(gDefaultFontSize)
}






// TRASH //

// function writeLine() {
//     document.querySelector('#topline').addEventListener('keyup', function () {
//         if (gMeme.selectedLineIdx === 0) {
//             var inputTxt = this.value;
//             gMeme.lines[0].txt = inputTxt;
//             drawText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY);
//             var source = gCanvas.toDataURL()
//             gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//             drawImg(source);
//         } else if (gMeme.selectedLineIdx === 1) {
//             var inputTxt = this.value;
//             gMeme.lines[1].txt = inputTxt;
//             drawText(gMeme.lines[1].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY);
//             var source = gCanvas.toDataURL()
//             gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//             drawImg(source);
//         }
//     });
// }

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