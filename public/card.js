
var firstCard;
var secondCard;
var firstCardColor;
var secondCardColor;
var numberedClicks = 0

var Card = Backbone.View.extend({
 
  className: "card",
   
   events: {

  	"click": "Cardflipping",
   },
 

  initialize: function(viewData) {
  	
    this.render(viewData)
 
  },

  render: function(viewData) {
  	this.color = viewData.color;
    this.hints = viewData.hints;
    this.answers = viewData.answers
  },

  Cardflipping: function() {
  	numberedClicks = 1;
    this.$el.css('background-color', this.color);
     
    if (numberedClicks === 1) {
    	firstCard = this.$el;
    	firstCardColor = this.$el.css( "background-color" );
    }
    if (numberedClicks === 2) {
    	secondCard = this.$el;
    	secondCardColor = this.$el.css( "background-color" );
    	if (firstCardColor === secondCardColor) {
    		firstCard.remove();
    		secondCard.remove();
    	} else {
    		alert("wtffff");
    	}
    }
    if (numberedClicks === 3) {

    	numberedClicks = 0;
    	$(".card").css('background-color', 'red')
    }
   },

   template: Handlebars.compile( $("#bank-template").html() )
}) 




