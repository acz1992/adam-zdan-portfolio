# first-iteration_portfolio

First iteration of personal portfolio website, using just HITML5, CSS3 and vanilla JavaScript. Proficiency in libraries and frameworks seems less valuable than demonstrating a fundamental understanding of the underpinning technologies.

To do:

Portfolio Page
-Plan Overlay page
-Take dummy screen shots of a few projects
-Create overlay for certain projects that need more info

-Host on github simple javascript apps
-Fork Listfull and host on vercel

Landing Page
-Find Temporary Pic (CV one)
-Re-structure layout

-Add styling:
**First Stage**
-Background (consider gray version of this: https://www.manuelringuelet.com/projects) (https://github.com/manuelpastorringuelet/personal-portfolio/blob/main/tailwind.config.ts)
-Add hover pseudo classes for nav options like (https://taryn-knerr.vercel.app/music)
-Fix any weird alignment inconsistancies

    **Second Stage**
    -Add picture on index (edit on Canva)
    -Source logos and add different skills (save imgs for future iterations)
    -Screens of DevHaus Camp apps
    -Logos of social media

-Different Individual Project pages
-sort layout

Portfolio:
-Fork CineScape and finish (with other as source base)

Completed:
-Wire out - skills page (went with flex solution)
-Created Portfolio Page Structure
-FIlled out dummy info for Portfolio page
-Collect Social Media icons
-Apply correct layout (flex)
-Link to my profiles
-Edit landing page styling (ie position via padding, font size and weight etc)

Second Iteration:
-recreate site as one continuous page that jumps to each section (like Figma)

-Make Responsive (Do after finishing Odin Project module)
-for Skills and Portfolio, use grid technique: grid-template-columns: repeat(autofit, minmax(x, 1fr))

Bugs:

-1 Header:
-On index and portfolio pages where there is overflow on y axis, ul elements in header shift left due to appearence of scroll bar
-SOLVED: add overflow-y: scroll css property to body, so that scroll bar is on all pages
