# Xorio Library (2.7)

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
// This function makes the element follows the cursor
xorio.toPointer('tag name, .class, or #id');

// This function makes a custom alert box
xorio.alert('title', 'button text'); // If you leave the second option null it will automatically makes the button says (OK)

// This function makes a custom prompt box
xorio.prompt('title', 'button text', 'text field placeholder');

// This function changes the position of the element
xorio.randomPosition('tag name, .class, or #id');

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

// This class gives you a cool hover effects
const hoverEffx = new xorio.HoverEffx();
hoverEffx.shake('tag name, .class, or #id'); // Shaking effect
hoverEffx.vibration('tag name, .class, or #id'); // Vibration effect
hoverEffx.box('tag name, .class, or #id'); // Box effect

// This function is a better method to use the (randomPosition, Movement, toPointer)
xorio.position('tag name, .class, or #id').random(); // Go to a random position
xorio.position('tag name, .class, or #id').followPointer(); // Makes the selected element follows the pointer
xorio.position('tag name, .class, or #id').movement().arrows(); // Makes the selected element moves with the arrow keys
xorio.position('tag name, .class, or #id').movement().wasd(); // Makes the selected element moves with the WASD keys
xorio.position('tag name, .class, or #id').movement().both(); // Makes the selected element moves with the arrow/WASD keys

// This class gives you a cool focus effects
new xorio.FocusEffx('tag name, .class, or #id').shadow(range, 'color', ms); // Smooth shadow effect
new xorio.FocusEffx('tag name, .class, or #id').changeBackgroundColor('color', ms); // changes the background color

// This function makes the site speak and tell the user the word inside it
xorio.speak('Something'); // And it will say "Something"
// And you can make it say a text inside the HTML
const div = document.getElementById('myDiv');
xorio.speak(div.innerText); // Now it will say the text inside the div element we've selected

// This function allows you to create custom elements easier (BETA)
const myElement = xorio.customElement('my-element');
myElement.create(() => {
  console.log('Working well!'); // This will print "Works well!" in the console when the element is in the HTML file
});

// This object contains some functions to get random things easier
xorio.random.number.integer(0, 10); // This line gets a random number between 0 and 10
xorio.random.number.float(0, 10); // This also gets a random number between 0 and 10, but this is float
xorio.random.char(); // This gets a random character from "a-z", "A-Z"
xorio.random.color.hex(); // This gets a random hex code
xorio.random.color.rgb(); // This gets a random rgb code
xorio.random.color.hsl(); // This gets a random hsl code
xorio.random.bool(); // This gets a random boolean between "false" and "true"
xorio.random.fromArray([5154, 451, 5151, 51747, 5121, 122]); // This will get a random number from the array inside the "()"
xorio.random.time() // This will get a random time (hours, minutes, seconds), not the actual time
```
