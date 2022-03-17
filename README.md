# Week 8 Weekend Project: jQuery Server Calculator


## Description

_Time spent learning about server-client interaction before project: about 4 classroom days_
_Time spent for base program functionality: 8 hours_

This project's main challenge was to properly sequence the POST/GET interactions between server and client side, while performing basic calculations with user input on the server side.

One interesting thing I learned in the process was that I could initiate two GETs from the client in one function.

A couple of pitfalls I encountered a long the way were: 

- I confused a similar variable name and key name in one of my functions... this took a long time to identify!

- Two classmates had an identical problem of using inaccurate case strings for comparison in a switch conditional... this taught us a painful lesson in being absolutely sure that those case values being looked for must align PRECISELY with those of the variable being examined (eg, "*" and "x" will not register as a match, nor "x" and " x ").

## See the calculator in action!

https://tranquil-hollows-45605.herokuapp.com/

## Screen Shot

![Screenshot](server/public/screenshot.png?raw=true "Calculator screenshot")


## Language and tools used on this project

Javascript
jQuery
Express
Postman


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to get this homework done!
