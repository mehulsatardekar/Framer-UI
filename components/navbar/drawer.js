const menuIcon = document.querySelector('#menu');
const closeIcon = document.querySelector('#close')
const sidebarMenu = document.querySelector('#sidebar-menu');

menuIcon.addEventListener('click',()=>{
    sidebarMenu.classList.remove('hide')
    sidebarMenu.classList.toggle('sidebar-menu-width');
})

closeIcon.addEventListener('click',()=>{
    sidebarMenu.classList.toggle('hide')
    sidebarMenu.classList.remove('sidebar-menu-width')
})