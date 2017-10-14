function BingBong() {
    var n = Math.floor((Math.random() * 100) + 1);
    if(n) {
        var output = "";
        if(n % 3 == 0)
            output += "Bing ";
        if(n % 5 == 0) 
            output += " Bong ";
        document.getElementById('output').innerHTML = output + n;
    }    
}