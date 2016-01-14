
$(document).ready(function(){
while ($('.container > .grid').size() < 256) {  	//start off with a 16x16 grid.
		$('.container').append('<div class="grid"></div>');
		}
	start();

	$('#clear').click(function(event) { 	//When you click clear it runs the clear function
		event.preventDefault();
		event.stopPropagation();
		clear();
	});

	$('#rainbow').click(function(event) { 	//When you click clear it runs the random function
		event.preventDefault();
		event.stopPropagation();
		rainbow();
	});

});

function start(){

	$('.grid').on('mouseenter', function(){ 		 //Basic drawing functionality
		$(this).addClass('red');   					//When you hover over a grid it turns red.
	});
}

function startRandom (){
	$('.grid').on('mouseenter', function(){
		$(this).css({'background': getRandomColor()})
	});
}

function clear(){

	var numb = prompt("x by x grid", 'x'); 				  //Ask user how many grids theyd like.
	$('.grid').remove();						 		 //Get rid of pre-existing grid.
	makeGrid(numb);                    					//Push that number into makeGrid function
}

function makeGrid(size){

	while ($('.container > .grid').size() < size*size) { //Make a grid with new size
		$('.container').append('<div class="grid"></div>');
		}
	var hw = 720/size;
		$('.grid').css({'width': hw, 'height': hw});

	start();
}

function makeGridRainbow(rsize){

	while ($('.container > .grid').size() < rsize*rsize) { //Make a grid with new size
		$('.container').append('<div class="grid"></div>');
		}
	var hw = 720/rsize;
		$('.grid').css({'width': hw, 'height': hw});

	startRandom();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rainbow(){
	var rnumb = prompt("x by x grid", 'x'); 				  //Ask user how many grids theyd like.
	$('.grid').remove();						 		 //Get rid of pre-existing grid.
	makeGridRainbow(rnumb);  
}


