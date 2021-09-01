

// STEP SIX

// 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.

// 2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.

// 3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

// 4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

// Once complete, you will get this effect when you click on any button.

// Note: If you need any hints, try scrolling down. 👇

// Hint 3. https://api.jquery.com/addclass/

// Hint 4. https://www.google.co.uk/search?q=how+to+add+delay+javascript

// STEP SEVEN

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

// 2. Create a new variable called level and start at level 0.

// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

// 5. Inside nextSequence(), update the h1 with this change in the value of level.

// All going well, this is what you should see when you refresh the website:

// Note: If you need any hints, try scrolling down. 👇

// Hint 1. You'll need a variable called started to toggle to true once the game starts and if it's true, then further key presses should not trigger nextSequence().

// Hint 3. The h1 has a unique id of level-title which you can target with jQuery.

// Hint 5.  You'll need to use jQuery again to change the h1 by targeting the id: level-title.

// STEP EIGHT

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

// 2. Create a new variable called level and start at level 0.

// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

// 5. Inside nextSequence(), update the h1 with this change in the value of level.

// All going well, this is what you should see when you refresh the website:

// Note: If you need any hints, try scrolling down. 👇

// Hint 1. You'll need a variable called started to toggle to true once the game starts and if it's true, then further key presses should not trigger nextSequence().

// Hint 3. The h1 has a unique id of level-title which you can target with jQuery.

// Hint 5.  You'll need to use jQuery again to change the h1 by targeting the id: level-title.

// STEP NINE

// 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.

// 2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.

// All going well, you should end up with this flash effect:

// 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

// STEP TEN

// 1. Create a new function called startOver().

// 2. Call startOver() if the user gets the sequence wrong.

// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
