var button = document.getElementById('calculate');
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

button.addEventListener('click', function(e) {
    e.preventDefault();
    var textarea = document.getElementById('text');
    if (textarea.value.length) {
        var dict = {};
        var text = textarea.value.toLowerCase();
        var resultBlock = document.getElementById('result');
        [...text].forEach((ch) => {
            if(isLetter(ch)) {
                dict[ch] = dict[ch]? dict[ch]+1 : 1;
            }
        });

        var sortedDict = [];
        for (var ch in dict) {
           sortedDict.push([ch, dict[ch]]);
        }

        sortedDict = sortedDict.sort((a, b) => a[1] - b[1]);
        console.log(sortedDict);
        var len = text.length;
        var result = '<p>Всего ' + len + ' букв</p>';
        sortedDict.reverse().forEach((v) => {
            result += "<p>" + v[0] + ": " + v[1] + " ( " + (v[1]/len*100).toFixed(2) + "% )</p>";
        });
        resultBlock.innerHTML = result;
    }
})