$(function () {                             
    $('.menu-link').each(function () {      
        var location = window.location.href 
        var link = this.href                
        var result = location.match(link);  
 
        if(result != null) {                
            $(this).addClass('current');    
        }
    });
});

$(function () {                             
    $('.languages-link').each(function () {      
        var location = window.location.href 
        var link = this.href                
        var result = location.match(link);  
 
        if(result != null) {                
            $(this).addClass('selected');    
        }
    });
});

$(function () {                             
    $('.header-languages__link').each(function () {      
        var location = window.location.href 
        var link = this.href                
        var result = location.match(link);  
 
        if(result != null) {                
            $(this).addClass('chosen');    
        }
    });
});