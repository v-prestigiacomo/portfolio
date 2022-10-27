//typewriter effect

var typed = new Typed('.txt1', {
    strings: ["My Name is Vincenzo Prestigiacomo <br> I'm a Web Developer"],
    typeSpeed: 100
})


//side nav open and close

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }


  function validateForm() {
    let x = document.forms["contactForm"]["fname"].value;
    let y = document.forms["contactForm"]["lname"].value;
    let z = document.forms["contactForm"]["subject"].value;
    if (x == "" || y == "") {
      alert("Please fill in your name");
      return false;
    }

    if (z == "") {
      alert("Please fill in the subject area")
    }
  }