'use strict;'

var gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['funny']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['cute']
    }
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    txt: 'I always eat pizza'
};

function getImg(imgId){
    return gImgs.find(img => imgId === img.id);
}

function getLine(){
    return gMeme.txt
}