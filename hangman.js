var word, newWord, temp, c, categ, actualWord;
var lives = 5;
newWord = "";
actualWord = "";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("B").disabled = false;
    document.getElementById("C").disabled = false;
    document.getElementById("D").disabled = false;
    document.getElementById("F").disabled = false;
    document.getElementById("G").disabled = false;
    document.getElementById("H").disabled = false;
    document.getElementById("X").disabled = false;
    document.getElementById("J").disabled = false;
    document.getElementById("K").disabled = false;
    document.getElementById("L").disabled = false;
    document.getElementById("M").disabled = false;
    document.getElementById("N").disabled = false;
    document.getElementById("Y").disabled = false;
    document.getElementById("P").disabled = false;
    document.getElementById("Q").disabled = false;
    document.getElementById("R").disabled = false;
    document.getElementById("S").disabled = false;
    document.getElementById("T").disabled = false;
    document.getElementById("Z").disabled = false;
    document.getElementById("V").disabled = false;
    document.getElementById("W").disabled = false;
    document.getElementById('Counter').style.display = 'none';
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById('Click').style.display = 'none';
      }
    }
  }
}

function sports() {
  categ = "SPORTS";
  n = Math.floor(Math.random() * 51);
  switch(n)
  {
    case 0:
      word = "CRICKET";
      break;
    case 1:
      word = "HANDBALL";
      break;
    case 2:
      word = "RUGBY";
      break;
    case 3:
      word = "PARAGLIDING";
      break;
    case 4:
      word = "HOCKEY";
      break;
    case 5:
      word = "AEROBATICS";
      break;
    case 6:
      word = "GLIDING";
      break;
    case 7:
      word = "ARCHERY";
      break;
    case 8:
      word = "BADMINTON";
      break;
    case 9:
      word = "FOOTVOLLEY";
      break;
    case 10:
      word = "FISTBALL";
      break;
    case 11:
      word = "BASKETBALL";
      break;
    case 12:
      word = "BASEBALL";
      break;
    case 13:
      word = "CORKBALL";
      break;
    case 14:
      word = "OINA";
      break;
    case 15:
      word = "PALANT";
      break;
    case 16:
      word = "SKATEBOARDING";
      break;
    case 17:
      word = "SCOOTERING";
      break;
    case 18:
      word = "STREETLUGE";
      break;
    case 19:
      word = "RUNDOWN";
      break;
    case 20:
      word = "HIKING";
      break;
    case 21:
      word = "JUJUTSU";
      break;
    case 22:
      word = "JUDO";
      break;
    case 23:
      word = "SUMO";
      break;
    case 24:
      word = "KICKBOXING";
      break;
    case 25:
      word = "BANDO";
      break;
    case 26:
      word = "FENCING";
      break;
    case 27:
      word = "PAINTBALL";
      break;
    case 28:
      word = "BILLIARDS";
      break;
    case 29:
      word = "POLO";
      break;
    case 30:
      word = "ANGLING";
      break;
    case 31:
      word = "KABADDI";
      break;
    case 32:
      word = "FOOTBALL";
      break;
    case 33:
      word = "JUGGLING";
      break;
    case 34:
      word = "GOLF";
      break;
    case 35:
      word = "HUNTING";
      break;
    case 36:
      word = "RINGETTE";
      break;
    case 37:
      word = "TRIATHLON";
      break;
    case 38:
      word = "SQUASH";
      break;
    case 39:
      word = "BOBSLEIGH";
      break;
    case 40:
      word = "HURLING";
      break;
    case 41:
      word = "PARKOUR";
      break;
    case 42:
      word = "TAG";
      break;
    case 43:
      word = "RACQUETBALL";
      break;
    case 44:
      word = "SUICIDE";
      break;
    case 45:
      word = "RAFTING";
      break;
    case 46:
      word = "DIVING";
      break;
    case 47:
      word = "MOTOCROSS";
      break;
    case 48:
      word = "CHESS";
      break;
    case 49:
      word = "MAHJONG";
      break;
    case 50:
      word = "SCRABBLE";
      break;
  } startGame();
}

function animals() {
  categ = "ANIMALS";
  n = Math.floor(Math.random() * 51);
  switch(n)
  {
    case 0:
      word = "HEDGEHOG";
      break;
    case 1:
      word = "SKUNK";
      break;
    case 2:
      word = "PANDA";
      break;
    case 3:
      word = "RATTLESNAKE";
      break;
    case 4:
      word = "GIRAFFE";
      break;
    case 5:
      word = "AARDVARK";
      break;
    case 6:
      word = "ALLIGATOR";
      break;
    case 7:
      word = "BABOON";
      break;
    case 8:
      word = "ANTELOPE";
      break;
    case 9:
      word = "ANT";
      break;
    case 10:
      word = "BADGER";
      break;
    case 11:
      word = "BEETLE";
      break;
    case 12:
      word = "CAPYBARA";
      break;
    case 13:
      word = "COYOTE";
      break;
    case 14:
      word = "DORMOUSE";
      break;
    case 15:
      word = "DINGO";
      break;
    case 16:
      word = "EEL";
      break;
    case 17:
      word = "FLAMINGO";
      break;
    case 18:
      word = "ERMINE";
      break;
    case 19:
      word = "FALCON";
      break;
    case 20:
      word = "GIBBON";
      break;
    case 21:
      word = "GOPHER";
      break;
    case 22:
      word = "HADDOCK";
      break;
    case 23:
      word = "HORNET";
      break;
    case 24:
      word = "IMPALA";
      break;
    case 25:
      word = "IGUANA";
      break;
    case 26:
      word = "JUNGLEFOWL";
      break;
    case 27:
      word = "KRILL";
      break;
    case 28:
      word = "MACAW";
      break;
    case 29:
      word = "MARTEN";
      break;
    case 30:
      word = "NARWHAL";
      break;
    case 31:
      word = "NEWT";
      break;
    case 32:
      word = "OCELOT";
      break;
    case 33:
      word = "ORCA";
      break;
    case 34:
      word = "PORPOISE";
      break;
    case 35:
      word = "QUAIL";
      break;
    case 36:
      word = "QUOKKA";
      break;
    case 37:
      word = "RHINOCEROS";
      break;
    case 38:
      word = "RAVEN";
      break;
    case 39:
      word = "SNIPE";
      break;
    case 40:
      word = "SPARROW";
      break;
    case 41:
      word = "SHRIMP";
      break;
    case 42:
      word = "TAHR";
      break;
    case 43:
      word = "THRUSH";
      break;
    case 44:
      word = "URIAL";
      break;
    case 45:
      word = "VIPER";
      break;
    case 46:
      word = "VICUNA";
      break;
    case 47:
      word = "WALLABY";
      break;
    case 48:
      word = "XARINAE";
      break;
    case 49:
      word = "YAK";
      break;
    case 50:
      word = "ZEBRA";
      break;
  } startGame();
}

function places() {
  categ = "PLACES";
  n = Math.floor(Math.random() * 51);
  switch(n)
  {
    case 0:
      word = "RWANDA";
      break;
    case 1:
      word = "ICELAND";
      break;
    case 2:
      word = "JAMAICA";
      break;
    case 3:
      word = "LADAKH";
      break;
    case 4:
      word = "NIGERIA";
      break;
    case 5:
      word = "AZERBAIJAN";
      break;
    case 6:
      word = "BOLIVIA";
      break;
    case 7:
      word = "BAHAMAS";
      break;
    case 8:
      word = "BELIZE";
      break;
    case 9:
      word = "BRUNEI";
      break;
    case 10:
      word = "BURUNDI";
      break;
    case 11:
      word = "CAMBODIA";
      break;
    case 12:
      word = "CHAD";
      break;
    case 13:
      word = "CONGO";
      break;
    case 14:
      word = "DENMARK";
      break;
    case 15:
      word = "EGYPT";
      break;
    case 16:
      word = "ETHIOPIA";
      break;
    case 17:
      word = "FIJI";
      break;
    case 18:
      word = "FINLAND";
      break;
    case 19:
      word = "FRANCE";
      break;
    case 20:
      word = "GRENADA";
      break;
    case 21:
      word = "HUNGARY";
      break;
    case 22:
      word = "INDIA";
      break;
    case 23:
      word = "JORDAN";
      break;
    case 24:
      word = "KAZAKHSTAN";
      break;
    case 25:
      word = "KENYA";
      break;
    case 26:
      word = "LATVIA";
      break;
    case 27:
      word = "LIBYA";
      break;
    case 28:
      word = "MEXICO";
      break;
    case 29:
      word = "MALTA";
      break;
    case 30:
      word = "NORWAY";
      break;
    case 31:
      word = "PALESTINE";
      break;
    case 32:
      word = "PERU";
      break;
    case 33:
      word = "POLAND";
      break;
    case 34:
      word = "RUSSIA";
      break;
    case 35:
      word = "SLOVAKIA";
      break;
    case 36:
      word = "TANZANIA";
      break;
    case 37:
      word = "TONGA";
      break;
    case 38:
      word = "UGANDA";
      break;
    case 39:
      word = "VIETNAM";
      break;
    case 40:
      word = "YEMEN";
      break;
    case 41:
      word = "ZAMBIA";
      break;
    case 42:
      word = "TOGO";
      break;
    case 43:
      word = "BERMUDA";
      break;
    case 44:
      word = "MACAU";
      break;
    case 45:
      word = "GUAM";
      break;
    case 46:
      word = "GIBRALTAR";
      break;
    case 47:
      word = "GUADELOUPE";
      break;
    case 48:
      word = "SEYCHELLES";
      break;
    case 49:
      word = "SINGAPORE";
      break;
    case 50:
      word = "SPAIN";
      break;
  } startGame();
}

function food() {
  categ = "FOOD";
  n = Math.floor(Math.random() * 51);
  switch(n)
  {
    case 0:
      word = "POUTINE";
      break;
    case 1:
      word = "TACOS";
      break;
    case 2:
      word = "MARZIPAN";
      break;
    case 3:
      word = "ANKIMO";
      break;
    case 4:
      word = "PHO";
      break;
    case 5:
      word = "CHICOO";
      break;
    case 6:
      word = "STRAWBERRY";
      break;
    case 7:
      word = "LAMINGTON";
      break;
    case 8:
      word = "BABKA";
      break;
    case 9:
      word = "CASSATA";
      break;
    case 10:
      word = "TART";
      break;
    case 11:
      word = "ECLAIRS";
      break;
    case 12:
      word = "FRIAND";
      break;
    case 13:
      word = "GENOISE";
      break;
    case 14:
      word = "WAFER";
      break;
    case 15:
      word = "LADDU";
      break;
    case 16:
      word = "BONBON";
      break;
    case 17:
      word = "CHIKKI";
      break;
    case 18:
      word = "NOUGAT";
      break;
    case 19:
      word = "ROSETTE";
      break;
    case 20:
      word = "FLANBY";
      break;
    case 21:
      word = "DOUGHNUT";
      break;
    case 22:
      word = "VADA";
      break;
    case 23:
      word = "NOODLES";
      break;
    case 24:
      word = "FALOODEH";
      break;
    case 25:
      word = "KULFI";
      break;
    case 26:
      word = "MARMALADE";
      break;
    case 27:
      word = "CAKE";
      break;
    case 28:
      word = "CROSTINI";
      break;
    case 29:
      word = "HUMMUS";
      break;
    case 30:
      word = "KABAB";
      break;
    case 31:
      word = "PANIPURI";
      break;
    case 32:
      word = "CHEESEBURGER";
      break;
    case 33:
      word = "WHOPPER";
      break;
    case 34:
      word = "BHAJJI";
      break;
    case 35:
      word = "BIRYANI";
      break;
    case 36:
      word = "CARROT";
      break;
    case 37:
      word = "CHAKODI";
      break;
    case 38:
      word = "DOSA";
      break;
    case 39:
      word = "KHANDVI";
      break;
    case 40:
      word = "GHUGNI";
      break;
    case 41:
      word = "HALVA";
      break;
    case 42:
      word = "IDLI";
      break;
    case 43:
      word = "JALEBI";
      break;
    case 44:
      word = "KACHORI";
      break;
    case 45:
      word = "MALAPUA";
      break;
    case 46:
      word = "MOMO";
      break;
    case 47:
      word = "PAKORA";
      break;
    case 48:
      word = "SHRIKHAND";
      break;
    case 49:
      word = "UPMA";
      break;
    case 50:
      word = "GULHA";
      break;
  } startGame();
}

function words() {
  categ = "WORDS";
  n = Math.floor(Math.random() * 51);
  switch(n)
  {
    case 0:
      word = "BOURGEOISIE";
      break;
    case 1:
      word = "RENDEZVOUS";
      break;
    case 2:
      word = "MAGNANIMOUS";
      break;
    case 3:
      word = "AUSPICIOUS";
      break;
    case 4:
      word = "OSCILLATE";
      break;
    case 5:
      word = "AMICABLE";
      break;
    case 6:
      word = "RHYTHMS";
      break;
    case 7:
      word = "ABSTINENCE";
      break;
    case 8:
      word = "CENSURE";
      break;
    case 9:
      word = "COMPROMISE";
      break;
    case 10:
      word = "DISCREDIT";
      break;
    case 11:
      word = "ENHANCE";
      break;
    case 12:
      word = "FLORID";
      break;
    case 13:
      word = "FRUGAL";
      break;
    case 14:
      word = "HAUGHTY";
      break;
    case 15:
      word = "IMPUTE";
      break;
    case 16:
      word = "INTREPID";
      break;
    case 17:
      word = "LONGEVITY";
      break;
    case 18:
      word = "ORATOR";
      break;
    case 19:
      word = "PARCHED";
      break;
    case 20:
      word = "PRUDENT";
      break;
    case 21:
      word = "QUERULOUS";
      break;
    case 22:
      word = "RECLUSIVE";
      break;
    case 23:
      word = "RECONCILATION";
      break;
    case 24:
      word = "RENOVATION";
      break;
    case 25:
      word = "RESILIENT";
      break;
    case 26:
      word = "RESTRAINED";
      break;
    case 27:
      word = "SAGACITY";
      break;
    case 28:
      word = "SPURIOUS";
      break;
    case 29:
      word = "SUBTLE";
      break;
    case 30:
      word = "OBVIOUS";
      break;
    case 31:
      word = "ANONYMOUS";
      break;
    case 32:
      word = "ASYLUM";
      break;
    case 33:
      word = "XYLOPHONE";
      break;
    case 34:
      word = "CAMARADERIE";
      break;
    case 35:
      word = "ARID";
      break;
    case 36:
      word = "CLAIRVOYANT";
      break;
    case 37:
      word = "COLLABORATE";
      break;
    case 38:
      word = "CONDESCENDING";
      break;
    case 39:
      word = "CONGREGATION";
      break;
    case 40:
      word = "EMULATE";
      break;
    case 41:
      word = "ENERVATING";
      break;
    case 42:
      word = "INTREPID";
      break;
    case 43:
      word = "LOBBYIST";
      break;
    case 44:
      word = "OPULENT";
      break;
    case 45:
      word = "PROSAIC";
      break;
    case 46:
      word = "PRUDENT";
      break;
    case 47:
      word = "SPONTANEITY";
      break;
    case 48:
      word = "ASSEMBLY";
      break;
    case 49:
      word = "EXTENSION";
      break;
    case 50:
      word = "NOWHERE";
      break;
  } startGame();
}

function component(size, fnt, color, x, y, align) {
  this.size = size;
  this.fnt = fnt;
  this.x = x;
  this.y = y;
  this.align = align;
  this.update = function() {
  ctx = myGameArea.context;
  ctx.font = this.size + " " + this.fnt;
  ctx.fillStyle = color;
    if(this.align == "c")
    {
        ctx.textAlign = "center";
        ctx.fillText(this.text, this.x, this.y);
    }
    else if(this.align == "r")
    {
        ctx.textAlign = "right";
        ctx.fillText(this.text, this.x, this.y);
    }
    else
    {
        ctx.textAlign = "left";
        ctx.fillText(this.text, this.x, this.y);
    }
  }
}

function startGame() {
  document.getElementById('foot').style.display = 'none';
  document.getElementById('dropDown').style.display = 'none';
  document.getElementById('Texts').style.display = 'none';
  document.getElementById('Button').style.display = 'block';
  document.getElementById('Click').style.display = 'none';
  word = word.toUpperCase();
    for ( var i=0; i<word.length; i++)
    {
      var a= word.charAt(i);
      actualWord = actualWord + " " + a ;
    }
    actualWord = actualWord.trim();
    for ( var i=0; i<word.length; i++)
    {
      var a= word.charAt(i);
      if ( a == 'A' ) {
        newWord = newWord + " " + 'A';
      } else if ( a == 'E') {
        newWord = newWord + " " + 'E';
      } else if ( a == 'I') {
        newWord = newWord + " " + 'I';
      } else if ( a == 'O') {
        newWord = newWord + " " + 'O';
      } else if ( a == 'U') {
        newWord = newWord + " " + 'U';
      } else {
        newWord = newWord + " " + '_';
      }
    }
    newWord = newWord.trim() ;
    LivesLeft = new component("30px", "Consolas", "white", 995, 40 ,"r");
    TheWord = new component("65px", "Lucida Console", "white", 600, 300 ,"c" );
    Categ = new component("30px", "Consolas", "white", 205, 40 ,"l" );
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function onClick(guess) {
document.getElementById(guess).disabled = true;
  temp = "";
  c = 0;
for ( var i=0; i<newWord.length; i++)
{
  if(newWord.charAt(i) == ' ')
  {
    temp = temp + ' ';
  } else if(guess == word.charAt((i + 1) / 2)) {
    temp = temp + guess;
    c++;
  } else {
    temp = temp + newWord.charAt(i);
  }
}
newWord = temp;

if ( c == 0 ) {
  lives=lives-1;
}

if ( lives == 0)
{
  setTimeout(alert("Game Over\nThe word was "+ word), 4000);
  endGame();
}

if (newWord == actualWord)
{
  setTimeout(alert("You won!!!!\nYour score is " + lives), 4000);
  endGame();
}
}

function updateGameArea() {
  myGameArea.clear();
  LivesLeft.text="Lives: " + lives;
  LivesLeft.update();
  TheWord.text="" + newWord;
  TheWord.update();
  Categ.text="Category: "+ categ;
  Categ.update();
}

function endGame() {
  document.getElementById("B").disabled = true;
    document.getElementById("C").disabled = true;
    document.getElementById("D").disabled = true;
    document.getElementById("F").disabled = true;
    document.getElementById("G").disabled = true;
    document.getElementById("H").disabled = true;
    document.getElementById("X").disabled = true;
    document.getElementById("J").disabled = true;
    document.getElementById("K").disabled = true;
    document.getElementById("L").disabled = true;
    document.getElementById("M").disabled = true;
    document.getElementById("N").disabled = true;
    document.getElementById("Y").disabled = true;
    document.getElementById("P").disabled = true;
    document.getElementById("Q").disabled = true;
    document.getElementById("R").disabled = true;
    document.getElementById("S").disabled = true;
    document.getElementById("T").disabled = true;
    document.getElementById("Z").disabled = true;
    document.getElementById("V").disabled = true;
    document.getElementById("W").disabled = true;
  var r = confirm("Want to play again?");
if (r == true) {
    location.reload();
}
}
