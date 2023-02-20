//bellow is generator code for random word generation.
var
  salutations1 = ["BELOVED", "DARLING", "DEAR", "DEAREST", "FANCIFUL", "HONEY"],

  salutations2 = ["CHICKPEA", "DEAR", "DUCK", "JEWEL", "LOVE", "MOPPET", "SWEETHEART"],

  adverbs = ["AFFECTIONATELY", "ARDENTLY", "ANXIOUSLY", "BEAUTIFULLY",
    "BURNINGLY", "COVETOUSLY", "CURIOUSLY", "EAGERLY", "FERVENTLY",
    "FONDLY", "IMPATIENTLY", "KEENLY", "LOVINGLY", "PASSIONATELY",
    "SEDUCTIVELY", "TENDERLY", "WISTFULLY", ""
  ],

  adjectives = ["AFFECTIONATE", "AMOROUS", "ANXIOUS", "AVID", "BEAUTIFUL",
    "BREATHLESS", "BURNING", "COVETOUS", "CRAVING", "CURIOUS",
    "EAGER", "FERVENT", "FONDEST", "LOVEABLE", "LOVESICK",
    "LOVING", "PASSIONATE", "PRECIOUS", "SEDUCTIVE", "SWEET",
    "SYMPATHETIC", "TENDER", "UNSATISFIED", "WINNING", "WISTFUL", ""
  ],

  nouns = ["ADORATION", "AFFECTION", "AMBITION", "APPETITE", "ARDOUR", "BEING",
    "BURNING", "CHARM", "CRAVING", "DESIRE", "DEVOTION", "EAGERNESS",
    "ENCHANTMENT", "ENTHUSIASM", "FANCY", "FELLOW FEELING", "FERVOUR",
    "FONDNESS", "HEART", "HUNGER", "INFATUATION", "LITTLE LIKING",
    "LONGING", "LOVE", "LUST", "PASSION", "RAPTURE", "SYMPATHY",
    "THIRST", "WISH", "YEARNING"
  ],

  verbs = ["ADORES", "ATTRACTS", "CLINGS TO", "HOLDS DEAR", "HOPES FOR",
    "HUNGERS FOR", "LIKES", "LONGS FOR", "LOVES", "LUSTS AFTER",
    "PANTS FOR", "PINES FOR", "SIGHS FOR", "TEMPTS", "THIRSTS FOR",
    "TREASURES", "YEARNS FOR", "WOOS"
  ],
  adore_lines = ["There is no one else I love more, with every fiber of my being you are the one I adore."],
  adorable_lines = ["I die everytime I see you and I see you every day.\n","I adore you with every fiber of my being, my heart is filled with more love than its ever been.\n"],
  amazing_lines = ["You are so amazing, when I see you my heart sing so loudly it makes my ears ring."],
  angel_lines = ["Looking at your angelic face. Makes me happy all the time.","My adorable angel. In this lifetime, would you be mine?"],
  babe_lines = ["I love you babe, for you my soul was made."],
  baby_lines = ["Baby you know me inside and out, you know everything I am about."],
  beautiful_lines = ["The sight of you always knock me off my feet. Nothing on this earth compares to your kisses my sweet.\n","Everytime I look at you my breath is taken away, your heart is my home no where else, I want to stay.\n"],
  darling_lines = ["Darling, I think of you in my sleep. Darling, you truly are unique.\n","My darling, you rock my world, my darling you have span me in a twirl.\n",],
  honey_lines = ["Honey you have taken my whole heart. There is nothing that will break us apart.\n"," Honey you make my legs too weak, its so overwhelming, but  I will never retreat.\n"];
  const loveKey = ["adorable","honey","beautiful","darling"];


function choose(lst) {
  var i = Math.floor(Math.random() * lst.length);
  return lst[i];
}
  var textUpdate = document.querySelector("#love_Letter_Id");
  var btn = document.querySelector("#generator_Id");btn.addEventListener('click',generateLoveLetter);
  var input1 = document.querySelector(`input[name="from"]`), input2 = document.querySelector(`input[name="to"]`), input3 = document.querySelector(`input[name="prompt"]`);

function generatePoemFromPrompt(){
  let input3Text = input3.value;
  if (input3Text.toLowerCase() === "adorable") {
    textUpdate.innerHTML += choose(adorable_lines) + choose(adorable_lines);
  }
  if (input3Text.toLowerCase().includes("adorable beautiful") === true || input3Text.toLowerCase().includes("beautiful adorable") === true) {
    textUpdate.innerHTML += choose(adorable_lines) + choose(beautiful_lines);
  }
  if (input3Text.toLowerCase() === "beautiful") {
    textUpdate.innerHTML += choose(beautiful_lines) + choose(beautiful_lines);
  }
  if (input3Text.toLowerCase().includes("beautiful darling") === true || input3Text.toLowerCase().includes("darling beautiful") === true) {
    textUpdate.innerHTML += choose(adorable_lines) + choose(beautiful_lines);
  }
  if (input3Text.toLowerCase() === "darling") {
    textUpdate.innerHTML += choose(darling_lines) + choose(darling_lines);
  }
  if (input3Text.toLowerCase().includes("darling honey") === true || input3Text.toLowerCase().includes("honey darling") === true) {
    textUpdate.innerHTML += choose(adorable_lines) + choose(beautiful_lines);
  }
  if (input3Text.toLowerCase() === "honey") {
    textUpdate.innerHTML += choose(honey_lines) + choose(honey_lines);
  }
  /*for (let q = 0; q < loveKey.length; q++) {
    if(input3Text.toLowerCase() === loveKey[q]){
      console.log("1")
    }
  }*/
}

function generateLoveLetter(){
  var input1Text = input1.value; var input2Text = input2.value;
  
  let resultString = choose(salutations1);
  let restOfString = resultString.slice(1)
      restOfString = restOfString.toLowerCase()
  resultString = resultString.charAt(0).toUpperCase() + restOfString

  
  textUpdate.innerHTML ="<p>" + resultString +" "+ choose(salutations2).toLowerCase() + " "+`${input2Text},` + "</p>";

  for (var i = 0; i < 5; i = i + 1) {
    if (Math.random() < 0.5) {
      textUpdate.innerHTML += "My " +
        choose(adjectives).toLowerCase()+" "+
        choose(nouns).toLowerCase() + " " + choose(adverbs).toLowerCase() + " " +
        choose(verbs).toLowerCase() + " Your " +
        choose(adjectives).toLowerCase() + " " + choose(nouns).toLowerCase() + ". ";
    }
    else{
      textUpdate.innerHTML += "You are my " +
        choose(adjectives).toLowerCase()+ " " + choose(nouns).toLowerCase() + ". ";
    }
  }
  generatePoemFromPrompt();
  textUpdate.innerHTML += "<p>Yours " + choose(adverbs).toLowerCase() + `,<p>From: ${input1Text}`;
}