Test the performance of various CSS selectors !

<b>How to use:</b>
<ul>
  <li>clone this project</li>
  <li>add stylesheet to css folder, named whatever you want</li>
  <li>open fat.html in browser</li>
  <li>search for desired stylesheet filename (without file ext) in the input and press 'enter'</li>
  <li>you will be alerted with the selector performance.</li>
</ul>
<b>Note:</b>
a.css has been provided as an example. search for "a" in the input and press enter to see the performance of an nth-of-type selector.

<b>What is this?</b>
I am using the native browser performance.timing API to get the time difference between page load and response end. During that time, the CSS selectors get applied.

Credit for this idea goes to Ben Frain and 
<a href="https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/">his wonderful article</a>
