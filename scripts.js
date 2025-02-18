  function showDetails(scheme) {
    const schemeDetails = {
      "education-grant": {
        title: "Education Grant",
        description: "This scheme offers financial assistance for students to pursue higher education. It covers tuition fees, accommodation, and other expenses."
      },
      "farmers-subsidy": {
        title: "Farmers Subsidy",
        description: "This scheme helps farmers with subsidies for agricultural equipment, seeds, and fertilizers. It aims to enhance productivity and reduce costs."
      },
      "health-insurance": {
        title: "Health Insurance",
        description: "Provides affordable health insurance for low-income families. It covers hospitalization, treatments, and medical emergencies."
      }
    };
  
    const schemeModal = document.getElementById('scheme-details');const schemeTitle = document.getElementById('scheme-title');
    const schemeDescription = document.getElementById('scheme-description');
    
    schemeTitle.textContent = schemeDetails[scheme].title;
    schemeDescription.textContent = schemeDetails[scheme].description;
    
    schemeModal.style.display = "flex";
  }
  
  function closeDetails() {
    document.getElementById('scheme-details').style.display = "none";
  }
  
  // Contact Form Submission (Simple Alert for demonstration)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  });