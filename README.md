# Xorio Library (1.5)

This is a replacement for <a href="https://github.com/YSSF8/OnyxLibrary">Onyx library</a>. We've stopped updating it for some reason.

### How to import
#### HTML
```html
<!-- At the end of the body tag paste this code -->
<script src="./your-script.js" type="module"></script>
```
#### JavaScript
```javascript
// In your script add this at the first line
import * as xorio from './Xorio.min.js';
```

### How to use
```javascript
// This function makes a little notification at the bottom of the page
xorio.alert('Title');

// This function adds a simple counter
xorio.count('tag name, .class, or #id', 100); // The "100" is milliseconds, if you want to count every 1 seconds type 1000

// This function makes the element moves with WASD keys
xorio.WASDMovement('tag name, .class, or #id');

// This function makes the element moves with arrow keys
xorio.arrowsMovement('tag name, .class, or #id');

// This function makes a customizable console text
xorio.print('Text you want to appear in the console', 'color: red; font-size: 30px;');

// This function makes the element follows the cursor
xorio.followPointer('tag name, .class, or #id');

// This function creates an element
xorio.createElement('div', 'body', 'class', 'text', 'placeholder'); // placeholder if the element is input, the body is the parent

// This function makes a custom alert box
xorio.alert('title', 'button text'); // If you leave the second option null it will automatically makes the button says (OK)

// This function makes a custom prompt box
xorio.prompt('title', 'button text', 'text field placeholder');

// This function changes the position of the element
xorio.randomPosition('tag name, .class, or #id');

// This class creates a random letters/numbers
const random = new xorio.Random();

random.letter('tag name, .class, or #id'); // This generates random letter (inside the quotes is the parent)
random.number('tag name, .class, or #id'); // This generates random number (inside the quotes is the parent)
random.var(variable_limit); // This generates random number but not displayed in the web
console.log(random.variable); // This prints the "random.var()" in the console (if you want)
```
