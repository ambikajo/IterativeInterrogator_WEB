function newText() {
    allClear()
    createP(textfield.value()).addClass('output-style')
}

function allClear() {
    var p_elements = document.getElementsByClassName('output-style')
    while (p_elements.length > 0) {
        p_elements[0].parentNode.removeChild(p_elements[0]);
    }
}

function savePoem() {
    let c;
    let myFont;
    const can = p => {
        var p_elements = document.getElementsByClassName('output-style')[0].innerText
        var q_elements = document.getElementsByClassName('bodycopy')[0].innerText
        console.log(c)
        c = q_elements + " " + p_elements

        p.preload = function() {
            myFont = loadFont('assets/MONOS.TTF')
        }

        p.setup = function() {
            p.noLoop()
            let cnv = p.createCanvas(400, 400);
            p.background(255)
            p.textAlign(CENTER)
            p.textFont(myFont)
            p.text(c, 20, 120, 380, 380)
            p.save("canvas.jpg")
            p.clear()

        };

        //        p.draw = function () {
        //            p.background(255)
        //            p.textAlign(CENTER)
        //            p.textFont(myFont)
        //            p.text(c, 20, 120, 380, 380)
        //            p.save("canvas.jpg")
        //            p.clear()
        //        }
    }
    new p5(can);
    //    can.clear()
}