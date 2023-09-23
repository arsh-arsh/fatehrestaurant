// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Form submission handling
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.querySelector('#exampleInputName1').value;
      const phoneNumber = document.querySelector('#exampleInputphoneNumber1').value;
  
      // You can add your form submission logic here.
      // For now, let's display an alert with the entered data.
      alert(`Thank you, ${name}! We will contact you at ${phoneNumber} to confirm your reservation.`);
  
      // Reset the form
      form.reset();
    });
  });
  