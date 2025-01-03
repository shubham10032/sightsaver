function countUp() {
    const counters = document.querySelectorAll('.count'); // Select all counter elements

    // Find the max target value to ensure they finish at the same time
    const maxTarget = Math.max(...[...counters].map(counter => +counter.getAttribute('data-target')));

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get target from data-attribute
        const duration = +counter.getAttribute('data-duration') || 2000; // Duration in milliseconds (default to 2 seconds)
        const startValue = Math.max(0, target - 20); // Start from 20 less than the target, ensuring no negative values
        const range = target - startValue; // Range of the count
        const increment = target > startValue ? 1 : -1; // Determine direction of counting

        // Calculate the step time based on duration and range
        const stepTime = Math.abs(Math.floor(duration / range)); // Time between each increment

        // Ensure all counters finish at the same time (duration adjusted to maxTarget)
        const maxDuration = (duration / maxTarget) * 1000; // Scale duration based on max value

        let currentValue = startValue; // Set initial value from calculated startValue
        const interval = setInterval(() => {
            currentValue += increment; // Increment value

            // Update the displayed value
            counter.textContent = currentValue;

            // Stop the interval once the target value is reached
            if (currentValue === target) {
                clearInterval(interval);
            }
        }, stepTime);
    });
}

// Call the function on page load to start the counting effect
window.onload = countUp;

document.addEventListener("DOMContentLoaded", function () {
    // Function to check if screen width is greater than 576px
    function isLargeScreen() {
        return window.innerWidth >= 577;
    }

    // Run the animation script only if the screen width is larger than 576px
    if (isLargeScreen()) {
        // Select all divs with class "animate-text"
        const divsToAnimate = document.querySelectorAll('.animate-text');

        divsToAnimate.forEach(function (div) {
            const text = div.innerText;  // Get the text from the div
            div.innerHTML = '';  // Clear the existing text content

            // Loop through each character of the text and create a span for each letter
            Array.from(text).forEach((char, index) => {
                const span = document.createElement('span');

                // Check if the character is a space
                if (char === ' ') {
                    span.classList.add('space');
                    span.innerHTML = '&nbsp;';  // Use non-breaking space
                } else {
                    span.classList.add('letter');
                    span.innerText = char;
                }

                // Delay each character's animation based on its index
                span.style.animationDelay = `${index * 0.1}s`;

                // Append the span element to the div
                div.appendChild(span);
            });
        });
    } else {
        // If screen size is smaller than 576px, just ensure no animation is applied
        const divsToAnimate = document.querySelectorAll('.animate-text');
        divsToAnimate.forEach(function (div) {
            div.innerHTML = div.innerText;  // Restore original text without animation
        });
    }

    // Optional: Handle resizing dynamically to ensure it behaves correctly
    window.addEventListener('resize', function () {
        if (isLargeScreen()) {
            // Reapply animation if resized above 576px
            const divsToAnimate = document.querySelectorAll('.animate-text');
            divsToAnimate.forEach(function (div) {
                const text = div.innerText;  // Get the text from the div
                div.innerHTML = '';  // Clear the existing text content

                // Loop through each character of the text and create a span for each letter
                Array.from(text).forEach((char, index) => {
                    const span = document.createElement('span');

                    // Check if the character is a space
                    if (char === ' ') {
                        span.classList.add('space');
                        span.innerHTML = '&nbsp;';  // Use non-breaking space
                    } else {
                        span.classList.add('letter');
                        span.innerText = char;
                    }

                    // Delay each character's animation based on its index
                    span.style.animationDelay = `${index * 0.1}s`;

                    // Append the span element to the div
                    div.appendChild(span);
                });
            });
        } else {
            // Restore text without animation for smaller screens
            const divsToAnimate = document.querySelectorAll('.animate-text');
            divsToAnimate.forEach(function (div) {
                div.innerHTML = div.innerText;  // Restore original text without animation
            });
        }
    });
});

