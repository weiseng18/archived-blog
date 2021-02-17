---
layout: post
title:	"My first substantial personal project"
---

I served my 2 years of National Service in a stay-out HQ unit. This meant that I had the luxury of free time to pursue my personal interests outside of office hours. With the ample free time, I decided that I ought to commit some time to preparation for university and beyond.

Initally, I did some math revision. Specifically, I worked on my knowledge of Calculus and Linear Algebra from A-Levels as I felt that those topics would be more relevant to my further studies. As it was purely revision, it ended up being not very intellectually stimulating - as math has always been one of my stronger aspects.

Next, I looked through my [NOI](https://noisg.comp.nus.edu.sg/noi/) notes, which were untouched for more than 2 years. It was quite fulfilling to re-write my sample code, as I gained further insight into classic algorithms, such as understanding Dijkstra's algorithm as a modified Breadth First Search (BFS). I also learnt how to use a treap, which combines properties of the binary **tr**ee and the binary h**eap**, which led to the name treap.

{:.mainidea}
Of course, there is more to preparation than just studying.

Eventually, I felt that I needed to find an avenue to apply my knowledge, and to create something concrete to show that I can go beyond the theory.

## My first project

This gave rise to what I would deem as my first project, a [maze game](https://weiseng18.github.io/maze/) where I generate a random maze using Prim's algorithm. As I already knew how Prim's algorithm works due to looking through my NOI notes, this project was relatively simple to complete. It primarily served as an opportunity for me to get used to using `git`.

On a side note, this project contained two sprites that I created using [pixilart](pixilart.com), an online pixel art editor. This actually gave me an idea for a more substantial project.

## Going for more

I thoroughly enjoyed working on my first project. Although it was relatively simple, it gave me the confidence to work on something more complicated.

I looked around for more project ideas, and one that struck me was to create an app that does the same thing as a popular existing app. The existing app would already have gone through lots of prior testing and improvements to reach its current state of popularity. This means that I would have a good reference to explore UI interactions, and a reference for possible features to implement. This would reduce a lot of planning time, and allows me to focus more on implementation and logic.

Coupled with the fact that at this point in time, I used [pixilart](pixilart.com) quite recently, I felt inspired to begin working on my first substantial project.

## The project - a pixel art editor

Here I will be sharing the challenges faced and some discoveries during the project. You can read more about the project [here](/projects/pixelart).

Discovering and handling edge cases was one of the interesting aspects of this project. My previous experience in coding thus far was primarily in competitive programming and H2 Computing, where the program I create deals with input of a specific format, which I did not need to validate unless otherwise stated. This also made it easier to expect the possible edge cases. In this project however, because I deal with a user interface, the input would need to be validated (and sometimes parsed), before I could use the input meaningfully. As I was designing a user interface, it also added an extra complexity to handling edge cases, in order to abide with the 8 golden rules of interface design.

Again, as I deal with a user interface, I needed to manage the back-end logic and the front-end behaviour, something that I was not really used to doing due to the nature of competitive programming and H2 Computing. In particular, the select and move tools were challenging to implement well. In order to ensure that the user gets sufficient informative feedback, the select tool needed to behave like how most select tools behave. It also needed to snap to the grid in the background; it needed to work intuitively if the user goes out of bounds. In the end, I was satisfied with my implementation of the select tool.

### Javascript quirks

Through this project, I also encountered some quirks in Javascript.

1. A `mousemove` event depends on the mouse to send a signal. This means that the frequency of the `mousemove` event is capped. If the user draws a line fast enough, `mousemove` would only trigger on certain points on the line, and not throughout the line.

	- Naturally, the solution would be to interpolate lines between each pair of `mousemove` events. I used [Bresenham's line algorithm](https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm) to do this.

2. Javascript does not really provide a simple native way to perform deep cloning. In this project, deep cloning was primarily used to maintain the history of the pixel art document, supporting the undo and redo tools. It was also used to copy objects in several instances.

	- `JSON.parse(JSON.stringify(object))` is often brought up when looking up deep cloning in Javascript. However, the object must be JSON-safe. Some of my objects that required deep cloning had functions, so this would not work.

	- The alternative was to use an external library with a deep cloning method. I used [lodash](https://github.com/lodash/lodash) to perform this.

3. In Javascript, you need to be careful with regards to the scope of `this`.

	- `this` could possibly refer to the `Window` object, or the Javascript event, or a Javascript object.

	- Using `.bind()` allows you to bind a method of the object to a specific `this`.

	- Using arrow functions

## Final note

I would highly recommend any aspiring software engineer to try a similar project, where you build an app that does the same thing as an existing popular app. The existing app would already have gone through lots of prior testing and improvements to reach its current state of popularity. You then have a good reference for UI interactions, and essential features, so the planning aspect of the project is much more manageable. As a result, you can focus more on the implementation aspect of the project.