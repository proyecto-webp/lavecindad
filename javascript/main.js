document.addEventListener('DOMContentLoaded', () => {

    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, 
        {
        duration: 500
    });


    setInterval(()=>{
        console.log(instance.pressed);
        if(!instance.pressed){
          instance.next();
        }  
      
    },2000);
});
