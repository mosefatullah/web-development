## W3C - Web Accessibility Initiative (WAI)

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.

### Developing for Web Accessibility :

- **Associate a label with every form control**

```html
<label for="username">Username</label>
<input id="username" type="text" name="username" />
```

- **Include alternative text for images**

```html
<img src="example.jpg" alt="Example image" />
```

- **Identify page language and language changes**

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <title>Example</title>
 </head>
 <body>
  <p>Default - English text.</p>
  <p>The title is "<span lang="fr">Le Bon Usage</span>".</p>
 </body>
</html>
```

- **Use mark-up to convey meaning and structure**

```html
<section>
 <article>
  <h2>Superbear saves the day</h2>
  <time datetime="2015-08-07">7 Aug 2015</time>
  <p>
   The city's favorite bear yet again proves his mettle by rescuing a young cat
   from a tree. Witnesses say that Superbear's efforts were not appreciated by
   the feline, who inflicted some minor scratch wounds on his rescuer.
  </p>
  <aside>
   <h3>Related Articles</h3>
   <ul>
    <li><a href="#">Bear receives key to city</a></li>
    <li><a href="#">Superbear stands for mayor</a></li>
   </ul>
  </aside>
 </article>
</section>
```

```html
<form action="#" method="post">
 <div role="search">
  <label for="search">Search for</label>
  <input type="search" id="search" aria-describedby="search-help" />
  <div id="search-help">Search records by customer id or name</div>
  <button type="submit">Go</button>
 </div>
</form>
```

- **Help users avoid and correct mistakes**

```html
<label for="phone">Phone</label>
<input
 id="phone"
 name="phone"
 type="tel"
 pattern="^(\(?0[1-9]{1}\)?)?[0-9 -]*$"
 aria-describedby="phone-desc"
/>
<p id="phone-desc">For example, (02) 1234 1234</p>
```

- **Reflect the reading order in the code order**

```html
<h3>Space trainers</h3>
<img src="images/trainer.png" alt="..." />
<p>Space...</p>
<a href="...">Add to cart</a>
```

- **Write code that adapts to the user’s technology**

```css
/* On narrow viewports, make the navigation full width */
@media screen and (min-width: 25em) {
 #nav {
  float: none;
  width: auto;
 }
 #main {
  margin-left: 0;
 }
}

/* On wider viewports, put the navigation on the left */
@media screen and (min-width: 43em) {
 #nav {
  float: left;
  width: 24%;
 }
 #main {
  margin-left: 27%;
 }
}
```

- **Provide meaning for non-standard interactive elements**

```html
<nav aria-label="Main Navigation" role="navigation">
 <ul>
  <li><a href="...">Home</a></li>
  <li><a href="...">Shop</a></li>
  <li class="has-submenu">
   <a aria-expanded="false" aria-haspopup="true" href="...">SpaceBears</a>
   <ul>
    <li><a href="...">SpaceBear 6</a></li>
    <li><a href="...">SpaceBear 6 Plus</a></li>
   </ul>
  </li>
  <li><a href="...">MarsCars</a></li>
  <li><a href="...">Contact</a></li>
 </ul>
</nav>
```

- **Ensure that all interactive elements are keyboard accessible**

```js
var buttonExample = document.getElementById("example-button");

buttonExample.addEventListener("keydown", function (e) {
 // Toggle the menu when RETURN is pressed
 if (e.keyCode && e.keyCode == 13) {
  toggleMenu(document.getElementById("example-button-menu"));
 }
});

buttonExample.addEventListener("click", function (e) {
 // Toggle the menu on mouse click
 toggleMenu(document.getElementById("example-button-menu"));
});
```

- **Avoid CAPTCHA where possible** <br/>
  If CAPTCHA really needs to be included, ensure that it is simple to understand and includes alternatives for users with disabilities, such as:
  - Providing more than two ways to solve the CAPTCHAs
  - Providing access to a human representative who can
  - bypass CAPTCHA
  - Not requiring CAPTCHAs for authorized users.

## MDN Docs

### Accessibility

- **Good semantics**

```html
<!-- DO THIS -->
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
 <li>Here is</li>
 <li>a list for</li>
 <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
 This is the first subsection of my document. I'd love people to be able to find
 this content!
</p>

<h2>My 2nd subheading</h2>

<p>
 This is the second subsection of my content, which I think is more interesting
 than the last one.
</p>

<!-- DON'T DO THIS -->
<span style="font-size: 3em">My heading</span> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<span style="font-size: 2.5em">My subheading</span>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<span style="font-size: 2.5em">My 2nd subheading</span>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

- **Page layouts**

```html
<!-- DO THIS -->
<header>
 <h1>Header</h1>
</header>

<nav>
 <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
 <!-- It contains an article -->
 <article>
  <h2>Article heading</h2>

  <!-- article content in here -->
 </article>

 <aside>
  <h2>Related</h2>

  <!-- aside content in here -->
 </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
 <!-- footer content in here -->
</footer>
```

- **UI controls**

```html
<!-- DO THIS -->
<p>
 <button data-message="This is from the first button">Click me!</button>
 <button data-message="This is from the second button">Click me too!</button>
 <button data-message="This is from the third button">And me!</button>
</p>
<div data-message="This is from a button" tabindex="0" role="button">
 Click me!
</div>

<!-- DON'T DO THIS -->
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

```js
// DO THIS
document.onkeydown = (e) => {
 // The Enter/Return key
 if (e.key === "Enter") {
  document.activeElement.click();
 }
};
```

```html
<!-- DO THIS -->
<p>
 Whales are really awesome creatures.
 <a href="whales.html">Find out more about whales</a>.
</p>

<!-- DON'T DO THIS -->
<p>
 Whales are really awesome creatures. To find out more about whales,
 <a href="whales.html">click here</a>.
</p>
```

```html
<!-- DO THIS -->
<div>
 <label for="name">Fill in your name:</label>
 <input type="text" id="name" name="name" />
</div>

<!-- DON'T DO THIS -->
Fill in your name: <input type="text" id="name" name="name" />
```

- **Accessible data tables**

```html
<table>
 <tr>
  <td>Name</td>
  <td>Age</td>
  <td>Pronouns</td>
 </tr>
 <tr>
  <td>Gabriel</td>
  <td>13</td>
  <td>he/him</td>
 </tr>
 <tr>
  <td>Elva</td>
  <td>8</td>
  <td>she/her</td>
 </tr>
 <tr>
  <td>Freida</td>
  <td>5</td>
  <td>she/her</td>
 </tr>
</table>
```

- **Text alternatives**

```html
<img src="dinosaur.png" />

<img
 src="dinosaur.png"
 alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
/>

<img
 src="dinosaur.png"
 alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
 title="The Mozilla red dinosaur"
/>

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
 The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
 a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

```html
<figure>
 <img
  src="dinosaur.png"
  alt="The Mozilla Tyrannosaurus"
  aria-describedby="dinodescr"
 />
 <figcaption id="dinodescr">
  A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human,
  with small arms, and a large head with lots of sharp teeth.
 </figcaption>
</figure>

<h3>
 <img src="article-icon.png" alt="" />
 Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

- **More on links**

```html
<a target="_blank" href="https://www.wikipedia.org/"
 >Wikipedia (opens in a new window)</a
>
<a target="_blank" href="2017-annual-report.ppt"
 >2017 Annual Report (PowerPoint)</a
>
```

## Bangladesh ICT Division

- [National Web Accessibility Guideline](https://msw.portal.gov.bd/sites/default/files/files/msw.portal.gov.bd/page/7e32948a_e1ab_4471_baed_910f872956a7/Draft%20National%20Web%20Accessibility%20Guideline%20%281%29%20%281%29.pdf)