# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](screenshot.jpg)

### Links

- Solution URL: [View codes](https://github.com/jesuisbienbien/intro-section-with-dropdown-navigation-main)
- Live Site URL: [View Live site](https://jesuisbienbien.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Grid
- Mobile-first workflow
- Javascript

### What I learned

**_overlay effect over the entire page except sidebar_**

```css
.overlay {
  transition: all 0.2s ease-out;
}

.overlay.open {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in;
}
```

**_features items dropdown_**

```css
.features-tabs,
.company-tabs {
  overflow-y: hidden;
  max-height: 0;
  transition: all 0.5s ease-in-out;
}

.features-tabs-open {
  overflow-y: hidden;
  max-height: 12rem;
  transition: all 0.5s ease-in-out;
}

.company-tabs-open {
  overflow-y: hidden;
  max-height: 9.375rem;
  transition: all 0.5s ease-in-out;
}
```

### Continued development

### Useful resources

## Author
