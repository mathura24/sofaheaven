// show cart msg

function showCartMsg() {
    const message = document.getElementById("card-msg");
    if (message.style.display === "block") {
        message.style.display = "none";
    } else {
        message.style.display = "block";

    }
}

// serach input box
function showSearch() {
    const input = document.getElementById("input-Box");
    if (input.style.display == "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
}


// X open/close section

function openModel() {
    document.getElementById("otpModel").classList.remove("hidden");
}

function closeModel() {
    document.getElementById("otpModel").classList.add("hidden");
}

// otp section


function checkMobileNumber() {
    const number = document.getElementById("mobileNumber").value;
    const isValid = /^[6-9]\d{9}$/.test(number);
    const button = document.getElementById("otpBtn");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    // Reset success message on input change
    successMsg.classList.add("hidden");

    if (isValid) {
        button.disabled = false;
        errorMsg.classList.add("hidden");
    } else {
        button.disabled = true;
        errorMsg.classList.remove("hidden");
    }
}

function validateAndSendOTP() {
    const number = document.getElementById("mobileNumber").value;
    const isValid = /^[6-9]\d{9}$/.test(number);
    const successMsg = document.getElementById("successMsg");

    if (isValid) {
        alert("OTP Verified Successfully");
        successMsg.classList.remove("hidden");
    } else {
        alert("❌ Please enter a valid 10-digit mobile number");
    }
}

// product search functionality

// Toggle search bar visibility
function showSearch() {
    const searchBox = document.getElementById("input-Box");
    searchBox.classList.toggle("hidden");
}

// Real-time product search
document.getElementById("searchInput").addEventListener("input", function () {
    const input = this.value.toLowerCase();
    const products = document.querySelectorAll("#product-container .group");

    let anyVisible = false;

    products.forEach(product => {
        const text = product.querySelector("p").textContent.toLowerCase();
        if (text.includes(input)) {
            product.style.display = "block";
            anyVisible = true;
        } else {
            product.style.display = "none";
        }
    });

    // Optional: show/hide "no results" message
    const noResults = document.getElementById("noResultsMessage");
    if (!anyVisible) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
});


// 


window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    const image = document.getElementById('autoZoomImg');

    // Show popup and zoom image
    popup.classList.add('show');
    image.classList.add('zoomed');

    // Hide popup and remove zoom after 2 seconds (2000ms)
    setTimeout(() => {
        popup.classList.remove('show');
        image.classList.remove('zoomed');
    }, 2000);
});


// email
document.getElementById('sendEmailBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  if (!name || !email) {
    alert('Please enter your name and email!');
    return;
  }

  fetch('http://localhost:3000/sendmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message === 'Email sent successfully!') {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email. Please try again later.');
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('Error occurred. Please try again later.');
  });
});
