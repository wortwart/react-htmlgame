# react-htmlgame
Browser game with ReactJS: Name all HTML5 elements

Both an entertaining browser game for web developers and a "first steps" ReactJS application. This project was created for a tutorial in [c't Magazin 2/16](http://www.heise.de/ct/ausgabe/2016-2-Facebooks-JavaScript-Bibliothek-React-fuer-datenlastige-Websites-3057813.html) (in German).

You can play the game on [my website](http://woerter.de/projects/htmlgame/). My best by now is 107/108 ... You get extra points for naming new elements not yet in the [W3C HTML5 recommendation](https://www.w3.org/TR/html5/), and minus points for outdated elements.

As there was a breaking change in React 0.15, this code won't work with it (the app uses `React.render()` which is now `ReactDOM.render()`).