# Parallax Effect Implementation

This repository contains a simple implementation of a parallax effect using vanilla JavaScript. The parallax effect is achieved by moving the background image at a different speed than the rest of the page content when the user scrolls.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features
- Smooth parallax effect with adjustable speed
- Pure JavaScript, no dependencies
- Easy to integrate into any project
- Responsive design

## Installation

To use the Parallax class in your project, follow these steps:

1. Clone this repository or download the source code.
2. Copy `styles.css`, `script.js`, and the relevant parts of `index.html` into your project directory.
3. Include the CSS and JavaScript files in your HTML file, like so:
```html
<link rel="stylesheet" href="path/to/styles.css">
<script src="path/to/script.js"></script>
```
4. Adjust the paths in the above code to match the location of the files in your project.

## Usage

1. Add an element to your HTML file with the class `parallax-container` and an ID of your choice. Set the `background-image` style to the image you want to use for the parallax effect.
```html
<div id="parallax" class="parallax-container" style="background-image: url('path/to/your/image.jpg');">
    <div class="content">
        <h1>Your Content Here</h1>
    </div>
</div>
```
2. Initialize the Parallax class in a script tag or an external JavaScript file:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const parallaxElement = document.getElementById('parallax');
    const parallax = new Parallax(parallaxElement, 0.05); // You can adjust the speed as needed
});
```
3. That's it! The parallax effect should now be applied to your background image.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for more details.