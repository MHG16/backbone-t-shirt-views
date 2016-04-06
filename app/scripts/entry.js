// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

import Backbone from 'backbone';
import $ from 'jquery';

const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
];

const basicView = Backbone.View.extend({
	tagName: 'section', 

	initialize: function(url, linkName) {
		this.picture1 = tshirts[0].imageUrlFront;
		this.title1 = tshirts[0].title;
		this.price1 = tshirts[0].price; 
	},

	template: function() {
		return `<img src='${this.picture1}'/> <h4>${this.title1}<h4/> <p>$${this.price1}.00<p>`
	
	},

	render: function () {
		this.el.innerHTML = this.template();
		$('body').append(this.el);
	}
});



const productArray = new basicView(tshirts[0].imageUrlFront, tshirts[0].title, tshirts[0].price);
productArray.render(); 





