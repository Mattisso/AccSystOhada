console.log('App loaded');

import '../css/bootstrap.css';
import '../css/app.css';

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

//require('../css/bootstrap.css');
//require('../css/app.less');

