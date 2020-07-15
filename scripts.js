
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

