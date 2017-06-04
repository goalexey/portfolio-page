# Alex Gorokholinsky's About Page
-
## Header
Header has property of position fixed and contains three major elements: **name logo** (left), **logo** (center) and **nav bar** (left).
All three elements were positioned with boxsizing: border-box property and give 33% width. 

**Name Logo** is animated with two keyframes methods, animating its transfor scale and text shadow.

**Logo** is animated with keyframes method of transform rotateY(360deg).

**nav bar** contains hover effects. Each nav bar component links to its own section on the page with hyper link to an id on the page. The linking is animated with jQury code stored in separate script.js file.

**Header** is also animated with keyframes changing its background color.

## About Section
About Section contains text on the left with custom google font and image on the right. Both were aligned using ```float: left;``` CSS property with a special div after them clearing the floats with ```clear: both```.
Section has custom background gradient.

## Projects Section
Projects Section contains two divs each containing img with a link wrapped to the live version of the webpage project on my github page, and two buttons linking to live version and github page of the project.
Image divs are given set width and are aligned with ```float: left``` properties.
Section has custom background gradient.

## Contact Section
Contact Section contains the worm with two input fields and text area, each wrapped in their own label tags.
