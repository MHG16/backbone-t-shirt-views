// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

import Backbone from 'backbone';
import $ from 'jquery';

const basicView = Backbone.View.extend({
	tagName: 'section', 

	initialize: function(url, linkName) {
		this.url = url;
		this.linkName = linkName;
	},

	template: function() {
		//return `hi`;
		return `<a href="${this.url}"> ${this.LinkName}</a>`
	
	},

	render: function () {
		this.el.innerHTML = this.template();
		$('body').append(this.el);
	}
});

const googleLink = new basicView('http://www.google.com', 'google');
const tiyLink = new basicView('http://theironyard.com', 'tiy'); 
googleLink.render(); 
tiyLink.render(); 

