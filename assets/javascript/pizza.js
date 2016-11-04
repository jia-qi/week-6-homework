<script type="text/javascript">


  $('button').on('click',function(){
        var pizza =$(this).data('pizza');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + pizza + "&api_key=dc6zaTOxFJmzC&limit=10";
        
        
    $.ajax({
        url:queryURL,
        method:'GET'
      })
    
    .done(function(response){
        console.log(queryURL);
        console.log(response)
        var results = response.date;
        for(var i = 0; i< results.length;i++){
            
            var pizzaDiv = $('<div>');
            
            var pizzaImage = $('<img>');
                    pizzaImage.attr('src', results[i].images.fixed_height.url);

                    pizzaDiv.append(p);
                    pizzaDiv.append(animalImage);

                    $('#gifsAppearHere').prepend(pizzaDiv);
            
        }
                    
        })
    
    })


</script>