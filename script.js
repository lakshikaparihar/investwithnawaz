

var options = {
    "key": "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API Key
    "amount": 50000, // Amount in paise (50000 = ₹500)
    "currency": "INR",
    "name": "Your Company Name",
    "description": "Payment for Order #12345",
    "image": "https://your-logo-url.com", // Optional company logo
    "handler": function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        // You can send this payment ID to your backend for verification
    },
    "prefill": {
        "name": "Yuvraj", // Pre-filled user name
        "email": "yuvraj@example.com",
        "contact": "9999999999"
    },
    "theme": {
        "color": "#3399cc" // Customize button color
    }
};

var rzp = new Razorpay(options);

document.getElementsByClassName('moneybackButton').onclick = function (e) {
    rzp.open();
    e.preventDefault();
}

