## Testing
I have only conducted manual tests, having spoken to Tutor support, automated testing is not required for this milestone project. For each of the below tests, I have tested using **Chrome developer tools**, tested all
screen sizes available and different devices by clicking **Inspect** elements. Including the following below;

1. Moto G4
1. Galaxy S5
1. Pixel 2
1. Pixel 2 XL
1. iPhone 5/SE
1. iPhone 6/7/8
1. iPhone X
1. iPad
1. iPad Pro

The site functions correctly on all formats, I have tested this on multiple devices, including my MacBook Pro and a chromebook too. **All user stories have been tested and all meet expections**.

The site has also been tested on the following browsers;

- Chrome 
- Safari
- Mozilla Firefox 
- Opera 

The only visible difference seems to be when hosting on **Opera**, where the page height seems to be different. This is visible on the contact page, where there is not as large a margin-bottom on the footer.

Additionally, having used [WC3](https://validator.w3.org/), my HTML code showed up as having no errors. Plus when I used [WC3 (CSS)](https://jigsaw.w3.org/css-validator/), it also showed that I had no errors in my CSS code.

#### Hover effects:
 If you hover over the navbar, each section will turn to a shade of orange, and have a hover effect that makes it change size slighlty. Additionally, if you hover over any of the social media icons, it will have the same effect of changing size.

#### Navigation Bar:

- If you click on ElitePT, this will essentially take you to the landing page and refresh the website. 
- When you click on each of the other sections; Program, Trainers, Testimonials and Contact Us. It will redirect you to the relevant section on the page.

#### Contact Form:

- I tried to submit the empty form and you get a message telling you to enter your first name first.
- If you then attempt to submit with only first name entered, you will get an error message telling you to enter your surname.
- If the email section is left empty or entered incorrectly (without an @), an error message appears telling you to enter it correctly.
- Lastly, if you attempt to leave the message section empty and submit, you will get the relevant error message. The message states 'Please fill in this field'.
- If everything is entered correctly, the page will reload to suggest it has been submitted succesfully.

#### Footer Page:
 - By clicking on any of the social media icons, it will redirect you to the relevant page on a separate tab. This is because I have added the 'target_blank' to all links.

### Different Screen Sizes
One of the reasons I decided to use Bootstrap to create this project, was the mobile-first principle and especially the responsiveness. Using the layout meant that, as the screen size 
increases and decreases, the page responds accordingly. Below is the effects of changing the screen size (**in regards to screen width**);

#### Navigation Bar
- The navigation will collapse down to a dropdown menu when the screen is 575px and below.

#### Programs and Trainers
- The images and the adjoined text will be viewed differently depending on the screen size. So on a screen size of 992px and above, all four images will be aligned (on one line).
For screens where it is between 576px and below, one image will occupy one row. For screen sizes between 568px and 991px, it will show two images per row.

#### Testimonials
- For this section, the testimonials will be one testimonial per row for screen sizes 767px and below. For screens that are 768px and above it will show two testimonials on each row.

#### Contact Page
- Lastly, for the contact page, on screens 768px and above the contact form and the relevant text will be side by side (col-6 and col-6). But on smaller devices (767px and below) it will show the 
relevant text above the contact form. As for the social media icons, on all screens sizes above 368px, the icons will appear on one line. But for screens 368px and below, the last icon goes on a separate row. 

## Issues

#### Issues Fixed
- When running my code through a validator, one of the errors I received was, my comments had too many hyphens. I have now corrected this, and placed only two hyphens on either side of my comment.
- When loading my page, some images would take much longer to load then others. I quickly realised the photos were too large, so I resized them proportionately using **adjust size** under tools on Mac.
- In regards to my contact form, when I left the Full name field empty, I would not get an error message. I fixed this by going onto Bootstrap and adding the relevant invalidator code to my contact form.

#### Issues Pending
- For the collapsed dropdown menu, when you click on an option, the drop down menu section does not go back to it's original state automatically. You have to click on
the hamburger icon again for it collapse back.
- If I try to push the navigation bar more centrally, the options on the drop down menu seem to be pushed out of the menu section. Which is why I have left it as originally from the bootstrap page.
- When I click on the relevant feature on my navigation bar, ideally I would want to be redirected to the header of that feature. However, on mine it takes you to the text on that section.
- When you submit the contact form correctly, the URL changes and the page reloads. Having spoke to my mentor, I have been made aware that this can be fixed through the use of Javascript. However seeing 
as that is outside the scope of this project, I have added this to future features I would like to add.
