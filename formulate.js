function displayForm() {
    var form = document.getElementsByTagName("form")[0];

    menu.sections.forEach(function(section) {
        var span = document.createElement("SPAN");
        var sectionLabel = document.createElement("LABEL");
        sectionLabel.innerHTML = section.title;
        span.appendChild(sectionLabel);

        section.options.forEach(function(option, index) {
            var div = document.createElement("DIV");
            var valueLabel = document.createElement("LABEL");
            valueLabel.innerHTML = option.value;

            var selection = document.createElement("INPUT");
            selection.name = section.title;
            selection.value = option;
            if (section.limit == 1 && section.required) {
                selection.setAttribute("type", "radio");
                console.log(index);
                if (index == 0){
                    selection.checked = true;
                } else {
                    selection.checked = false;
                }
            } else {
                selection.setAttribute("type", "checkbox");
            }

            div.appendChild(selection);
            div.appendChild(valueLabel);
            span.appendChild(div);
        });

        form.appendChild(span);
    });
}
