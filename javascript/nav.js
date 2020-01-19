const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)
    
    
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
}
showMenu('menu-principal-toggle', 'nav-principal');