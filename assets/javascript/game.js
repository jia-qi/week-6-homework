<script type="text/javascript">


//global variables, keeping track of wins/losses
var wins = 0;
var losses = 0;
    
// players current score
var current = 0;
    
//selects a random number from 19 to 120
//NEED EXPLANATION???!!!!!
//Math.floor((Math.random()*120)+19) also generates above 120
var total = Math.floor((Math.random()*120)+19);

// assign random value to crystals from 1-12
var blue= Math.floor((Math.random()*12)+1);
var yellow= Math.floor((Math.random()*12)+1);
var green= Math.floor((Math.random()*12)+1);
var purple = Math.floor((Math.random()*12)+1); 
    
    

    
//update the current score in html
  
var newCurrent = function (){
    $('current').empty();
    $('.current').append(current);
    $('#wins').empty();
    $('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
    
    
    
    
    
    
    
}
    
    
    
//3 restart function
var restart = function(){
    addition = 0;
    total=Math.floor((Math.random()* 120) +19);
    
}

$('.total').empty();
	$('.total').append(total);

	blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
    updateAddition();
}

//4 

var method = function() {
    if ()
}


//5 function on click
  $('#blue').click(function(){
      newScore=newScore + blue;
      
  })
  
  $(document).ready(function(){
	$('#blue').click(function(){
		addition = addition + red;
		method();
	})
	$('#green').click(function(){
		addition = addition + blue;
		method();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		method();
	})
	$('#purple').click(function(){
		addition = addition + green;
		method();
	})
});


</script>