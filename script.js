document.getElementById("infoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const training = document.getElementById("training").value
    
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  validateEmail(email) ? 
    document.getElementById("successMsg").textContent = "Thank you, " + name + "! We'll contact you soon at " + email + " with more information on our " + training 
    : document.getElementById("successMsg").textContent ="Please input a valid email";  


  this.reset();
});

