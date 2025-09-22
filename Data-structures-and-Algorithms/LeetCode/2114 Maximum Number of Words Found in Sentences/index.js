
var mostWordsFound = function(sentences) {

   return Math.max(...sentences.map(sentence=> sentence.split(" ").length))
};











console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))