Srija Event Management Website

Files:
- index.html       -> Home page
- about.html       -> About page (photo placeholder is here)
- events.html      -> Events page
- services.html    -> Services page
- contact.html     -> Contact page
- css/style.css    -> All styling
- js/script.js     -> Basic JavaScript

To add Srija's photo later:
1. Put the photo inside the website folder, for example: images/srija.jpg
2. Open about.html.
3. Replace the <div class="photo-placeholder">...</div> section with:
   <div class="photo-placeholder">
       <img src="images/srija.jpg" alt="Srija - Event Manager">
   </div>
4. Add this CSS if needed:
   .photo-placeholder img { width:100%; height:100%; object-fit:cover; }

Open index.html in Chrome to view the website.
