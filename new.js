
    
    
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
            var head = document.querySelector('.header');
            if (window.pageYOffset > 20) {
                head.style.backgroundColor = '#170b5a';
                head.style.position = 'fixed';
            } else {
                head.style.backgroundColor = '#170b5a89';
                head.style.position = 'absolute';
            }
        });
    });
 
    var slide;
    var slides;
    var index=0;
    function showSlide(index){
        slide.forEach(function(slide){
            slide.style.display='none';
        });
        slide[index].style.display='block';
    }
    function nextSlide(){
        if(index<(slides-1)&&index>=0){
            index+=1;
        };
        showSlide(index);
    }
    function prevSlide(){
        if(index<=(slides-1)&&index>0){
            index-=1;
        };
        showSlide(index);
    }
    document.addEventListener('DOMContentLoaded',function(){
        slide=document.querySelectorAll('.slide');
        slides=slide.length;
        
        showSlide(index);
    });
