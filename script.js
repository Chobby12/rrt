const servicesBearer = document.querySelector(".nav-menu li:nth-child(5) a")
const  services = document.querySelector(".services")
servicesBearer.style.color = 'red'

servicesBearer.onclick = function(e){
    e.preventDefault();
    // alert("Hello, World!")
    services.classList.toggle("show")
}

