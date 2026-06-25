Basic Requirements:

 For the basic requirements, I've contacted everyone assigned, and my assignment has the proper name and scheme needed for it. My files were forked from the journal repo. I have properly rendered my index.html and edited it to also display the current website with information about me. All my changes have been pushed to GitHub, rendered, and deployed, so they are probably live. I also linked to a YouTube video because I've had trouble with rendering and deploying when I call on the website, so that will be linked below. Not much to say about the basic requirements — I completed all of them, and they weren't very difficult. 

Technical Achievements:
For my design choices, I started with a dark theme as the base since I generally prefer dark mode over light mode. My first CSS rule established this dark background, and my second rule created color-coded sections so that each part of the page was visually distinct. I also changed the font color to match what I used in my light theme, providing consistency across both styles. When switching to the light theme, I applied similar CSS rules. I implemented section breaks with a gradient effect, moving from darker to lighter tones, so paragraphs were grouped into blocks that naturally shifted in color. I decided to leave all images and clickable links at the bottom of the page, since I thought placing them within the main content would be distracting. For my JavaScript component, I implemented a dark mode / light mode theme switcher. I’m not entirely sure if this counts as an “animation” in the strict sense, but I wanted to build something practical that I would actually use. This idea came naturally to me, and I felt it was a useful feature to add. Lastly, regarding semantic HTML tags, I made sure to incorporate a variety, including h1, h2, p, style, and img. Since I had just joined the course and wasn’t entirely sure about the assignment expectations, I may have gone a little heavy-handed by adding more tags than strictly necessary, but I wanted to ensure I met the requirements.


All in all, for my CSS rules:
Start with Dark Theme
Sections Paragraphs by color
Use a similar font color for the different themes, as the contrast in the font color can hurt my eyes at times. 
Make sure dark and light have matching styles
Leave the picture and links to the end

For JavaScript animation:
Made a theme changer 

For semantic HTML Tags:
h1
h2
p
img
style


Design Achievements:

Finally, I used a color palette from color.adobe.com; I actually used two of them because I needed one for the dark theme and one for the light theme. I used the codes provided for each color palette for the colors within my code. You'll find the screenshot in my repo for both of them actually. Additionally, I also used Google Fonts, and I basically just added the code it provides for HTML, which you can request through that service on the website, and I included it in my index and used it as a reference.


AI Use:
I should note that I did use AI within this project, mainly for two things in the coding area. The first was figuring out how to actually display images on my HTML page, since I was having issues with that. I realized the problem was in my Server.js file, where I was having difficulties getting images to display. At first, I used the ChatGPT generator just to see what the code would look like, and then I compared it with what we originally had. From there, I realized I could make additional case statements that would allow me to serve the files I placed in my repo the same way that index.html was being displayed. After that, I commented out the code from ChatGPT, even though it was honestly better, and instead used the version I came up with myself.
The second time I used AI was for the button implementation. I was able to get the button to switch between light and dark mode by referencing videos (which I’ll also link below), since I hadn’t worked with HTML for most of the summer and needed some reminders. The issue I ran into wasn’t with the button’s functionality, but with getting it to match the active theme. The problem ended up being that I didn’t place the button correctly and wasn’t applying the right color palette codes for each section.
Another thing to note is that I also used AI for my written documents, including this one, since I use Grammarly in Google Docs. It provides me with better writing suggestions, and I wanted to mention that here as well.
Outside of these two intentional uses of AI, the only other computer help I received was from autocomplete suggestions in WebStorm or VS when completing a line of code. I generally went along with those suggestions if they looked correct and then modified them afterward. In almost all cases, I was already planning to write what the editor suggested; it just sped up the process a little bit. However, I did not use JetBrains’ actual AI assistant, where you ask a question and it gives code and suggestions, as it required linking a card to my account.
Videos I used:

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

The name scheme should be `a1-yourFirstAndLastName`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future assignments.

Rubric
---
For the Technical and Design achievements, make sure you thoroughly describe in your README what you did why it was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM. Remember that the success of Achievements hinges on how well you describe them in your README. Well formatted text, images, and concise and clear descriptions are helpful. You must include a Technical Achievements and Design Achievements section, even if none are attempted.

Note that if you want to load resources besides your index.html file (images, an CSS file, a JS file) you'll need to modify server.js to point to these. For now it's easiest to just hardcode paths to the resources, but we'll look at ways to optimize this shortly.

*Basic Requirements*

(10 points each)

1. Assignment has proper naming scheme
2. Files forked from original repo
3. `index.html` properly rendered
4. `index.html` page properly edited
5. All changes pushed to GitHub
6. Project deployed to Render (or other hosting option)
7. Pull Request submitted to original repo

*Technical Achievements*
1. (5 points) Style your page using CSS. Each style rule you apply will get you 1 point for a maximum of 5 points. Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.
3. (5 points) Experiment with other *semantic* HTML tags (links, images, tables, header, footer, etc.). Each extra tag you use will get you 1 point for a maximum of 5 points. Be sure to describe the tags you use in your README.

*Design Achievements*
1. (10 points) Create a color palette using [color.adobe.com](https://color.adobe.com). Use all the colors in the palette in your webpage by implementing the appropriate CSS. Add a small screenshot of the color wheel for your color palette to your repo.
2. (5 points) Use a font from [Google Fonts](https://fonts.google.com) in your website.

**NOTE:** There are additional color pallette and font options listed on Canvas under Modules -> Resources -> Color Pallettes and Fonts. You are welcome to use one of those instead. If you know of and would like to use any other resources that are not included, feel free to contact the instructor.

Resources
---

If you need refreshers for JavaScript/HTML/CSS or Git/GitHub, check out the resources posted on Canvas under Modules -> Resources.


Sample Readme (delete the above when you're ready to submit, and modify the text below with your links and descriptions)
---

Joshua Cuneo
http://a1-joshuacuneo.onrender.com

This project shows ...

## Technical Achievements
- **Styled page with CSS**: Added rules for the p, li, and a selectors...

## Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site.
