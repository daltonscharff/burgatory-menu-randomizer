function loadButton() {
    var column1 = document.getElementsByClassName("grid-item")[0];

    var randomButton = document.createElement("BUTTON");
    randomButton.setAttribute("onclick", "randomize();");
    randomButton.innerHTML = "Randomize";

    column1.appendChild(randomButton);
}

function randomize() {
    menu.sections.forEach(function(section, sectionIndex) {
        var sectionTitle = section.title;
        var sectionLimit = section.limit;
        var required = section.required;
        var options = section.options;
        var randoms = generateRandoms(section);
        var sectionDiv = document.getElementById("section-" + sectionTitle.replace(/ /g, "_").replace(/\./g, "").toUpperCase());
        var inputs = sectionDiv.getElementsByTagName("input");

        console.log(sectionTitle);
        for (var i = 0; i < options.length; i++) {
            console.log(randoms);
            console.log(inputs[i].checked);

            if (randoms.length > 0 && randoms.indexOf(i) != -1) {
                inputs[i].checked = true;
            } else {
                inputs[i].checked = false;
            }
        }
    });
}

function generateRandoms(section) {
    var limit = section.limit;
    var options = section.options;
    var size = section.options.length;
    var randoms = [-1];
    var choose = 1;

    if (!limit){
        // Prefer smaller limit size
        if (Math.random() * 10 < 8) {
            limit = size / 2;
        } else {
            limit = size;            
        }
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
