//function for showing and hidding navbar list section

// Function to switch between website sections

function show_about_us_body(value) {

    const sections = [
        document.querySelector('.home'),
        document.querySelector('.about'),
        document.querySelector('.fitness_calendar'),
        document.querySelector('.contact_us'),
        document.querySelector('.join_us')
    ];

    // Validate selected section
    if (value < 1 || value > sections.length) {
        return;
    }

    // Show selected section and hide others
    sections.forEach((section, index) => {

        if (index === value - 1) {

            if (index === 4) {
                section.style.display = 'flex';
            }
            else {
                section.style.display = 'block';
            }

        }
        else {
            section.style.display = 'none';
        }

    });

    // Close mobile navigation
    hid();

    // Start the selected section from the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to select membership plan
function selectPlan(plan) {

    const selectedPlan = document.getElementById("selected_plan");

    // Store selected membership plan
    selectedPlan.value = plan;

    // Open Contact Us section
    show_about_us_body(4);
}

// Function for showing and hiding the navigation menu

// Function for showing and hiding the navigation menu
function show() {
    const nav = document.querySelector('.navbar');
    const open = document.querySelector('.open_menue');
    const close = document.querySelector('.close_menue');

    nav.classList.add('active');

    open.style.display = 'none';
    close.style.display = 'flex';
    close.style.zIndex = '100';
}

function hid() {
    const nav = document.querySelector('.navbar');
    const open = document.querySelector('.open_menue');
    const close = document.querySelector('.close_menue');

    nav.classList.remove('active');

    open.style.display = 'flex';
    close.style.display = 'none';
}

// Add event listener for the 'resize' event to update the hamburger icon behavior
// Handle navbar when screen is resized
window.addEventListener('resize', function () {
    const nav = document.querySelector('.navbar');
    const open = document.querySelector('.open_menue');
    const close = document.querySelector('.close_menue');

    nav.classList.remove('active');

    nav.style.display = '';
    open.style.display = '';
    close.style.display = '';
});

// Add event listener for the initial state when the page loads


// Rest of your show_about_us_body function (as provided in your question)

//function for visible content 
window.addEventListener(`scroll`, reveal);

function reveal() {
    var reveals = document.querySelectorAll(`.reveal`);

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add(`active`);
        }
        else {
            reveals[i].classList.remove(`active`);
        }
    }
}

//function when we refresh than  Scroll to the top of the page
window.addEventListener('beforeunload', function () {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});
//function for alignment of the day and timing of calender section
//function for contact form submited;
// Contact form validation

// Contact Form Validation

// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form_status");
const selectedPlan = document.getElementById("selected_plan");
const submitBtn = document.getElementById("submit");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();

        formStatus.textContent = "Please fill all fields correctly.";
        formStatus.className = "error";
        return;
    }

    // Prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = "Processing...";

    const currentPlan = selectedPlan.value;

    // Simulated loading delay
    setTimeout(function () {

        // Clear other fields
        contactForm.querySelectorAll("input:not(#selected_plan), textarea")
            .forEach(field => {
                field.value = "";
            });

        // Preserve selected plan
        selectedPlan.value = currentPlan;

        if (currentPlan) {
            formStatus.textContent =
                `Thank you! Your enquiry has been recorded successfully. Selected plan: ${currentPlan}.`;
        } else {
            formStatus.textContent =
                "Thank you! Your enquiry has been recorded successfully. No membership plan selected.";
        }

        formStatus.className = "success";

        // Restore button
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

    }, 1000);
});
