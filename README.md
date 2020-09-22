Simple react app created while learning react and css.

The app is live at https://swapnil-weather-app.netlify.app/

![alt text][react-weather-app.png]


Learnings -

1. Remove input elemetn border 
input {
  border: none;
  outline: none
}

2. Splice array 

a = [1,2,3,4]
a.splice(0, 0, 5) => [5,1,2,3,4]

a.pop() => [5,1,2,3]

3. Responsive design - use of media queries
Use media queries to assign different properties for different screen sizes.

Meaning of screen word -
- It is media type
- If we don’t apply a media type, the @ media rule selects all types of devices by default.
all — for all media types
print — for printers
screen — for computer screens, tablets and, smart-phones
speech — for screen readers that “read” the page out loud
 

4. Breakpoint
- A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries.
- Breakpoints are maybe the most common term you will hear and use.
- Common breakpoints for widths of devices:

320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV