function displayForm() {
    var form = document.getElementsByTagName("form")[0];

    var columns = {};
    for (var i = 0; i < 2; i++) {
        columns[i] = form.getElementsByTagName("span")[i];
    };

    menu.sections.forEach(function(section, sectionIndex) {
        var sectionSpan = document.createElement("SPAN");
        sectionSpan.setAttribute("class", "section");
        sectionSpan.setAttribute("id", "section_" + sectionIndex);

        var sectionBr = document.createElement("BR");

        var sectionLabel = document.createElement("LABEL");
        sectionLabel.innerHTML = section.title;
        sectionSpan.appendChild(sectionLabel);
        sectionSpan.appendChild(sectionBr);

        section.options.forEach(function(option, optionIndex) {
            var valueSpan = document.createElement("SPAN");
            valueSpan.setAttribute("class", "valueSpan");
            var valueLabel = document.createElement("LABEL");
            valueLabel.innerHTML = option.value;

            var selection = document.createElement("INPUT");
            selection.name = section.title;
            selection.value = option.value;
            if (section.limit == 1 && section.required) {
                selection.setAttribute("type", "radio");
                if (optionIndex == 0){
                    selection.checked = true;
                } else {
                    selection.checked = false;
                }
            } else {
                selection.setAttribute("type", "checkbox");
            }

            valueSpan.appendChild(selection);
            valueSpan.appendChild(valueLabel);
            sectionSpan.appendChild(valueSpan);
        });

        if (sectionIndex == 0) {
            columns[0].appendChild(sectionSpan);
        } else {
            columns[1].appendChild(sectionSpan);
        }
    });

    evenColumnHeights(columns[0], columns[1]);
}

function evenColumnHeights(col0, col1){
    console.log(col0.offsetHeight);
    console.log(col1.offsetHeight);
    if (col0.offsetHeight > col1.offsetHeight) {
        col1.style.height = col0.offsetHeight + "px";
    } else {
        col0.style.height = col1.offsetHeight + "px";
    }
}
