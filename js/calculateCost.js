var cost = 0;

function calculateCost() {
    cost = 0;
    var allInputs = document.getElementsByTagName("input");

    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs[i].checked) {
            menu.sections.forEach(function (section) {
                section.options.forEach(function (option) {
                    if (option.value == allInputs[i].value && option.cost){
                        cost += option.cost;
                    }
                });
            });
        }
    }
    updateCostArea();
}

function updateCostArea() {
    var costFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
    var costArea = document.getElementById("costArea");
    costArea.innerHTML = costFormat.format(cost);
}
