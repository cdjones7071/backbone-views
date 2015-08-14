var cards

$(document).on("ready", function(){

  // Create a 16-member array with 2 each of eight colors
  var colors = [ 
    {
      color: "red",
      hint: "pluto",
    },
    {
      color: "red", 
      answers: "Russia has a larger surface area than Pluto.",
    },
    {
      color: "blue",
      hint: "American Civil War",
    },
    {
      color: "blue",
      answers: "If you were drafted during the American Civil War, you could legally pay someone else $300 to go in your place",
    },
    {
      color: "green",
      hint:  "New York diet",
    },
    {
      color: "green",
      answers: "Alone in New York each year, you are 10 times more likely to bitten by other people than worldwide by sharks",
    },
    {
      color:"yellow",
      hint: "Jehovah's Witnesses",
    },
    {
      color:"yellow",
      answers: "Jehovah's Witnesses don't celebrate birthdays because the only 2 accounts of birthday parties in the bible ended in murder",
    },
    {
      color: "purple",
      hint: "Social Media",
    },
    {
      color: "purple",
      answers: "According to a study, Twitter and Facebook are harder to resist than tobacco and alchol",
    },
    {
      color:"orange",
      hint: "Butts",
    },
    {
      color: "orange",
      answers: "A 'butt' was a unit of measurement for wine in Medieval England",
    },
    {
      color:"gray",
      hint:"Lady Gaga",
    },
    {
      color: "gray",
      answers: "Lady Gaga once brought $1000 worth of pizza for fans waiting in line for her",
    },
    {
      color:"black",
      hint: "Nutella",
    },
    {
      color:"black",
      answers: "You could cover the Great Wall of China 8 times with the number of jars of Nutella sold in a year",
    },
  ]

  // Shuffle that array
  colors = _.shuffle(colors)

  // Create an array of Card views based on the randomized color array
  cards = _.map(colors, function(){
    console.log(colors)

    // Instantiate a new card view
    var card = new Card({ 
      colors: colors

    })

    // Append that card view into the page
    $("#card-container").append( card.$el )

    // Return it (from the map iterator)
    return cards

  })
})