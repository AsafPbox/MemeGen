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

function getImg(imgId){
    return gImgs.find(img => imgId === img.id);
}