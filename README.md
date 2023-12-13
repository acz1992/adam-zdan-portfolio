# first-iteration_portfolio

First iteration of personal portfolio website, using just HITML5, CSS3 and vanilla JavaScript. Proficiency in libraries and frameworks seems less valuable than demonstrating a fundamental understanding of the underpinning technologies.

Therefore I thought it would be more valuable to try and make a complete portfolio site with just the fundamental front-end technologies.

To do next:

-Make Index page responsives

Other issues:
-Header animation not always working

Portfolio Page
-Plan Overlay page
-Take dummy screen shots of a few projects
-Create overlay for certain projects that need more info

-Fork Listfull, attach variables and host on vercel
-Finish Cinescape and host on vercel

Completed:
-Wire out - skills page (went with flex solution)
-Created Portfolio Page Structure
-Filled out dummy info for Portfolio page
-Collect Social Media icons
-Apply correct layout (flex)
-Link to my profiles
-Edit landing page styling (ie position via padding, font size and weight etc)
-Find Temporary Pic (CV one)
-Re-structure Landing Page layout
-Fix bug on index and portfolio page with sudden appearance of scroll
-Add background
-Add selected effect for nav bar
-Fix any page-specific alignment issues
-Make Header responsive
-Make Skills Page responsive
-Make Portfolio Page responsive
-Fix bug in Portfolio that made buttons unclickable
-Make Contact Me Page responsive
-Redesign Landing page - swap pic and text. Make heading smaller and text smaller

Second Iteration:
-recreate site as one continuous page that jumps to each section (like Figma)
-for Skills and Portfolio, use grid technique: grid-template-columns: repeat(autofit, minmax(x, 1fr))

Bugs:

-1 Header:
-On index and portfolio pages where there is overflow on y axis, ul elements in header shift left due to appearence of scroll bar
-SOLVED: add overflow-y: scroll css property to body, so that scroll bar is on all pages

-2 Portfolio page:
-when clicking on a card, card expanded but page automatically jumped back to the top. When adding preventDefault(), prevented card button event Listeners.
-SOLVED: Outside of adding Eventlistener for cards, add condition that if it isnt button, stopPropogation
