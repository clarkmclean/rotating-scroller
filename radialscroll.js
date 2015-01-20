$(function(){
var s = skrollr.init([
    forceHeight=true
]);
// for this example we are using p elements as blocks, we will probably have them assign a class
var $block = $('p');

var rotation = 0;
var location = 0
var circumference = 0;
var radius;
var maxheight = 0;
var pageheight = 0;
var pagewidth = 0;
var blockCount = 0;
var angle = 0;

var blockWidth = $block.width();
pageheight = $(window).height();
pagewidth = $(window).width();
//pageheight = 100;

$block.each(function () {
    var height = $(this).height();
    circumference += pageheight;
    if (height > maxheight) {
        maxheight = height;
    }
    $(this).css({
        'margin-top' : (pageheight - height)/2 + 'px',
        'margin-bottom' : (pageheight - height)/2 + 'px'
    });
    blockCount++;
});

// first find a radius for the circumference
radius = circumference / (2 * 3.14159);

$('#originContainer').css({
    'left' : (-Math.abs(radius)+pagewidth/2-$block.width()/2) + 'px',
    'width' : blockWidth + 'px',
    'height' : pageheight + 'px'
});
angle = 360/blockCount;
var rotate = 0;
console.log('angle' + angle);
for (i = 0; i < blockCount; i++) {
    $('p:eq(' + i + ')').css({
        'top' : radius * Math.sin(2 * Math.PI * i / blockCount),
        'left' : radius * Math.cos(2 * Math.PI * i / blockCount),
        'transform' : 'rotate(' + rotate + 'deg)'
    });
    rotate = rotate+angle;
}
});