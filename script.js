const button = document.querySelector('#joke-btn');
const place = document.getElementsByClassName("jokes-display")[0];
let isClicked = true;

function showJoke(){
    let jokes = ["Whats the best thing about Switzerland?<br>I dont know, but the flag is a big plus.",
    "Did you hear about the mathematician whos afraid of negative numbers?<br>Hell stop at nothing to avoid them.",
    "Why do we tell actors to “break a leg?”<br>Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.",
    "Helvetica and Times New Roman walk into a bar.<br>“Get out of here!” shouts the bartender. “We dont serve your type.”",
    "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “Whats the word on the street?”<br>Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Dont miss these hilarious egg puns that will absolutely crack you up.",
    "Knock! Knock!<br>Whos there?<br>Control Freak.<br>Con…<br>OK, now you say, “Control Freak who?”",
    "Hear about the new restaurant called Karma?<br>Theres no menu: You get what you deserve.",
    "A woman in labor suddenly shouted, “Shouldnt! Wouldnt! Couldnt! Didnt! Cant!”<br>“Dont worry,” said the doc. “Those are just contractions.”",
    "A bear walks into a bar and says, “Give me a whiskey and … cola.”<br>“Why the big pause?” asks the bartender. The bear shrugged. “Im not sure; I was born with them.”",
    "Did you hear about the actor who fell through the floorboards?<br>He was just going through a stage.",
    "Did you hear about the claustrophobic astronaut?<br>He just needed a little space.",
    "Why dont scientists trust atoms?<br>Because they make up everything.",
    "Why did the chicken go to the séance?<br>To get to the other side. Check out these other “why did the chicken cross the road?” jokes for more laughs.",
    "Where are average things manufactured?<br>The satisfactory.",
    "How do you drown a hipster?<br>Throw him in the mainstream.",
    "What sits at the bottom of the sea and twitches?<br>A nervous wreck.",
    "What does a nosy pepper do?<br>Gets jalapeño business!",
    "How does Moses make tea?<br>He brews.",
    "How do you keep a bagel from getting away?<br>Put lox on it.",
    "A man tells his doctor, “Doc, help me. Im addicted to Twitter!”<br>The doctor replies, “Sorry, I dont follow you …”",
    "What kind of exercise do lazy people do?<br>Diddly-squats.",
    "Why dont Calculus majors throw house parties?<br>Because you should never drink and derive.",
    "What do you call a parade of rabbits hopping backwards?<br>A receding hare-line.",
    "What does Charles Dickens keep in his spice rack?<br>The best of thymes, the worst of thymes.",
    "Whats the different between a cat and a comma?<br>A cat has claws at the end of paws; A comma is a pause at the end of a clause.",
    "Why should the number 288 never be mentioned?<br>Its two gross.",
    "What did the Tin Man say when he got run over by a steamroller?<br>“Curses! Foil again!”",
    "What did the bald man exclaim when he received a comb for a present?<br>Thanks— Ill never part with it!",
    "What did the Buddhist say to the hot dog vendor?<br>Make me one with everything.",
    "What did the left eye say to the right eye?<br>Between you and me, something smells.",
    "What do you call a fake noodle?<br>An impasta.",
    "How do you make a tissue dance?<br>Put a little boogie in it.",
    "What did the 0 say to the 8?<br>Nice belt!",
    "What do you call a pony with a cough?<br>A little horse.",
    "What did one hat say to the other?<br>You wait here. Ill go on a head. If you loved this, youll get a kick out of these dog puns.",
    "What do you call a magic dog?<br>A labracadabrador.",
    "What did the shark say when he ate the clownfish?<br>This tastes a little funny.",
    "Whats orange and sounds like a carrot?<br>A parrot.",
    "Why cant you hear a pterodactyl go to the bathroom?<br>Because the “P” is silent.",
    "What do you call a woman with one leg?<br>Eileen.",
    "What did the pirate say when he turned 80?<br>Aye matey."]

    let val = Math.floor(Math.random()*(jokes.length -1))

    if(isClicked){
        place.innerHTML = jokes[val];
        isClicked = false;
    }
    else{
        place.innerHTML = jokes[val];
        isClicked = true;
    }
}