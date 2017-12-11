function loadButton() {
    var column1 = document.getElementsByClassName("grid-item")[0];

    var randomButton = document.createElement("BUTTON");
    randomButton.setAttribute("onclick", "randomize();");
    randomButton.innerHTML = "Randomize";

    column1.appendChild(randomButton);
}

function randomize() {
    menu.sections.forEach(function(section, sectionIndex) {
        var randoms = generateRandoms(section);

        var sectionSpan = document.getElementById("section_" + sectionIndex);
        // sectionSpan.getElementsByTagName("input").forEach(function(element, elementIndex) {
        //     if (randoms.length > 0 && randoms.indexOf(elementIndex) != -1) {
        //         element.checked = true;
        //     } else {
        //         element.checked = false;
        //     }
        // });
        console.log(sectionSpan.getElementsByTagName("input").length);
        console.log(randoms);


    });
}

function generateRandoms(section) {
    var limit = section.limit;
    var options = section.options;
    var size = section.options.length;
    var randoms = [-1];
    var choose = 1;

    if (!limit){
        limit = size;
    }

    if (!section.required) {
        choose = Math.floor(Math.random() * (limit + 1));
    }

    if (choose == 0){
        randoms = [];
    } else {
        for(var i = 0; i < choose; i++){
            var rand = Math.floor(Math.random() * size);
            randoms[i] = rand;
        }
    }

    return randoms;
}
