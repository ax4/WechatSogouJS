var Nightmare = require('nightmare');
require('nightmare-iframe-manager')(Nightmare);		
var nightmare = Nightmare({ show: true });

nightmare.resetFrame()