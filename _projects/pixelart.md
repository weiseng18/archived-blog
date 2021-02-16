---
layout: project
name: pixelart

repo: pixelart
---

## Description

In this project, I created a web app to generate PNGs / GIFs from user-created pixel art.

It includes:

* a start menu to choose between
  * creating a new file
  * continuing from where you left off
  * loading a local `.pix` file
* color pickers (slider/palette/history)
* a variety of basic drawing tools
* basic exporting, saving tool
  * export to `.png` or `.gif`
  * save to `.pix` or `.frames`, which are special file formats for use in this project

## External resources

[lodash](https://github.com/lodash/lodash)

* sole purpose is for deep cloning of Javascript 2D arrays

[dragula](https://github.com/bevacqua/dragula)

- used for drag and drop within the frames area

[jsgif](https://github.com/antimatter15/jsgif)

* used to convert HTML5 Canvas to `.gif`