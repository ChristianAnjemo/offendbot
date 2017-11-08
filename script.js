
/*
 * "DOMContentLoaded"
 * This code will run as soon as the HTML as finished loading
 * Using addEventListener we add a listener that listens for clicks on the element with the ID of "button" 
 * When a click is detected, we run the function roast();
 */


document.addEventListener("DOMContentLoaded", function() {
var name = (getParameterByName('name') ? getParameterByName('name') : ''); // "Olivia" try changing the value after ?name= in the URL
document.getElementById('usersName').value = name;

  document.getElementById('button').addEventListener('click', function() {
    console.log('clicking the button');
    roast();
  });
});

var insults = [];
insults[0] = ', you are as worthless as a corrupt stack of cock cocks.';
insults[1] = ', you are as insignificant as a sickening sick yucky bag of moldy lizard vomit';
insults[2] = ', you are as worthless as a repellent infernal ton of unwanted terrible sticky eel assholes';
insults[3] = ', you are as repulsive as a filthy awful stinky multitude of gross grotesque repulsive pig guts';
insults[4] = ', you are as pointless as a sick smelly load of unpleasant petty despicable bug spit';
insults[5] = ', you are as futile as a sorry mass of obnoxious terrifying skunk snot';
insults[6] = ', you are as unpleasant as a detrimental myriad of sick cockroach spit';
insults[7] = ', you are as deformed as a disgusting assload of stinky stupid anal lizard dicks';
insults[8] = ', you are as moldy as a dirty legion of detrimental pony poop';
insults[9] = ', you are as repulsive as an unwanted sorry stack of inferior grotesque dog urine';
insults[10] = ', you are as filthy as an infernal stack of annoying chicken pus';
insults[11] = ', you are as detrimental as a sad foul detestable heap of repugnant rotten pony balls';
insults[12] = ', you are as impertinent as an anal faulty ton of rude petty anglerfish farts';
insults[13] = ', you are as abhorrent as a grotesque cloud of revolting terrible maggot poop';
insults[14] = ', tell me… Is being stupid a profession or are you just gifted?';
insults[15] = ', zombies eat brains. You are safe.';
insults[16] = ', what is the point of putting on makeup, a monkey is gonna stay a monkey.';
insults[17] = ', if I say something that offends you, let me know so I can do it again later.';
insults[18] = ', you have a huge pimple in between your shoulders! Oh no wait that is your face.';
insults[19] = ', You are so ugly that when you cry, the tears roll down the back of your head…just to avoid your face.';
insults[20] = ', if brains were gasoline you would not have enough to propel a flea’s motorcycle around a doughnut.';
insults[21] = ', why did the chicken cross the road? To get the hell away from you.';
insults[22] = ', why did the chicken cross the road? Because you and your idiotic face scared it away.';
insults[23] = ', I did not know the trash from your head could come out of your mouth';
insults[24] = ', oh I am sorry, were we supposed to dress stupid today?';
insults[25] = ', lets play horse. Ill be the front end. And you be yourself…';
insults[26] = ' , I can make a song about your teeth: black and yellow black and yellow';
insults[27] = ', try rolling your eyes, maybe you could find a brain back there.';
insults[28] = ', you were born on the freeway, where accidents happen.';
insults[29] = ', you are not ugly, you are just not someone to look at.';
insults[30] = ', you are so ugly that you wouldn’t even look at yourself either.';
insults[31] = ', if I wanted to kill myself I would have to climb your ego and then jump to your IQ.';
insults[32] = ', if you look up the definition of moron in the dictionary there will be a picture of you.';
insults[33] = ', you actually sounded smarter when you didn’t say anything.';
insults[34] = ', if you were on fire with a bucket of water near you, I would drink the water.';
insults[35] = ', I asked God to punish me, the next day I met you.';
insults[36] = ', if you were twice as wise you are now, you probably still be stupid';
insults[37] = ', whenever I see your face, I feel like I am having a bad dream.';
insults[38] = ', what would intelligence be without stupidity, see you are important.';
insults[39] = ', your birth certificate is an apology letter from the condom factory.';
insults[40] = ', you are the worst joke ever made.';
insults[41] = ', do not bother being smart, do what you do best : being stupid!';
insults[42] = ', I would so much enjoy the ticking of the clock than you telling the most important story of your life.';
insults[43] = ', I have always checked the Guinness book of records with the hope of seeing your name as the greatest fool of all time. Do not worry pal you will soon be noticed.';
insults[44] = ', I was going to give you a nasty look, but I see you already have one.';
insults[45] = ', I am not saying you are ugly, I am just saying you are about 8 beers away from being my type.';
insults[46] = ', if ugliness was measured in bricks, you would be the great wall of China.';
insults[47] = ', you are so ugly that on Halloween you do not even have to dress up.';
insults[48] = ', do not feel special, I only keep your number in my phone so I know not to answer when you call.';
insults[49] = ', I can remove 99 percent of your beauty with a baby wipe.';
insults[50] = ', everyone has the right to be stupid, but you are abusing the privilege.';
insults[51] = ', mirrors can not talk, lucky for you they can not laugh either.';
insults[52] = ', you are so fat, I took a picture of you last Christmas and it is still printing ';
insults[53] = ', I do not believe in plastic surgery, but in your case, go ahead';
insults[54] = ', you are so ugly you make onions cry.';
insults[55] = ', roses are red, violets are blue I have five fingers, and the middle one is for you.';
insults[56] = ', please tell me about yourself, I enjoy horror stories.';
insults[57] = ', oh look! The garbage truck is coming! You better hide!';
insults[58] = ' you make me want to eat shit every time I see you.';
insults[59] = ', your silence has grammatical errors.';
insults[60] = ', everyone is entitled to be stupid, but you are abusing the privilege.';
insults[61] = ', you are not yourself today, I noticed the improvement right away.';
insults[62] = ', you are about as useful as a knitted condom.';
insults[63] = ', your asshole looks like Donald Trump: orange-colored and a lot of old white hair.';
insults[64] = ', you like games? Go play hide and go fuck yourself.';
insults[65] = ', quit acting like a bloodsucking tampon hoping to get your first chance at pussy.';
insults[66] = ', you are just a mediocre person.';
insults[67] = ', you look like one of those eggs that still have some bird shit or a feather on it when bought in the store.';
insults[68] = ', its sad that the profile picture you have on facebook is the best out of those 100 you took.';
insults[69] = ', if I said anything to offend you it was purely intentional';
insults[70] = ', someday you will find yourself, and will you be disappointed.';
insults[71] = ', I get so emotional when you are not around. That emotion is happiness.'; 
insults[72] = ', you are so fat that people mistake you as another planet.';
insults[73] = ', you are so fat that the only letters of the alphabet you know are K F C.';
insults[74] = ', you have something on your chin. No, the 3rd one down… ';
insults[75] = ', what kind of accident were you in to look like this? ';
insults[76] = ', do aliens exist? Wait that is a stupid question since you are one';
insults[77] = ', two wrongs don’t make a right, take your parents as an example';
insults[78] = ', you are as sickening as a rotten pile of anal slug vomit';
insults[79] = ', you are as disgusting as a smelly slimy cockroach anal';
insults[80] = ', you are as absurd as an anal cloud of disgusting repulsive chicken stench.';
insults[81] = ', you are as worthless as a deformed pig dick.';
insults[82] = ', you are as terrifying as a fuckload of deformed moldy monkey dicks';
insults[83] = ', you are as repellent as an absurd multitude of ill sorry repugnant monkey assholes';
insults[84] = ', hey, I can make a song about your teeth: black and yellow black and yellow';
insults[85] = ', you are as repellent as an absurd multitude of ill monkey assholes';
insults[86] = ', you are as faulty as a naughty dirty fuckload of repellent maggot slime';
insults[87] = ', you are as sickening as a slimy and toxic bunch of useless bug balls';




function roast() {
  var randomNumber = Math.floor(Math.random()*(insults.length));
  // just console logging the randomNumber so we can see what number was generated
  console.log('randomNumberInsult is:', randomNumber);
  // get the value of the input with the ID of usersName and save it in a var
  var usersName = document.getElementById('usersName').value;
  // putting together the usersName and the generated insult
  var completeInsult = usersName + insults[randomNumber];
  // this is an object containing config for the responsiveVoice API
  // the paramenter 'onend' will trigger the function named playSound() as soon as the voice API is done insulting your user
  var config = {
    pitch: 1,
    rate: 0.9,
    onend: playSound
  };
  responsiveVoice.speak(completeInsult, 'Australian Female', config);
  // prints out the usersName + generated insult inside the element with ID of insultPrinter
  document.getElementById('insultPrinter').innerHTML = completeInsult;

  window.history.pushState(null, null, window.location.href.split('?')[0] + '?name=' + usersName); //HÄR VA DE NYTT 6/11
}

function playSound() {
  // more random numbers, using ceile since we don't want a 0 here. Max value is 2 since we only have two sound clips in atm
  var randomNumber = Math.ceil(Math.random()*2);
  // logging to see whats going on
  console.log('randomNumberSoundClip is:', randomNumber);
  // play the sound with ID of sound + number 1 or 2
  
  document.getElementById('sound'+randomNumber).play();
  
}
/*
Button change when click
*/

function mouseDown () {
  document.getElementById("button").src = "images/pressed.png";
}

function mouseUp () {
  document.getElementById("button").src = "images/normal.png";
}


/*
FOOTER counter and share
*/



function fakecounter() {

//decrease/increase counter value 
var decrease_increase=971970

var counterdate=new Date()
var currenthits=counterdate.getTime().toString()
currenthits=parseInt(currenthits.substring(2,currenthits.length-4))-decrease_increase

document.getElementById("counter").innerHTML ="<b>"+currenthits+"</b> Stupid people has visited this m*therf*cking site"
}
fakecounter()


// Force a hover to see the effect
var share = document.querySelector('.share');

setTimeout(function () {
  share.classList.add("hover");
}, 1000);

setTimeout(function () {
  share.classList.remove("hover");
}, 3000);






function getParameterByName(name, url) { //HÄR VA DE NYTT 6/11
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.href;
  console.log(Url.innerHTML)
  Url.select();
  document.execCommand("copy");
}

