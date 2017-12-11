function displayForm() {
    var form = document.getElementsByTagName("form")[0];

    var columns = getArrayOfTags("div", form.getElementsByTagName("div")[0]);

    menu.sections.forEach(function(section, sectionIndex) {
        var sectionSpan = makeSection(section, sectionIndex);
        assignSpanToColumn(sectionSpan, columns);
    });
}

function getArrayOfTags(tag, element) {
    var elements = [];
    for (var i = 0; i < element.getElementsByTagName(tag).length; i++) {
        elements[i] = element.getElementsByTagName(tag)[i];
    }
    return elements;
}

function makeSection(section, sectionIndex) {
    var sectionSpan = document.createElement("SPAN");
    sectionSpan.setAttribute("class", "section");
    sectionSpan.setAttribute("id", "section_" + sectionIndex);

    var sectionLabel = document.createElement("DIV");
    sectionLabel.setAttribute("class", "sectionLabel");
    sectionLabel.innerHTML = section.title;
    sectionSpan.appendChild(sectionLabel);

    section.options.forEach(function(option, optionIndex) {
        var valueSpan = document.createElement("SPAN");
        valueSpan.setAttribute("class", "valueSpan");
        var valueLabel = document.createElement("LABEL");
        valueLabel.innerHTML = option.value;
        if (option.cost) {
            valueLabel.innerHTML += "&nbsp&nbsp&nbsp&nbsp<b>$" + option.cost + "</b>";
        }

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
    return sectionSpan;

}

function assignSpanToColumn(sectionSpan, columns) {
    if (sectionSpan.id == "section_0") {
        columns[0].appendChild(sectionSpan);
    } else {
        columns[1].appendChild(sectionSpan);
    }
}
