var navbar = document.querySelector(".nav-menu")
var ham = document.querySelector(".nav-menu__toggler")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("nav-menu--active")
  ham.classList.toggle("nav-menu__toggler--active")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);

$('.plans-list__window').click( function(){
  if ( $(this).hasClass('plans-list__window--hover') ) {
      $(this).removeClass('plans-list__window--hover');
  } else {

      $(this).addClass('plans-list__window--hover');    
  }
});
