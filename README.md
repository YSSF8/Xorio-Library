# Xorio Library (3.0)

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

// This function adds the enum ability to JS
const myEnum1 = xorio.Enum([
  'FIRST=5',
  'SECOND=9',
  'THIRD=23',
  'FOURTH=8'
]);

console.log(myEnum1.FIRST); // Output: 5
console.log(myEnum1.SECOND); // Output: 9
console.log(myEnum1.THIRD); // Output: 23
console.log(myEnum1.FOURTH); // Output: 8

// If you don't set values, it will set values by itself automatically, for example:
const myEnum2 = xorio.Enum([
  'FIRST',
  'SECOND',
  'THIRD',
  'FOURTH'
]);

console.log(myEnum2.FIRST); // Output: 0
console.log(myEnum2.SECOND); // Output: 1
console.log(myEnum2.THIRD); // Output: 2
console.log(myEnum2.FOURTH); // Output: 3

// Checks if the year is leap
// Leap year is a 366 days year, it comes every 4 years, February after 4 years has 29 days, if not it has 28 days
console.log(xorio.isLeapYear(2024)); // Output: true
console.log(xorio.isLeapYear(2021)); // Output: false
console.log(xorio.isLeapYear(2020)); // Output: true

// Alphanumeric object
xorio.alphanumeric.generate(); // Generates a random alphanumeric
xorio.alphanumeric.test('abc-123'); // Output: false
xorio.alphanumeric.test('abc123'); // Output: true
xorio.alphanumeric.generateWithPrefix('user_', 12); // Output: user_{RANDOM_ALPHANUMERIC}
xorio.alphanumeric.generateWithSuffix('_code', 12); // Output: {RANDOM_ALPHANUMERIC}_code

// Checks if the email inside a string is valid or not
console.log(xorio.isValidEmail('example@gmail')); // false
console.log(xorio.isValidEmail('example.com')); // false
console.log(xorio.isValidEmail('example')); // false
console.log(xorio.isValidEmail('example@outlook.com')); // true
console.log(xorio.isValidEmail('example@gmail.com')); // true
console.log(xorio.isValidEmail('example@yahoo.net')); // true

// Array object
xorio.array.shuffler([415, 515, 2121, 515, 212]);
xorio.array.sum([51, 21, 32]);
xorio.array.max([51, 21, 32]);
xorio.array.min([51, 21, 32]);
xorio.array.last([565, 51, 2123, 213]);

// This function generates random password
let minLength = 8;
let maxLength = 14;

xorio.passwordGenerator(minLength, maxLength);

// This class ceates a new element
const elem = new ElementCreator('div');
elem.class = 'class';
elem.id = 'id';
elem.innerHTML = 'Hello World!';
elem.add();
elem.setProperties({
  style: 'color: #f00; font-size: 16px',
  onclick: () => console.log('CLICKED!')
});
elem.parent('tag name, .class, or #id');

// Graphing system
const data = [ // New array with objects declaration
  { x: 0, y: 6 }, // Goes from 0 to 6
  { x: 2, y: 8 }, // Goes from 6 to 8
  { x: 4, y: 5 }, // Goes from 8 to 5
  { x: 8, y: 10 }, // Goes from 5 to 10
  { x: 10, y: 16 } // Goes from 10 to 16
];

// Graph function with options
graph('canvas', data, {
  xLabel = 'X Label',
  yLabel = 'Y Label',
  title = 'Title',
  dotSize = 5,
  lineWidth = 2,
  lineColor = '#298eb8',
  showGrid = true,
  gridColor = '#ddd',
  font = '12px Arial',
  textColor = '#eee'
});

// Math object
math.ln(25);
math.xor(true, false);
math.nor(true, false);
math.nand(true, false);

// Calc function in the math object
math.calc(6, 5, '+');
math.calc(6, 5, '-');
math.calc(6, 5, '*');
math.calc(6, 5, '/');
math.calc(6, 5, '%');

// Prime number checker
math.isPrime(2); // Output: true
math.isPrime(0); // Output: false
math.isPrime(1); // Output: false
math.isPrime(5); // Output: true
math.isPrime(3); // Output: true
```
