//Navbar open-close
function openNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Dark mode
function darkMode() {
  const body = document.body;
  if (body.className != "dark-mode") {
    body.classList.add("dark-mode");
  } else {
    body.className = "";
  }
}
