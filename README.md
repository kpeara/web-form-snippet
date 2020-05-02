# My Form Snippet

A snippet I made when learning Vue and Tailwind CSS that I made for anyone to use. Thanks to the power of vue components and tailwind classes, this form can comes in a variety of colors and is responsive to different sizes.

Future plans:
- [ ] Utilize vue transitions
- [ ] Add a dark mode feature

<img src="/images/wide.png">
<p align="middle">
    <img src="/images/blue.png" width="250">
    <img src="/images/teal.png" width="250">
    <img src="/images/indigo.png" width="250">
</p>

### How to change color

The form uses the default colors provided by tailwind: blue, teal, indigo, orange, red etc.

```javascript

var app = new Vue({
    el: "#app",
    data: {
        formColor: "blue" // change color here
    }
})

```
