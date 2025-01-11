const sideMenu = document.getElementById('side-menu');
const navbar = document.querySelector('nav');
const navlinks = document.querySelector('nav ul');

const openMenu = () => {
    sideMenu.style.transform = 'translateX(-16rem)';
};
const closeMenu = () => {
    sideMenu.style.transform = 'translateX(16rem)';
};


window.addEventListener('scroll', () => {
    if(scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg','shodow-sm');
        navlinks.classList.remove('bg-white','shodow-lg','bg-opacity-50');
    }
    else{
        navbar.classList.remove('bg-white', 'bg-opacity-50','backdrop-blur-lg','shodow-sm');
        navlinks.classList.add('bg-white','shodow-lg','bg-opacity-50');
    }
});

// light and dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
 function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }
    else{
        localStorage.theme = 'light';
    }
 }