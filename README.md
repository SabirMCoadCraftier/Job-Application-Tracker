###  Ans to the question no - 01

### Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll describe in below

In JavaScript DOM manipulation, these methods are used to select elements from the document.  

---

 getElementById()

### Definition: getElementById() is Selects a single element by its id. it returns Aa single element object and `null` if no element is found

### Example:

```javascript
const element = document.getElementById("title");
console.log(element);
```

---

### getElementsByClassName()

### Definition: getElementsByClassName() Selects elements by their **class name** and it returns an **HTMLCollection** (live collection) Updates automatically if DOM changes


### Example:

```javascript
const elements = document.getElementsByClassName("box");
console.log(elements);
```

---

###  querySelector()

### Definition: querySelector() Selects the **first matching element** using a CSS selector and returns `null` if no match is found


### Example:

```javascript
const element = document.querySelector(".box");
console.log(element);
```

---

### querySelectorAll()

### Definition: querySelectorAll() is Selects **all matching elements** using a CSS selector and returns Does NOT automatically update when DOM changes



###  Example:

```javascript
const elements = document.querySelectorAll(".box");
console.log(elements);
```

---


###  Ans to the question no - 02

Adding a new element for **3-step process**:

1. **Create:** Use `document.createElement('tag')`.
2. **Customize:** Add text using `.textContent` or classes using `.classList`.
3. **Insert:** Use `.appendChild()` to put it on the page.

```javascript
// Step 1: Create
const newTag = document.createElement('p');

// Step 2: Customize
newTag.textContent = "This is a new paragraph!";
newTag.style.color = "blue";

// Step 3: Insert into a parent element
document.body.appendChild(newTag);
```


---

### Ans to the question no - 03

Event Bubbling is a mechanism in the **DOM (Document Object Model)** where an event that happens on a child element first runs on that element and then propagates (bubbles up) to its parent elements one by one.


How it works: When you click a child element, you are also clicking its parent elements. The event travels from the inside to the outside, one by one

---


📝 Ans to the question no - 04

Event Delegation is instead of adding a "click" listener to 100 different list items, you add one single listener to their Parent.

It is used because It's faster for the browser.Because of Bubbling, the parent can "catch" the clicks from its children.It works even if you add new items later.





---

### Ans to the question no -05


### Difference Between preventDefault() and stopPropagation()

In JavaScript event handling, `preventDefault()` and `stopPropagation()` are two important methods of the Event interface.  
Although they are often used together, they serve different purposes. Below are the key differences between them.

---

## preventDefault()

### Definition:
`preventDefault()` method prevents the browser's default behavior for a specific event.

### It is stops the default action associated with the event.

### Example:

```javascript
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  console.log("Form submission prevented.");
});
```

---

## stopPropagation()

### Definition:
`stopPropagation()` method stops the event from propagating (bubbling or capturing) through the DOM tree.

### It is prevents the event from reaching parent elements.


### Example:

```javascript
document.querySelector(".child").addEventListener("click", function(event) {
  event.stopPropagation(); 
  console.log("Child clicked.");
});
```

---



