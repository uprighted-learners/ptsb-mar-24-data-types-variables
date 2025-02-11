# Data!

Manipulating data is a lot like preparing food.

We start out with ingredients and use tools to reshape them into something new one step at a time.

<figure>
<img src="https://res.cloudinary.com/btvca/image/upload/v1643915006/curriculum/chefsstation_orp2ws.jpg" width="40%" />

<figcaption><a href="https://unsplash.com/photos/x5SRhkFajrA">Chef’s Station | Tom Quackenbush</a></figcaption>
</figure>

---

# Objectives

- Syntax basics
  - Simple values and types
  - Operators
  - Expressions
  - Statements

Prioritize _understanding concepts_, knowing _where to looks things up_, _testing out your ideas_, and _noting the results of those tests_.

## Do _not_ try to memorize everything.

---

# Values

- A _value_ is a piece of information or _data_.
- There are seven _types_ of _data_ in JavaScript.
- Different _data types_ have different advantages and disadvantages.
- We use _data_ to represent stuff from the real world often:
  - a list of students
  - the temperature throughout the day

---

# Simple Data Types Overview

- Numbers
- Strings
- Booleans
- Null and Undefined
- Special values
- Not discussed here:
  - BigInt
  - Symbol
- More complex data formats will be discussed later.

> [Mozilla Developer Network | Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

# _What_ are Numbers

A **number** is what it sounds like -- any integer or decimal.

- `10`
- `-12`
- `3.14`

---

# _When_ and _Why_ to Use Numbers

We can use numbers to help solve many problems:

- Tracking amounts and counts
- Answering yes or no questions
- Bookmarking a place in a list
- Simulating movement in a direction

---

# _What_ are Strings

A **string** is a collection of _characters_, like a word or a sentence.

```js
"apple"
"Cherry Pie"
"&%$!"
"1234"
"    "
```

---

# _When_ and _Why_ to Use Strings

Strings are used to help solve problems like these:

- Storing names of people or items
- Storing locations and addresses
- Acting as very simple lists
- Splitting sets of characters at specific points
  - e.g. Separating first and last names, removing the $ from prices, etc.

---

# Strings Have Indexes

String indexes start at 0, and not 1, like some would expect.

Think of the indexes as pointing at the *spaces between* characters, as in this diagram:

```
| B | L | U | E | B | E | R | R | Y |
0   1   2   3   4   5   6   7   8   9
```

So with this picture in your mind

```js
"blueberry".slice(0, 4)
```
  
What portion of the word would you get back?

[Mozilla Developer Network: String.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

---

# _What_ are Booleans

A **boolean** is a value that is either true or false, and is represented in JavaScript with the keywords `true`, and `false`.

- Many operations return booleans and are used to run code conditionally (more on that later)

- Pretty much any data in JavaScript can be evaluated as a boolean

- often we use implicit truthy, or falsy values instead of the actual keywords `true` and `false`

(It's named after _[George Boole](https://en.wikipedia.org/wiki/George_Boole)_,
a 19th-century mathematician who invented [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra).)

---

# _When_ and _Why_ to Use Booleans

Booleans are often used to solve these sorts of problems:

- Answering yes/no questions
  - e.g. If this is true/false, then...
- Turning features on and off
  - e.g. Showing the mobile menu icon or hiding it
- Starting and stopping processes
  - We'll discuss this _When_ covering loops

---

# Null and Undefined

- **null** means "nothing" or "no"
- **undefined** means "never has been" or "does not exist"

- These are often used to detect the presence or absence of data.

---

# Special Values

Sometimes the return value is a special value!

```js
5 / 0; // return value: Infinity
"cookie" * 10; // return value: NaN, Not A Number
```

---

# _How_ to Use Values

We can combine, manipulate, and reference values to write programs using these tools:

- Operators
- Expressions
- Statements
- Functions

---

# _What_ are Operators

Values can be combined, split up, or changed using **operators**.

- PLUS (`+`)
- TIMES (`*`)
- POWER (`**`)
- DOT (`.`)
- ASSIGNMENT (`=`)
- COMPARISON (`===`)

An operator _sends a message_ to the value after it:

- `1 + 2` sends the number `1` the message `please add 2 to yourself.`

---

# _When_ and _Why_ to Use Operators

Like data there are several different _types_ of operators that are used in different circumstances.

- Assignment
- Comparison
- Arithmetic
- Logical
- Conditional
- And more advanced ones not discussed here

[MDN | Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

# Expressions

**Expressions** are unprocessed values that can be grouped together using `( )`.

The computer **evaluates** _expressions_ to create the **return value** -- the value _returned_ to you at the end of the _evaluation_ process.

Note: Empty `()` is an _expression_ with no defined value. You'll see a lot of these empty _expressions_ throughout the course and your career.

---

# Expression Examples

We can use Node in the terminal to see the _return values_ of these expressions.

- `2 + 2`
- `'five' + 'five'`
- `( 1 < 2 )`
- `( true === false )`
- `( 'here' !== 'there' )`
- `( (1 < 2) && (2 < 3) )`

---

# Statements

**Statements** are key words, expressions, and code blocks combined.

We use them to tell the computer more information about what our expressions are meant to do.

They generally take on this format, but there are exceptions we cover later:

```js
keyword name (expression) { code block }
```

Note: We cannot use _variables_ to save statements for later. Why? What could we use instead?

[Mozilla Developer Network | Statement and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

---

# Statements Examples

```js
break; // key word

doSomething(); // Variables and function names act as key words once defined

let someVariable = 'some value';

if (true) {
  console.log('show me something in the terminal');
}

for (let i = 1; i < 2; i++) {
  console.log('For Loops use 3 expressions separated by ;s in their structure');
}

function doSomething() {
  console.log('Functions do things.');
}
```

---

# Variables

- A **variable** is a **name** for a value.
- The **assignment** operator _assigns_ a _variables_ to a value.
  - It looks like an equal sign, but it does not mean "equals".
  - often preceded by `let` as in "Let there be light" or "Let x be assigned to 10".

```js
let color = "blue";
let fruit = "berry";
```

---

# Variables Cont.

Tip: _Anywhere_ you would use a _value_ or _expression_, you can use a variable instead _and vice versa_:

```js
color + fruit;         // "blueberry"
fruit.toUpperCase();   // "BERRY"
"berry".toUpperCase(); // "BERRY"

if (color) {
  // do some stuff here
}

if ("blue") {
  // do some stuff here
}
```

[ Mozilla Developer Network | Declarations ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#declarations)

---

# Declarations

Declarations are key words we use to say we are creating a variable _for the first time_.

- `let` is the easiest way to **declare** a variable in JavaScript
- `const` and `var` are other **declarations**, but they have specific rules and caveats.
- Without a _declaration_ (`let`, `const`, `var`) the variable becomes **global** (which is dangerous).
- Stick with `let` unless otherwise needed.

_How is declaring a variable different from assigning one?_

[Mozilla Developer Network | Statements and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

---

# Common Declaration Mistake

We can only _declare_ a variable once in each **scope** or code block. Otherwise, you will get an error:

```js
SyntaxError: Identifier 'coolNumber' has already been declared
```

If you see this error then try again without the _declaration_.

```js
let coolNumber = 1;
// => undefined

let coolNumber = coolNumber + 2;
// => SyntaxError: Identifier 'coolNumber' has already been declared

coolNumber = coolNumber + 2; // <= no "let", "const", or "var" this time
// => 3 
```

---

# Best Practices when Naming Variables

Which is easier to understand without asking someone else?

This?

```js
60 * 60 * 24;
```

Or this?

```js
let secondsPerMinute = 60;
let minutesPerHour = 60;
let hoursPerDay = 24;
let secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
```

How can you use this knowledge to be an effective teammate?

---

# The Pointer Metaphor

```js
let snack = "Apple";
```

![snack-apple](https://res.cloudinary.com/btvca/image/upload/v1574445202/curriculum/snack-apple_ltysdv.svg)

Think of a variable as a name that **points** to a value.

> Note: Variables point. Values do not.

---

# Reassigning Variables

We tell variables what to point to when we **assign** and **reassign** them. If we don't assign them, they point to `undefined` by default.

```js
let color;           // declare a variable but never assign it to a value
color = "blue";      // assign the variable to a string values "blue"
let fruit = "berry"; // declare fruit variable and assign to "berry" value
color + fruit;       // combine the variables (and their values) to make "blueberry"

color = "black";     // reassigning again but this time to "black"
color + fruit;       // combining again to now make "blackberry"
```

---

# Assigning Variables to Other Variables

If _variables_ are a kind of _expression_ that will be processed into _values_, what happens in a scenario like this?

```js
let fruit = "Apple";
let snack = fruit;
```

|                                                                                                             | <br/>                                                                                                            |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![snack-fruit](https://res.cloudinary.com/btvca/image/upload/v1574445202/curriculum/snack-fruit_momdep.svg) | `snack` and `fruit` end up _pointing_ to the same _value_. <br/>This is like placing two labels on the same box. |

---

# Constants: Variables that Aren't Variable

- The keyword `const` is just like `let`, but _prevents reassignment_

```js
const pi = 3.14159;
```

- When using const to declare a variable, the assignment is _constant_.
  - Trying to reassign it will result in a TypeError.

```js
pi = 7;
TypeError: Assignment to constant variable.
```

> WARNING: `const` prevents _reassignment_, but it does not stop a value from changing on its own.

---

# { Scope }

- **Scope** refers to the section of code where a variable can be used, like a territory or jurisdiction.
- A variable's scope is determined when it is _declared_.
- We can identify scopes by looking for `{}`s and indentations. This is why formatting your code really matters.
- Starting a new pair of curly braces `{}` opens a new scope.
- Indented variables, these are in between the `{}`, are located in an _interior_ scope.
- Trying to use a variable outside of its scope results in an error.

> ✨🪞✨<br> _Scope is like a one way mirror:_ <br>
> You can look out (to exterior scopes), <br>
> but you cannot look in (to interior scopes).

---

# { Scope Example }

<figure>
  <img src='https://res.cloudinary.com/btvca/image/upload/v1643917202/curriculum/scopeexample.png' width="70%"/>
  <figcaption>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope">Mozilla Developer Network | Scope</a><br/>
    <a href="https://www.w3schools.com/js/js_scope.asp">W3 Schools | Scope</a>
  </figcaption>
</figure>

---

# Summary: Variables

- _Variables_ are names for values
- _Declaring_ a variable says what its _scope_ is
- _Assigning_ a variable sets the value it's naming.
- You can have many names for the same value.