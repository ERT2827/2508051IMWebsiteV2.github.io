document.getElementById("searchClear").addEventListener("click", clearVal);


var textCheck = "";

var likeness = 0;

function getVal() {
    textCheck = document.getElementById("searchR").value;
    // console.log(textCheck);
    // console.log(similarity(textCheck,'piss'));
}

function clearVal(){
    textCheck = "";
    document.getElementById("searchR").value = "";
}

filteredSelection();
filterSelection();

//This version is for the main site

function filteredSelection() {
    var x, y, i;
    x = document.getElementsByClassName("grid-Item");
    y = document.getElementsByClassName("post-Heading");
    
    
    if(textCheck.length > 0){
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            console.log(y[i].innerHTML);
            
            likeness = similarity(textCheck, y[i].innerHTML);
            console.log(likeness);
            if (likeness > 0.4) w3AddClass(x[i], "show");
      }
    }else{
        for (i = 0; i < x.length; i++) {
            w3AddClass(x[i], "show");
      }
    }    
}

//Portfolio version

function filterSelection() {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if(textCheck.length > 0){
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            likeness = similarity(textCheck, x[i].innerText);
            console.log(likeness);
            if (likeness > 0.4) w3AddClass(x[i], "show");
      }
    }else{
        for (i = 0; i < x.length; i++) {
            w3AddClass(x[i], "show");
      }
    }
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }



// console.log(similarity(textCheck,'piss'));