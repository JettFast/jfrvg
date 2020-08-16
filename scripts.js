
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("header");
  const menu = document.getElementsByClassName("nav-pages");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    for (let i = 0; i < menu.length; i++) {     
      if (hamburger.classList.contains("is-active")) {
        menu[i].style.display = "block"; 
      } else {
        menu[i].style.display = "none"; 
      }
  }
  });

  // let hover = document.querySelector('.book'); 

  // hover.addEventListener("mouseover", function(event) {
  //     hover.style.backgroundColor = 'white'; 
  // })
  
  // hover.addEventListener("mouseout", function(event){
  //   hover.style.color = 'black'; 
  // })

  function scrollFunction() {

    const main = document.querySelector("main");
    const nav = document.querySelector(".nav-ul");
    const navImg = document.querySelector(".nav-ul img");
    
    function stickyMenu() {
      header.style.position = "fixed";
      header.style.top = "0";
    }
    
    function relativeMenu() {
      header.style.position = "relative";
      header.style.top = "inherit";
    }
    
    if ((document.body.scrollTop > 39 || document.documentElement.scrollTop > 39) && window.innerWidth >= 991) {
      nav.style.fontSize = "1rem";
      navImg.style.height = "40px";
      header.style.backgroundColor = "white";
      header.style.margin = "0";
      header.style.width = "100%";
      header.style.boxShadow = "0 3px 10px rgba(0, 0, 0, .5)";
      main.style.paddingTop = "86px"
      stickyMenu();
    } else {
      nav.style.fontSize = "1.2rem";
      navImg.style.height = "80px";
      nav.style.backgroundColor = "inherit";
      main.style.paddingTop = "inherit"
      header.style.boxShadow = "none";
      relativeMenu();
    }
  } 

  window.onscroll = () => scrollFunction();

