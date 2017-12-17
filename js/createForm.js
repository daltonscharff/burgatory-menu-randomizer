function displayForm() {
    var form = document.getElementsByTagName("form")[0];

    menu.sections.forEach(function(section, sectionIndex) {
        makeSection(section, sectionIndex);
    });
}

function makeSection(section, sectionIndex) {
    var sectionTitle = section.title;
    var sectionLimit = section.limit;
    var required = section.required;
    var options = section.options;

    var sectionDiv = document.getElementById("section-" + sectionTitle.replace(/ /g, "_").replace(/\./g, "").toUpperCase());

    options.forEach(function(option, optionIndex) {
        var sectionValue = document.createElement("DIV");
        sectionValue.setAttribute("class", "sectionValue");
        var valueLabel = document.createElement("LABEL");
        valueLabel.innerHTML = option.value;
        if (option.cost) {
            valueLabel.innerHTML += "&nbsp&nbsp&nbsp&nbsp<b>$" + option.cost + "</b>";
        }

        var selection = document.createElement("INPUT");
        selection.name = section.title;
        selection.value = option.value;
        if (section.limit == 1) {
            selection.setAttribute("type", "radio");
            if (optionIndex == 0){
                selection.checked = true;
            } else {
                selection.checked = false;
            }
        } else {
            selection.setAttribute("type", "checkbox");
        }

        sectionValue.appendChild(selection);
        sectionValue.appendChild(valueLabel);
        sectionDiv.appendChild(sectionValue);
    });
}
