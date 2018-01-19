# browserNavbarHeight
Calculates the browser navbar height. Helpfull to get real screen height on mobile devices

## Installation

```
npm install browsernavbarheight -save
```


### Old scholl html 
```
<script src="/path/to/browserNavbarHeight.js"></script>
```
### New scool js 
```javascript
require("browsernavbarheight");
```

## Usage in css
```css
    height: calc(100vh - var(--browser-navbar-height,0px));
```

