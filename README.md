# The answers are given below.


### 📝 Ans to the question no - 01

| Method | What is Defferent |
| :--- | :--- |
| **getElementById** | Finds one specific element using its unique ID. |
| **getElementsByClassName** | Finds all elements that have the same class name. |
| **querySelector** | Uses CSS style selectors and find the first match. |
| **querySelectorAll** | Uses CSS style selectors to find every matching element. |

---

### 📝 Ans to the question no - 02

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

📝 Ans to the question no - 03

Event Bubbling is a mechanism in the **DOM (Document Object Model)** where an event that happens on a child element first runs on that element and then propagates (bubbles up) to its parent elements one by one.



## Event Bubbling Works

How it works: When you click a child element, you are also clicking its parent elements. The event travels from the inside to the outside, one by one

---


📝 Ans to the question no - 04
What is Event Delegation?

Event Delegation is instead of adding a "click" listener to 100 different list items, you add one single listener to their Parent.

It is used because: - It's faster for the browser.

Because of Bubbling, the parent can "catch" the clicks from its children.

It works even if you add new items later.

---

### 5. Ans to the question no -05


| Method | Selection Type | Result |
| :--- | :--- | :--- |
| **getElementById** | By unique **ID** | 1 Element |
| **getElementsByClassName** | By **Class** name | A List (Live) |
| **querySelector** | By **CSS Selector** | 1st Match |
| **querySelectorAll** | By **CSS Selector** | All Matches |



---



