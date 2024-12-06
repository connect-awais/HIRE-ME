
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function notif() {
  let btn = document.getElementById("btn")
  await sleep(2000)
  btn.textContent = "Sent Successfully !!"
  await sleep(6000)
  btn.textContent = "Send"
}
function validateForm() {
  // Get all the input fields in the form
  const inputs = document.querySelectorAll("#myForm input");
  let isValid = true;
  
  // Check if any input field is empty
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  // Show error message if fields are empty
  if (!isValid) {
    document.getElementById("errorMessage").style.display = "block";
    return false; // Prevent form submission
  } else {
    document.getElementById("errorMessage").style.display = "none";
    return true; // Allow form submission
  }
}
function validateForm(event) {
  // Prevent form submission
  event.preventDefault();

  // Get all the input fields in the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  // Check if any field is empty
  if (!name.trim() || !email.trim()) {
    errorMessage.style.display = "block"; // Show error message
    successMessage.style.display = "none"; // Hide success message
    return false; // Prevent form submission
  }

  // If fields are filled, show success message
  errorMessage.style.display = "none"; // Hide error message
  successMessage.style.display = "block"; // Show success message
  
  // After showing success, submit the form to Formspree
  document.getElementById("myForm").submit();
  return true; // Allow form submission to Formspree
}
// After successful submission, show confirmation message
document.getElementById("thankYouMessage").style.display = "block";
