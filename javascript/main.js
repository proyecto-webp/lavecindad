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

    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
                 nav = document.getElementById(navId)
        
        
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
            })
    }
    showMenu('menu-principal-toggle', 'nav-principal');
});






