var Firstcard  
var Secondcard 
var clickCounter = 0
var timer


var eventDispatcher = _.clone(Backbone.Events)
var Card = Backbone.View.extend({

  events: {
    "click": "flippedCard",
  },

    className:"another-card",

  // also todo
  initialize: function(viewData) {
  this.render(viewData)
  },

  render: function(viewData) {
      this.viewData = viewData
      console.log(this.$el, this.viewData.color)
  },

  showCard: function(viewData){
    this.$el.css("background-color",viewData.color)

  },

  



  flippedCard: function(){
    this.$el.html( this.template(this.viewData) )
    
    eventDispatcher.trigger("clicked", this)
    clickCounter += 1

    if (clickCounter === 1){
      card1 = this
      this.$el.css("background-color", this.viewData.color)
      
    }
    if (clickCounter === 2){
      card2 = this
      //console.log(this)
      this.$el.css("background-color", this.viewData.color)
    }
    if (clickCounter === 3 && card1 != card2) {
      
      if (card1.viewData.color === card2.viewData.color){

        card1.$el.hide()
        card2.$el.hide()
        clickCounter = 0
      }
      else {
        card1.$el.css("background-color","white")
        card2.$el.css("background-color","white")
        clickCounter = 0

      }
  }
    
  else{
    if (card1 === card2) {
      card1.$el.css("background-color","white")
      clickCounter= 0
    }
  }
},
template: Handlebars.compile ( $("#card-template").html())
  
})