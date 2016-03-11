(function(){
    var interval = 1000;
    setInterval(function(){
      Array.prototype.forEach.call(document.querySelectorAll('a'), function(element){
        if(element.text === "Poke Back"){
            element.click();
        }
      });
    }, interval);
})();