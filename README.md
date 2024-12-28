# Porsche Animated Webpage

🚗 **A Fully Animated Static Webpage Dedicated to Porsche**

## Overview

This is a fully animated static webpage crafted to celebrate the beauty and innovation of Porsche. The webpage is not only visually stunning but also fully responsive, ensuring a seamless experience across all devices.

The animations, powered entirely by JavaScript, Bootstrap, and CSS, deliver smooth and dynamic interactions, creating an engaging user experience that truly brings the design to life. The inspiration for this project came from a simple one-direction animation I stumbled upon, which sparked the idea to push boundaries and create a comprehensive, animated webpage.

## Features

- **Fully Animated Elements:** Dynamic interactions controlled entirely by JavaScript and the IntersectionObserver API.
- **Responsive Design:** Ensures compatibility with various screen sizes, delivering a smooth experience on all devices.
- **Modern Aesthetic:** Clean and elegant visuals tailored to reflect Porsche’s innovative spirit.
- **Custom Animations:** Multiple animation types including axis-based movements and tile-based interactions for immersive effects.

## Technologies Used

### Frontend:

- HTML5
- CSS3
- JavaScript
- Bootstrap

### Libraries & APIs:

- IntersectionObserver API (for triggering animations)

## Code Highlights

Animations are controlled using the IntersectionObserver API for efficiency and smooth performance. Here's a glimpse of the reusable observer logic:

```javascript
function createObserver(classToAdd) {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
            } else {
                entry.target.classList.remove(classToAdd);
            }
        });
    });
}

// Example usage:
const xObserver = createObserver('xAxisShow');
document.querySelectorAll('.xMovement').forEach((el) => xObserver.observe(el));
