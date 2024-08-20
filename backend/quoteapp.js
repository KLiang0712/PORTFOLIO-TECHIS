$(document).ready(function() {
  var quoteSource = [
    {
      quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
      name: "Confucius"
    },
    {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name: "Ayn Rand"
    },
    {
      quote: "You can achieve your dreams at any age. Did you know Harrison Ford at 30 was a carpenter? Vera Wang did not design her first dress until she was 40. Even Captain Crunch joined the Navy at 50.",
      name: "Leslie Jones"
    },
    {
      quote: "Go confidently in the direction of your dreams! Live the life you have imagined. As you simplify your life, the laws of the universe will be simpler.", 
      name: "Henry David Thoreau"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
      name: "Albert Einstein"
    },
    {
      quote: "I am so clever that sometimes I do not understand a single word of what I am saying.",
      name: "Oscar Wilde"
    },
    {
      quote: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
      name: "Albert Einstein"
    },
    {
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      name: "J.K. Rowling, Harry Potter and the Chamber of Secrets"
    },
    {
      quote: "Life is made of so many moments that mean nothing. Then one day, a single moment comes along to define every second that comes after. Such moments are tests of courage, of strength.",
      name: "Sabaa Tahir: An Ember in the Ashes"
    },
    {
      quote: "All men who have turned out worth anything have had the chief hand in their own education.",
      name: "Walter Scott"
    },
    
    /* Section of High School Yearbook Quotes  */
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      name: "Ralph Waldo Emerson"
    },
    {
      quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", 
      name: "Harriet Tubman"
    },
    /* Section of High School Yearbook Quotes  */
    
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      name: "Albert Einstein"
    },
    {
      quote: "People who think they know everything are a great annoyance to those of us who do.",
      name: "Isaac Asimov"
    },
    {
      quote: "My grandmother started walking 5 miles a day when she was 60. She's 97 now, and we don't know where the hell she is.",
      name: "Ellen DeGeneres"
    },
    {
      quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      name: "Francis of Assisi"
    },
    {
      quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      name: "Thomas A. Edison"
    },
    {
      quote: "Every morning in our lives, we have a choice to make. You have the choice to stay in bed and say 'Forget it, I'm not going to work hard today.' That's your choice that you make every single day of your life. Make the right decision.",
      name: "David Goggins"
    },
    {
      quote: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.",
      name: "Buzz Andersen"
    },
    {
      quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      name: "Samuel Beckett"
    },
    {
      quote: "You will face many defeats in life, but never let yourself be defeated.",
      name: "Maya Angelou"
    },
    {
      quote: "Take the risk of thinking for yourself - much more happiness, truth, beauty, and wisdom will come to you that way.", 
      name: "Christopher Hitchens"
    },
    {
      quote: "It is not the strength of the body that counts, but the strength of the spirit.", 
      name: "J.R.R. Tolkien"
    },
    {
      quote: "Do not merely practice your art, but force your way into its secrets; it deserves that for only art and science can exalt man to divinity.", 
      name: "Ludwig Van Beethoven"
    },
    {
      quote: "It takes courage to grow up and become who you really are.", 
      name: "E. R. Cummings"
    },
    {
      quote: "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
      name: "Abraham Lincoln"
    },
    {
      quote: "Sometimes, making the wrong choice is better than making no choice. You have the courage to go forward, that is rare. A person who stands at the fork, unable to pick, will never get anywhere.",
      name: "Terry Goodkind, The Bird Man: Wizard's First Rule"
    }
  ];

  $('#quoteButton').click(function(evt) {
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();

    //prevent browser's default action
    evt.preventDefault();

    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    //set a new quote
    for (i = 0; i <= sourceLength; i += 1) {
      var newQuoteText = quoteSource[randomNumber].quote;
      var newQuoteGenius = quoteSource[randomNumber].name;

      //console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

      break;
    };//end for loop

  });//end quoteButton function

});//end document ready
