export { box, Movement, randomPosition, toPointer, Counter, µ, HoverEffx, position, FocusEffx, speak, customElement, events, random, Enum, isLeapYear, alphanumeric, isValidEmail, array, passwordGenerator, ElementCreator, graph, math, popup, CSV }

// Links with the CSS
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'xorio.css';
document.head.appendChild(css);

let boxes = false;
let notifs = false;

const box = {
    alert: (message, button_text) => {
        const el = document.createElement('div');
        el.innerHTML = `<h3 class="xorio-alert-title">"${document.title}" says</h3><div class="xorio-alert-message">${message}</div>`;
        el.classList.add('xorio-alert');
        document.body.appendChild(el);

        const btn = document.createElement('button');
        btn.innerText = button_text;
        btn.classList.add('xorio-alert-btn');
        el.appendChild(btn);

        if (btn.innerText == 'undefined' || btn.innerText == '') {
            btn.innerText = 'OK';
        }

        setTimeout(() => {
            el.style.top = '50%';
            el.style.opacity = 1;
            document.body.style.pointerEvents = 'none';
            boxes = true;
        });

        if (boxes == true) {
            el.remove();
        }

        btn.addEventListener('click', () => {
            el.style.top = '47%';
            el.style.opacity = 0;
            setTimeout(() => {
                el.remove();
                document.body.removeAttribute('style');
                boxes = false;
            }, 200);
        });
    },
    prompt: (message, placeholder, button_text) => {
        // The body
        const el = document.createElement('div');
        el.innerHTML = `<h3 class="xorio-prompt-title">"${document.title}" says</h3><div class="xorio-prompt-message">${message}</div>`;
        el.classList.add('xorio-prompt');
        document.body.appendChild(el);

        // The text input
        const input = document.createElement('input');
        input.placeholder = placeholder;
        input.classList.add('xorio-prompt-input');
        el.appendChild(input);

        // The OK button
        const btn = document.createElement('button');
        btn.innerText = button_text;
        btn.classList.add('xorio-prompt-btn');
        el.appendChild(btn);

        // If the placeholder is null it will return nothing
        if (input.placeholder == 'undefined') {
            input.placeholder = '';
        }

        // If the button text is null it will return "OK"
        if (btn.innerText == 'undefined' || btn.innerText == '') {
            btn.innerText = 'OK';
        }

        // Appearing transition
        setTimeout(() => {
            el.style.top = '50%';
            el.style.opacity = 1;
            document.body.style.pointerEvents = 'none';
            boxes = true;
        });

        if (boxes == true) {
            el.remove();
        }

        btn.addEventListener('click', () => {
            el.style.top = '47%';
            el.style.opacity = 0;
            setTimeout(() => {
                el.remove();
                document.body.removeAttribute('style');
                boxes = false;
            }, 200);
        });

        function on(callback) {
            btn.addEventListener('click', () => {
                callback(input.value);
            });
        }

        return {
            value: input.value,
            ok: on
        }
    },
    toast: message => {
        const el = document.createElement('div');
        el.innerText = message;
        el.classList.add('xorio-toast');
        document.body.appendChild(el);

        // Appearing transition
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.bottom = '10%';
        });

        // Disapearing
        setTimeout(() => {
            // Transition
            el.style.opacity = 0;
            el.style.bottom = '12%';
            // Removing the element
            setTimeout(() => {
                el.remove();
            }, 200);
        }, 1000);

        return el.innerText;
    },
    notification: (title, message) => {
        // The body
        const el = document.createElement('div');
        el.innerHTML = `<h3 class="xorio-notification-title">${title}</h3>`;
        el.classList.add('xorio-notification');
        document.body.appendChild(el);

        // The message content
        const msg = document.createElement('div');
        msg.innerText = message;
        msg.classList.add('xorio-notification-message');
        el.appendChild(msg);

        // The remove button
        const btn = document.createElement('div');
        btn.classList.add('xorio-notification-close');
        el.appendChild(btn);

        // Appearing transition
        setTimeout(() => {
            notifs = true;
            el.style.right = '10px';
        });

        // Removes the clones of the notifications
        if (notifs == true) {
            el.remove();
        }

        // Transition after clicking the remove button
        btn.addEventListener('click', () => {
            el.style.right = '-100%';
            setTimeout(() => {
                el.remove();
                notifs = false;
            }, 200);
        });
    }
}

// Makes the element moves using keys
class Movement {
    // Moves with arrow keys
    arrows(element) {
        const el = document.querySelector(element);
        el.style.position = 'fixed';
        el.style.transition = 'left 50ms, top 50ms';
        let x = 0, y = 0;

        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowRight':
                    x += 10;
                    el.style.left = x + 'px';
                    break;
                case 'ArrowLeft':
                    x -= 10;
                    el.style.left = x + 'px';
                    break;
                case 'ArrowUp':
                    y -= 10;
                    el.style.top = y + 'px';
                    break;
                case 'ArrowDown':
                    y += 10;
                    el.style.top = y + 'px';
                    break;
            }
        });
    }
    // Moves with WASD keys
    WASD(element) {
        const el = document.querySelector(element);
        el.style.position = 'fixed';
        el.style.transition = 'left 50ms, top 50ms';
        let x = 0, y = 0;

        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'd':
                    x += 10;
                    el.style.left = x + 'px';
                    break;
                case 'a':
                    x -= 10;
                    el.style.left = x + 'px';
                    break;
                case 'w':
                    y -= 10;
                    el.style.top = y + 'px';
                    break;
                case 's':
                    y += 10;
                    el.style.top = y + 'px';
                    break;
            }
        });
    }
    // Moves with Arrow/WASD keys
    both(element) {
        const el = document.querySelector(element);
        el.style.position = 'fixed';
        el.style.transition = 'left 50ms, top 50ms';
        let x = 0, y = 0;

        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowRight':
                case 'd':
                    x += 10;
                    el.style.left = x + 'px';
                    break;
                case 'ArrowLeft':
                case 'a':
                    x -= 10;
                    el.style.left = x + 'px';
                    break;
                case 'ArrowUp':
                case 'w':
                    y -= 10;
                    el.style.top = y + 'px';
                    break;
                case 'ArrowDown':
                case 's':
                    y += 10;
                    el.style.top = y + 'px';
                    break;
            }
        });
    }
}

// Makes the selected element go to a random position
function randomPosition(element) {
    const el = document.querySelector(element);
    el.style.position = 'fixed';
    el.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    el.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
}

// Makes the selected element follows the cursor
function toPointer(element) {
    const el = document.querySelector(element);
    el.style.position = 'fixed';

    addEventListener('mousemove', e => {
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
    });
}

// Creates an invisible counter
class Counter {
    constructor() {
        this.value = 0;
    }

    // Counts up
    countUp(milliseconds) {
        setInterval(() => {
            this.value++;
        }, milliseconds);
    }
    // Counts down
    countDown(milliseconds) {
        setInterval(() => {
            this.value--;
        }, milliseconds);
    }
}

// Some JQuery features
function µ(selector) {
    let element = document.querySelector(selector);

    const self = {
        html: () => element,
        on: (event, callback) => {
            element.addEventListener(event, callback);
        },
        remove: () => element.remove(),
        hide: () => {
            element.style.display = 'none';
        },
        addClass: (class_name) => {
            element.classList.add(class_name);
        },
        attr: (name, value) => {
            if (value == null) {
                element.getAttribute(name);
            } else {
                element.setAttribute(name, value);
            }
        },
        style: (property, result) => {
            element.setAttribute('style', `${property}: ${result}`);
        },
        setHTML: (markup) => {
            element.innerHTML = markup;
        },
        setText: (text) => {
            element.innerText = text;
        },
        appendChild: (selector) => {
            element.appendChild(selector);
        },
        align: (position) => {
            element.align = position;

            if (element.align == 'undefined' || element.align == '') {
                element.align = 'left';
            }
        },
        addHTML: (markup) => {
            element.innerHTML += markup;
        },
        addText: (text) => {
            element.innerText += text;
        },
        draggable: (boolean) => {
            element.draggable = boolean;
        },
        clone: (parent) => {
            const cloned = element.cloneNode(true);
            document.querySelector(parent).appendChild(cloned);
        },
        val: value => {
            if (value == null) {
                return element.value;
            } else {
                element.value = value;
            }
        },
        prevElement: element.previousElementSibling,
        nextElement: element.nextElementSibling,
        parentElement: element.parentElement,
        firstElementChild: element.firstElementChild,
        lastElementChild: element.lastElementChild
    }
    return self;
}

// Cool hover effects
class HoverEffx {
    // Shaking effect
    shake(selector) {
        const el = document.querySelectorAll(selector);
        el.forEach(element => {
            element.classList.add('xorio-hover-shake');
        });
    }
    // Vibration effect
    vibration(selector) {
        const el = document.querySelectorAll(selector);
        el.forEach(element => {
            element.classList.add('xorio-hover-vib');
        });
    }
    // Box effect
    box(selector) {
        const el = document.querySelectorAll(selector);
        el.forEach(element => {
            element.classList.add('xorio-hover-box');
        });
    }
}

// This function controls the position of the elements
function position(selector) {
    const el = document.querySelector(selector);
    const self = {
        // Makes the selected element go to a random position
        random: () => {
            el.style.position = 'fixed';
            el.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
            el.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        },
        // Makes the selected element follows the pointer
        followPointer: () => {
            el.style.position = 'fixed';
            el.style.pointerEvents = 'none';
            document.addEventListener('mousemove', ({ clientX, clientY }) => {
                let x = clientX, y = clientY;
                el.style.left = x + 'px';
                el.style.top = y + 'px';
            });
        },
        // Makes the selected element moves with keyboard keys
        movement: () => {
            el.style.position = 'fixed';
            el.style.transition = 'left 50ms, top 50ms';
            let x = 0, y = 0;

            const keys = {
                // Moves with the arrow keys
                arrows: () => {
                    document.addEventListener('keydown', e => {
                        switch (e.key) {
                            case 'ArrowRight':
                                x += 10;
                                el.style.left = x + 'px';
                                break;
                            case 'ArrowLeft':
                                x -= 10;
                                el.style.left = x + 'px';
                                break;
                            case 'ArrowUp':
                                y -= 10;
                                el.style.top = y + 'px';
                                break;
                            case 'ArrowDown':
                                y += 10;
                                el.style.top = y + 'px';
                                break;
                        }
                    });
                },
                // Moves with the WASD keys
                wasd: () => {
                    document.addEventListener('keydown', e => {
                        switch (e.key) {
                            case 'd':
                                x += 10;
                                el.style.left = x + 'px';
                                break;
                            case 'a':
                                x -= 10;
                                el.style.left = x + 'px';
                                break;
                            case 'w':
                                y -= 10;
                                el.style.top = y + 'px';
                                break;
                            case 's':
                                y += 10;
                                el.style.top = y + 'px';
                                break;
                        }
                    });
                },
                // Moves with arrow/WASD keys
                both: () => {
                    document.addEventListener('keydown', e => {
                        switch (e.key) {
                            case 'ArrowRight':
                            case 'd':
                                x += 10;
                                el.style.left = x + 'px';
                                break;
                            case 'ArrowLeft':
                            case 'a':
                                x -= 10;
                                el.style.left = x + 'px';
                                break;
                            case 'ArrowUp':
                            case 'w':
                                y -= 10;
                                el.style.top = y + 'px';
                                break;
                            case 'ArrowDown':
                            case 's':
                                y += 10;
                                el.style.top = y + 'px';
                                break;
                        }
                    });
                }
            }
            return keys;
        }
    }
    return self;
}

// Cool focus effects
class FocusEffx {
    constructor(selector) {
        this.selector = selector;
    }

    // Makes a shadow effect after clicking the selected elements
    shadow(range, color, ms) {
        const el = document.querySelectorAll(this.selector);

        // Loops through the selected elements so every element will be affected
        el.forEach(elem => {
            elem.classList.add('xorio-focus-shadow');

            const style = document.createElement('style');
            style.innerHTML = `
                .xorio-focus-shadow {
                    transition: box-shadow ${ms}ms;
                }
                .xorio-focus-shadow:focus {
                    box-shadow: 0 0 0 ${range}px ${color};
                }
            `;
            document.head.appendChild(style);
        });
    }
    // Changes the background color of the selected elements
    changeBackgroundColor(color, ms) {
        const el = document.querySelectorAll(this.selector);

        // Loops through the selected elements so every element will be affected
        el.forEach(elem => {
            elem.classList.add('xorio-focus-change_color');

            const style = document.createElement('style');
            style.innerHTML = `
                .xorio-focus-change_color {
                    transition: background ${ms}ms;
                }
                .xorio-focus-change_color:focus {
                    background-color: ${color};
                }
            `;
            document.head.appendChild(style);
        });
    }
}

// The speak function makes the site say something
function speak(word) {
    const speak = new SpeechSynthesisUtterance(word);
    speak.voice = speechSynthesis.getVoices().filter(voice => { return voice.name == 'Google US English Male'; })[0];
    speak.rate = 1;

    window.speechSynthesis.speak(speak);
}

// The custom element allows you to create a new element easier
function customElement(tag) {
    const self = {
        create: callback => {
            class NewElement extends HTMLElement {
                constructor() {
                    super();
                }

                connectedCallback() {
                    callback();
                }
            }

            customElements.define(tag, NewElement);
        },
        setAttr: (attr, value) => {
            const el = document.querySelector(tag);
            el.setAttribute(attr, value);
        },
        getAttr: attr => {
            document.querySelector(tag).getAttribute(attr);
        },
        innerHTML: value => {
            document.querySelector(tag).innerHTML = value;
        }
    }
    return self;
}

// Some new events
function events(element) {
    const el = document.querySelector(element);

    const self = {
        invisible: callback => {
            if (getComputedStyle(el).getPropertyValue('visibility') == 'hidden' || el.style.visibiliy == 'hidden') {
                callback();
            }
        },
        tripleClick: callback => {
            el.addEventListener('click', e => {
                if (e.detail == 3) {
                    callback();
                }
            });
        },
        quadraClick: callback => {
            el.addEventListener('click', e => {
                if (e.detail == 4) {
                    callback();
                }
            });
        },
        clicksCount: (callback, clicks) => {
            el.addEventListener('click', e => {
                if (e.detail == clicks) {
                    callback();
                }
            });
        }
    }
    return self;
}

// Random system
const random = {
    number: {
        integer: (first = 0, last = 1) => {
            return Math.floor(Math.random() * (last - first + 1)) + first;
        },
        float: (first = 0, last = 1) => {
            return Math.random() * (last - first) + first;
        }
    },
    char: () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const randomIndex = Math.floor(Math.random() * chars.length);
        return chars[randomIndex];
    },
    color: {
        hex: () => {
            const hexChars = '0123456789ABCDEF';
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            return hexColor;
        },
        rgb: () => {
            function rand() {
                return random.number.integer(0, 255);
            }

            return `rgb(${rand()}, ${rand()}, ${rand()})`;
        },
        hsl: () => {
            const h = random.number.integer(0, 360);
            const s = random.number.float(0, 1);
            const l = random.number.float(0, 1);
            return `hsl(${h}, ${s * 100}%, ${l * 100}%)`;
        }
    },
    bool: () => {
        const rand = random.number.integer(0, 1);

        if (rand == 0) {
            return false;
        } else {
            return true;
        }
    },
    fromArray: (array = [1, 2, 3, 4, 5]) => {
        return array[random.number.integer(0, array.length - 1)];
    },
    time: () => {
        const hours = random.number.integer(0, 23).toString().padStart(2, '0');
        const minutes = random.number.integer(0, 59).toString().padStart(2, '0');
        const seconds = random.number.integer(0, 59).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
}

// Adds the enum ability to JS
function Enum(enumValues = []) {
    const enumObj = {};

    for (let i = 0; i < enumValues.length; i++) {
        let [name, value] = enumValues[i].split('=');

        if (value === undefined) {
            // If there is no "=" in the enum value, treat it as an integer
            value = i;
        } else {
            // If there is an "=", parse the value as an integer if it's a number, leave it as a string otherwise
            value = Number.isNaN(parseInt(value)) ? value : parseInt(value);
        }

        enumObj[name] = value;
    }

    Object.freeze(enumObj);
    return enumObj;
}

// Checks if the year is leap or not
function isLeapYear(year = 0) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Alphanumeric features
const alphanumeric = {
    generate: (maxLength = 10) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        for (let i = 0; i < maxLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }

        return result;
    },
    test: (str = '') => {
        if (typeof str !== 'string') {
            return false;
        }

        const alphanumericRegex = /^[0-9a-zA-Z]+$/;
        return alphanumericRegex.test(str);
    },
    generateWithPrefix: (prefix = '', maxLength = 10) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = prefix;

        for (let i = prefix.length; i < maxLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }

        return result;
    },
    generateWithSuffix: (suffix = '', maxLength = 10) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        for (let i = 0; i < maxLength - suffix.length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }

        return result + suffix;
    }
}

// Checks for the email if it's valid or not
function isValidEmail(email = '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// More options arrays
const array = {
    shuffler: (array = []) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },
    sum: (array = []) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    },
    max: (array = []) => {
        if (array.length === 0) {
            return null;
        }
        return Math.max(...array);
    },
    min: (array = []) => {
        if (array.length === 0) {
            return null;
        }
        return Math.min(...array);
    },
    last: (array = []) => {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }
}

// Generates random passwords
function passwordGenerator(minLength = 8, maxLength = 14) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let password = '';
    let length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    let useVowels = Math.floor(Math.random() * 2) === 0;

    for (let i = 0; i < length; i++) {
        if (useVowels) {
            password += vowels[Math.floor(Math.random() * vowels.length)];
        } else {
            password += consonants[Math.floor(Math.random() * consonants.length)];
        }
        useVowels = !useVowels;
    }

    let replaceIndex = Math.floor(Math.random() * length);
    password = password.slice(0, replaceIndex) + numbers[Math.floor(Math.random() * numbers.length)] + password.slice(replaceIndex + 1);

    return password;
}

// Creates an element
class ElementCreator {
    constructor(element) {
        this.element = element;
        this.class = '';
        this.id = '';
        this.innerHTML = '';
        this.properties = {};
    }

    // Required so it can be added
    add() {
        const el = document.createElement(this.element);
        el.innerHTML = this.innerHTML;

        if (this.class != '') {
            el.className = this.class;
        }

        if (this.id != '') {
            el.id = this.id;
        }

        for (let [prop, val] of Object.entries(this.properties)) {
            el[prop] = val;
        }

        return el;
    }

    // Selects the parent of the add
    parent(selector) {
        const parent = document.querySelector(selector);
        parent.appendChild(this.add());
    }

    // Sets properties
    setProperties(properties = {}) {
        this.properties = properties;
    }
}

// Graphing system
function graph(selector, data, {
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
} = {}) {
    const el = document.querySelector(selector);
    const ctx = el.getContext('2d');
    const padding = 50;
    const height = el.height - padding * 2;
    const width = el.width - padding * 2;
    const max = Math.max(...data.map(point => point.y));
    const min = Math.min(...data.map(point => point.y));
    const xScale = width / (data.length - 1);
    const yScale = height / (max - min);

    // Draw x and y axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height + padding);
    ctx.lineTo(width + padding, height + padding);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Draw x and y labels
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.fillStyle = textColor
    ctx.fillText(xLabel, el.width / 2, el.height - padding / 2);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, -el.height / 2, padding / 2);
    ctx.restore();

    // Draw title
    ctx.fillText(title, el.width / 2, padding / 2);

    // Draw gridlines
    if (showGrid) {
        ctx.beginPath();
        ctx.setLineDash([5, 3]);
        ctx.strokeStyle = gridColor;
        for (let i = 1; i < data.length; i++) {
            ctx.moveTo(padding + i * xScale, padding);
            ctx.lineTo(padding + i * xScale, height + padding);
            ctx.moveTo(padding, padding + i * yScale);
            ctx.lineTo(width + padding, padding + i * yScale);
        }
        ctx.stroke();
    }

    // Draw data points
    ctx.beginPath();
    ctx.fillStyle = lineColor;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(padding, height + padding - (data[0].y - min) * yScale);
    for (let i = 1; i < data.length; i++) {
        ctx.lineTo(padding + i * xScale, height + padding - (data[i].y - min) * yScale);
    }
    ctx.stroke();

    for (let i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.arc(padding + i * xScale, height + padding - (data[i].y - min) * yScale, dotSize, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// More options for maths
const math = {
    ln: (num = NaN) => Math.log(num),
    xor: (a, b) => (a || b) && !(a && b),
    nor: (a, b) => !(a || b),
    nand: (a, b) => !(a && b),
    calc: (a = NaN, b = NaN, op = '') => {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            case '%':
                return a % b;
            case '':
                throw new Error('Choose an operator "+, -, *, /, %"');
            default:
                throw new Error(`Invalid operator: ${op}`);
        }
    },
    isPrime: (number = NaN) => {
        // Check if number is less than 2 or not an integer
        if (number < 2 || !Number.isInteger(number)) {
            return false;
        }

        // Check if number is divisible by any integer from 2 to its square root
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        // Number is prime if it passes all checks
        return true;
    }
}

// The new system of popups
const popup = {
    alert(msg = '') {
        // Creates the box
        const box = document.createElement('div');
        box.classList.add('xorio-popup-box');
        box.innerText = msg;
        box.style.boxShadow = `0 0 0 ${screen.width * 2}px rgba(0, 0, 0, .7)`;
        document.body.appendChild(box);

        // Creates the buttons
        const btns = document.createElement('div');
        btns.classList.add('xorio-popup-btns');
        btns.innerHTML = '<button class="xorio-popup-btn">OK</button>';
        box.appendChild(btns);

        document.body.style.pointerEvents = 'none';

        // Fades in the box
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.top = '50%';
        });

        const ok = btns.querySelector('.xorio-popup-btn');

        ok.focus();

        // Fades out the box and removes it when the OK button is clicked
        ok.addEventListener('click', () => {
            box.style.top = '45%';
            box.style.opacity = 0;
            document.body.style.removeProperty('pointer-events');
            setTimeout(() => box.remove(), 200);
        });
    },
    prompt(msg = '', value = '') {
        // Creates the box
        const box = document.createElement('div');
        box.classList.add('xorio-popup-box');
        box.innerText = msg;
        box.style.boxShadow = `0 0 0 ${screen.width * 2}px rgba(0, 0, 0, .7)`;
        document.body.appendChild(box);

        // Creates the input
        const input = document.createElement('input');
        input.classList.add('xorio-popup-input');
        input.value = value;
        box.appendChild(input);

        input.focus();

        // Creates the br
        const br = document.createElement('br');
        box.insertBefore(br, input);

        // Creates the buttons
        const btns = document.createElement('div');
        btns.classList.add('xorio-popup-btns');
        btns.innerHTML = `
        <button class="xorio-popup-btn">OK</button>
        <button class="xorio-popup-btn">Cancel</button>
        `;
        box.appendChild(btns);

        document.body.style.pointerEvents = 'none';

        // Fades in the box
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.top = '50%';
        });

        const ok = btns.querySelector('.xorio-popup-btn:first-child');
        const cancel = btns.querySelector('.xorio-popup-btn:last-child');

        // Fades out the box and removes it when the ESC key is pressed
        document.addEventListener('keyup', e => {
            if (e.key == 'Escape') cancel.click();
            else if (e.key == 'Enter') ok.click();
        });

        return new Promise((resolve, reject) => {
            ok.addEventListener('click', () => {
                box.style.top = '45%';
                box.style.opacity = 0;
                document.body.style.removeProperty('pointer-events');
                setTimeout(() => box.remove(), 200);
                resolve(input.value);
            });
            cancel.addEventListener('click', () => {
                box.style.top = '45%';
                box.style.opacity = 0;
                document.body.style.removeProperty('pointer-events');
                setTimeout(() => box.remove(), 200);
                reject(null);
            });
        });
    },
    confirm(msg = '') {
        // Creates the box
        const box = document.createElement('div');
        box.classList.add('xorio-popup-box');
        box.innerText = msg;
        box.style.boxShadow = `0 0 0 ${screen.width * 2}px rgba(0, 0, 0, .7)`;
        document.body.appendChild(box);
        document.body.style.pointerEvents = 'none';

        // Fades in the box
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.top = '50%';
        });

        // Creates the buttons
        const btns = document.createElement('div');
        btns.classList.add('xorio-popup-btns');
        btns.innerHTML = `
        <button class="xorio-popup-btn">OK</button>
        <button class="xorio-popup-btn">Cancel</button>
        `;
        box.appendChild(btns);

        const ok = btns.querySelector('.xorio-popup-btn:first-child');
        const cancel = btns.querySelector('.xorio-popup-btn:last-child');

        ok.focus();

        return new Promise((resolve, reject) => {
            ok.addEventListener('click', () => {
                box.style.top = '45%';
                box.style.opacity = 0;
                document.body.style.removeProperty('pointer-events');
                setTimeout(() => box.remove(), 200);
                resolve(true);
            });
            cancel.addEventListener('click', () => {
                box.style.top = '45%';
                box.style.opacity = 0;
                document.body.style.removeProperty('pointer-events');
                setTimeout(() => box.remove(), 200);
                reject(false);
            });
        });
    }
}

class CSV {
    constructor(path = '') {
        this.path = path;
        this.data = '';
        this.column = 0;
        this.row = 0;
    }

    getFile() {
        return fetch(this.path)
            .then(res => res.text())
            .then(data => {
                this.data = data;
                this.column = data.split('\n')[0].split(',').length;
                this.row = data.split('\n').length;
            });
    }

    getColumn(index = 0) {
        if (index < 0 || index >= this.column) {
            throw new Error('Invalid column index');
        }

        const lines = this.data.split('\n');
        const columnValues = lines.slice(1)
            .map(line => line.split(',')[index]);

        return columnValues;
    }

    getRow(index = 0) {
        if (index < 0 || index >= this.row) {
            throw new Error('Invalid row index');
        }

        const lines = this.data.split('\n');
        const rowData = lines[index + 1].split(',');

        return rowData;
    }

    setColumn(index, columnData) {
        if (index < 0 || index >= this.column) {
            throw new Error('Invalid column index');
        }

        const lines = this.data.split('\n');
        for (let i = 1; i < lines.length; i++) {
            const rowValues = lines[i].split(',');
            rowValues[index] = columnData[i - 1];
            lines[i] = rowValues.join(',');
        }
        this.data = lines.join('\n');
    }

    setRow(index, rowData) {
        if (index < 0 || index >= this.row) {
            throw new Error('Invalid row index');
        }

        const lines = this.data.split('\n');
        lines[index + 1] = rowData.join(',');
        this.data = lines.join('\n');
    }

    displayAsArrays() {
        const lines = this.data.split('\n');
        const header = lines[0].split(',');
        const rows = lines.slice(1).map(line => line.split(','));

        return {
            header,
            rows
        };
    }

    displayAsTable() {
        const lines = this.data.split('\n');
        const header = lines[0].split(',');
        const rows = lines.slice(1).map(line => line.split(','));

        const columnWidths = header.map((column, index) => {
            const maxLength = Math.max(column.length, ...rows.map(row => row[index].length));
            return maxLength;
        });

        const separator = '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+';
        const formattedHeader = '| ' + header.map((column, index) => column.padEnd(columnWidths[index])).join(' | ') + ' |';
        const formattedRows = rows.map(row => '| ' + row.map((cell, index) => cell.padEnd(columnWidths[index])).join(' | ') + ' |');

        return [separator, formattedHeader, separator, ...formattedRows, separator].join('\n');
    }

    getSize() {
        return [this.column, this.row];
    }
}