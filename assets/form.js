
//adds new <p> element from the submission of the text
function newText() {
    allClear();
    createP(textfield.value()).addClass('output-style');
}

//clears all the DOM elements in the newText() event and also the DOM element from when you save the answers
function allClear() {
    var p_elements = document.getElementsByClassName('output-style');
    while (p_elements.length > 0) {
        p_elements[0].parentNode.removeChild(p_elements[0]);
    }

    var p_canvas = document.getElementsByClassName('p5Canvas');
    while(p_canvas.length > 0) {
          p_canvas[0].parentNode.removeChild(p_canvas[0]);
    }
}

//collects the data from the questions posed and the answer returned and saves a square version of the poem
function savePoem() {
    let c;
    //creates a new p5 instance everytime you press the save button and makes a simple square artwork
    const can = p => {
        var p_elements = document.getElementsByClassName('output-style')[0].innerText;
        var q_elements = document.getElementsByClassName('bodycopy')[0].innerText;
        c = q_elements + " " + p_elements;
        console.log(c);

        p.setup = function() {
            p.noLoop();
            p.pixelDensity(1);
            let cnv = p.createCanvas(400, 400);
            p.background(255);
            p.textAlign(CENTER);
            p.textFont(myFont);
            p.textSize(20);
            p.text(c, 40, 120, 340, 340);
            p.save("canvas.jpg");
            p.clear();
        };
    };
    new p5(can);
    allClear();

}
