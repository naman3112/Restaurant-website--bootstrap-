
         
    $(document).ready(function(){
        
        $("#butnlog").click(function(){
        
            $("#k").modal('toggle');
            
        })

        $("#btnres").click(function(){
        
        $("#res").modal('toggle');
        
    })

        $("#mycarousel").carousel( { interval: 2000 
            
        })
       
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
              

            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        })

       
    
    });
         