 
//Get the height and width of the main we will use this set canvas to the full
//size of the main element.
  var mWidth = document.querySelector('main').offsetWidth,
    mHeight = document.querySelector('main').offsetHeight,

  //Create the canvas
    canvas = document.createElement("canvas"),

  //Create the context
    ctx = canvas.getContext("2d"),

  //Create the initial bounding rectangle
    rect = canvas.getBoundingClientRect(),
  //current x position
    myXcord = 0,
    myycord = 0;

  // numPicker2 = document.getElementById("numPick2"),
  // numPickV = numPicker2.value;

function numEntry(){
    var numPicker2 = document.getElementById("numPick2");
    var numPickV = numPicker2.value;
    console.log("numEntry;; " + numPicker2.value);
    
   // xCord = document.getElementById('demo').innerHTML = 'X: ' + x;

    setTimeout(changeDivSize, 9000);
    var div = document.getElementById("demo"); 
    var str = "px";
    //console.log(div);
    console.log("here we are.2a");

    function changeDivSize(){
      //var rect = demo.getBoundingClientRect();
      var newXcord = rect.right + numPickV
      var moveRight = parseInt(myXcord + numPickV);
      console.log("here we are.4");
      console.log(parseInt( myXcord + 40) );
      div.style.width = moveRight+str;
      myXcord +=  numPickV;
      console.log(numPickV);
      console.log(moveRight);
     
    //numPickV ++;
    }

}

console.log("here we are..2");
//var myXcord =  numPickV - canvas.offsetLeft;
//console.log(myXcord)
//var rect = demo.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);

document.getElementById('btnNumPick').addEventListener("click",numEntry);