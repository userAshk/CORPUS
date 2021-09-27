console.log("Hi")

function showHtmlDiv() {
    var htmlShow = document.getElementById("menu");
    if (htmlShow.style.display === "none") {
      htmlShow.style.display = "block";
    } else {
      htmlShow.style.display = "none";
    }
}

// DROPDOWN FILTER
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }