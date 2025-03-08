document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is fully loaded and parsed');

    // Function to create the Razorpay payment button form
    const createPaymentButton = () => {
        // Create the form element
        const form = document.createElement('form');

        // Create the script element
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', 'pl_Q1x1yvxUpkaRnN');
        script.async = true;

        // Append the script to the form
        form.appendChild(script);

        // Append the form to the modal payment button container
        const modalPaymentButtonContainer = document.getElementById('modal-payment-button-container');
        if (modalPaymentButtonContainer) {
            modalPaymentButtonContainer.innerHTML = ''; // Clear any existing content
            modalPaymentButtonContainer.appendChild(form);
        } else {
            console.error('Modal payment button container not found');
        }
    };

    // Function to open the modal
    const openModal = () => {
        const modal = document.getElementById('paymentModal');
        if (modal) {
            modal.style.display = 'flex'; // Use 'flex' to center the modal
            document.body.style.overflow = 'hidden'; // Hide body overflow
            createPaymentButton();
        } else {
            console.error('Modal not found');
        }
    };

    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById('paymentModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore body overflow
        } else {
            console.error('Modal not found');
        }
    };

    // Add event listener to the "Register Now" button at the bottom
    const registerButtonBottom = document.getElementById('register-now-bottom');
    if (registerButtonBottom) {
        registerButtonBottom.addEventListener('click', openModal);
    } else {
        console.error('Register Now button at the bottom not found');
    }

    // Add event listener to the close button in the modal
    const closeButton = document.querySelector('.modal .close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        console.error('Close button not found');
    }

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('paymentModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});