# Xorio Library (2.0)

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
import * as xorio from './xorio.js';
```

### How to use
```javascript
// This function makes a little notification at the bottom of the page
xorio.alert('Title');

// This function makes a customizable console text
xorio.print('Text you want to appear in the console', 'color: red; font-size: 30px;');

// This function makes the element follows the cursor
xorio.followPointer('tag name, .class, or #id');

// This function makes a custom alert box
xorio.alert('title', 'button text'); // If you leave the second option null it will automatically makes the button says (OK)

// This function makes a custom prompt box
xorio.prompt('title', 'button text', 'text field placeholder');

// This function changes the position of the element
xorio.randomPosition('tag name, .class, or #id');

// This class creates a random letters/numbers
const random = new xorio.Random();
random.var(variable_limit); // This generates random number but not displayed in the web
console.log(random.variable); // This prints the "random.var()" in the console (if you want)

// This class gives the user ability to move the element using Arrow/WASD keys
const movements = new xorio.Movement();
movements.arrows('tag name, .class, or #id'); // Makes the selected element moves with arrow keys
movements.WASD('tag name, .class, or #id'); // Makes the selected element moves with WASD keys
movements.both('tag name, .class, or #id'); // Makes the selected element moves with arrow/WASD keys

// This class creates elements
const obj = new xorio.Object();
obj.placeholder = 'Some text...'; // If it's a text/number input or textarea
obj.value = 'Some text...'; // If it's text/number/color/button input or textarea
obj.createElement('tag name', 'class name', 'id', 'text', 'parent');

// This function creates a custom notification
xorio.notification('title', 'message');

// This class counts
const counter = new xorio.Counter();
counter.countUp(milliseconds); // This function counts up
counter.countDown(milliseconds); // This function countes down
console.log(counter.variable); // To print the value in the console

// This function is like jQuery
xorio.µ('tag name, .class, or #id').on('click', () => xorio.alert('Something')); // Example for the addEventListener('click')
console.log(xorio.µ('tag name, .class, or #id').html()); // To print the element in the console to make sure it works well
```
