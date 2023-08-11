# WAR (the card game)

War is a card game game played by many where strategy may not come into play as much as other card games. The game of war is entirely based on luck. You and an opposing player each split a shuffled deck of cards and play those cards in order to have a higher rank than your oppponent. Since it's astronomically impossible to shuffle the cards advantageously, you must rely on the fate of the cards to beat your opponent.

Start Game:
<img src="https://github.com/marceloiuli/WAR/blob/gh-pages/images/screenshots/start%20game.png">

## Technologies Used
* HTML
* CSS
* JavaScript

### Getting Started
[Play my game here](https://marceloiuli.github.io/WAR/ "WAR")

1. The user will click the link and the application will render 2 card tables with 2 seperate decks of cards on each table. (26 cards each)
* Although the decks are different colors they have been shuffled from a single deck to ensure there will be no copies of cards played.

2. When the user clicks on their deck of cards, their card and simultaneously the computer's card will be played face up next to their deck. The game will automatically render the higher rank between the two cards and apply the cards won to the winners score.
* I decided to alter the rules of war to play to a score of 26 cards instead of playing until a player has no cards left. This was to ensure quick games and replayability.
![alt text]("Updated Score On Board")

3. As the user plays their card, a message between the boards will indicate whether you tied, lost, or won the round(battle).
* Another rule I altered, is that in the case of a tie instead of drawing 2 cards then playing the third card, the scores will not update until the next hand is won.
![alt text]("Updated Message For Each Round")

4. When either the computer or the player reaches 26 points on their board, the game will render a message saying who won the war!
* In the case of many ties happening in the game however, the winning message rendered will indicate a draw when there are no longer cards to be played and neither player or computer could reach 26 points.
![alt text]("Winning Message Displayed Between Boards")

5. After the final message for the end of the game, a button will be displayed under the player's board to reset the game(battlefield). If the user clicks this button the scores will reset back to zero and the new decks will be available for play.
![alt text]("Screenshot Of Reset Button")

#### Next Steps:

* I'd like to fix the size of the board when in a full screen window so it's not as stretched out.

* Maybe add some styling to the bottom of the boards to not have so much extra space.

* I am considering trying to make a button that could allow you to play a full game of war without any altered rules for players to choose between.
