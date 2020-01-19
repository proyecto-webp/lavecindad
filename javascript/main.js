document.addEventListener('DOMContentLoaded', () => {

    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, 
        {
        duration: 500,
        padding:100,
    });


    setInterval(()=>{
        if(!instance.pressed){
          instance.next();
        }  
      
    },4000);

    
});






