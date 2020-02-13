'use strict;'

// default values :

var gDefaultFontSize = 40;
var gDefaultFontSizeUpperLine;
var gDefaultFontSizeLowerLine;
var gDefaultUpperLinePos = { posX: 50, posY: 50 };
var gDefaultLowerLinePos = { posX: 50, posY: 500 };

// 

var gCanvas;
var gCtx;
var gImg;
var gCurrentImgSrc;

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: gDefaultFontSizeUpperLine,
            align: '',
            color: ''
        },
        {
            txt: '',
            size: gDefaultFontSizeLowerLine,
            align: '',
            color: ''
        }
    ]
};

// stuck on second line mix

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function showGen(elImg) {
    var memeImg = elImg;
    gMeme.selectedImgId = memeImg.src.split('/')[4].split('.')[0] // need regex
    gCurrentImgSrc = memeImg.src;
    document.querySelector('.image-gallery').style.display = 'none'
    document.querySelector('.MemeGen').style.display = 'block';
    drawImg(elImg.src)
    writeLine()
}

function drawImg() {
    img = new Image()
    img.src = gCurrentImgSrc;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}

function drawText() {
    // text = gMeme.lines[0].txt
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = gDefaultFontSize.toString() + 'px impact'
    // gCtx.textAlign = 'center'
    gCtx.fillText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY);
    gCtx.strokeText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY);
    gCtx.fillText(gMeme.lines[1].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY)
    gCtx.strokeText(gMeme.lines[1].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY)
}

function writeLine() {
    document.querySelector('#topline').addEventListener('keyup', function () {
        if (gMeme.selectedLineIdx === 0) {
            gMeme.lines[0].txt = this.value;
            drawImg()
        } else if (gMeme.selectedLineIdx === 1) {
            gMeme.lines[1].txt = this.value;
            drawImg()
        }
    });
}

function switchLine() {
    document.querySelector('#topline').value = ''
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1;
        document.querySelector('input').value = gMeme.lines[1].txt;
    }
    else {
        gMeme.selectedLineIdx = 0;
        document.querySelector('input').value = gMeme.lines[0].txt;
    }
    console.log('Working on line :', gMeme.selectedLineIdx);
}

function getCurrentLine() {
    return gMeme.selectedLineIdx
}


// need to combine both function to one 
function moveLineUp() {
    if (getCurrentLine() === 0) {
        console.log(gDefaultUpperLinePos.posY)
        if (gDefaultUpperLinePos.posY <= 35) return
        gDefaultUpperLinePos.posY -= 5;
        drawImg()
    }
    else if (getCurrentLine() === 1) {
        if (gDefaultLowerLinePos.posY <= 35) return;
        gDefaultLowerLinePos.posY -= 5;
        drawImg()
    }
}
function moveLineDown() {
    if (getCurrentLine() === 0) {
        console.log(gDefaultUpperLinePos.posY)
        if (gDefaultUpperLinePos.posY === 495) return;
        gDefaultUpperLinePos.posY += 5;
        drawImg()
    }
    else if (getCurrentLine() === 1) {
        if (gDefaultLowerLinePos.posY === 495) return;
        gDefaultLowerLinePos.posY += 5;
        drawImg()
    }
}

// need to combine both function to one 
function increaseFontSize() {
    if (gDefaultFontSize === 55) return;
    gDefaultFontSize += 5;
    drawImg()
    console.log(gDefaultFontSize)
}
function decreaseFontSize() {
    if (gDefaultFontSize === 35) return;
    gDefaultFontSize -= 5;
    drawImg()
    console.log(gDefaultFontSize)
}

// TRASH


// NEED TO USE FOR DOWNLOAD IMG
// function writeLine() {
//     document.querySelector('#topline').addEventListener('keyup', function () {
//         if (gMeme.selectedLineIdx === 0) {
//             gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//             gCtx.drawImage(gCurrentImgSrc, 0, 0, gCanvas.width, gCanvas.height);
//             drawText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY)
//             gMeme.lines[0].txt = this.value;
//             gCtx.fillText(gMeme.lines[0].txt, gDefaultUpperLinePos.posX, gDefaultUpperLinePos.posY);
//         } else if (gMeme.selectedLineIdx === 1) {
//             gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
//             gCtx.drawImage(gCurrentImgSrc, 0, 0, gCanvas.width, gCanvas.height);
//             drawText(gMeme.lines[0].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY)
//             gMeme.lines[0].txt = this.value;
//             gCtx.fillText(gMeme.lines[1].txt, gDefaultLowerLinePos.posX, gDefaultLowerLinePos.posY);
//         }
//     });
// }