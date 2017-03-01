var pheno = [];
var nextPheno = [];

getInitPheno();
getNextPheno(1);
getNextPheno(2);
getNextPheno(3);
getNextPheno(4);

function getInitPheno() {
    for (i = 0; i < 10; i++) {
        j = Math.floor(Math.random() * 4);
        if (j == 0) { pheno[i] = "red" }
        else if (j == 1) { pheno[i] = "blue" }
        else { pheno[i] = "purple" }
        document.querySelector("td.blank").className = pheno[i];
    }
    $("td.red").fadeIn(20);
    $("td.blue").fadeIn(20);
    $("td.purple").fadeIn(20);
}

function getNextPheno(rownumber) {
    for (i = 0; i < 10; i++) {
        if (pheno[i] == pheno[i + 1]) {
            if (pheno[i] != "purple") {
                nextPheno[i] = pheno[i];
                i++;
                nextPheno[i] = pheno[i];
            }
            else {
                j = Math.floor(Math.random() * 4);
                if (j == 0) { nextPheno[i] = "red" }
                else if (j == 1) { nextPheno[i] = "blue" }
                else { nextPheno[i] = "purple" }
                i++;
                j = Math.floor(Math.random() * 4);
                if (j == 0) { nextPheno[i] = "red" }
                else if (j == 1) { nextPheno[i] = "blue" }
                else { nextPheno[i] = "purple" }
            }
        }
        else {
            if (pheno[i] != "purple" && pheno[i + 1] != "purple") {
                nextPheno[i] = "purple";
                i++;
                nextPheno[i] = "purple";
            }
            else {
                j = Math.floor(Math.random() * 2);
                if (j == 0) { nextPheno[i] = "purple" }
                else { nextPheno[i] = pheno[i] }
                i++;
                j = Math.floor(Math.random() * 2);
                if (j == 0) { nextPheno[i] = "purple" }
                else { nextPheno[i] = pheno[i] }

            }
        }
    }
    i = nextPheno.length;
    while (i > 0) {
        j = Math.floor(Math.random() * i);
        i -= 1;
        r = nextPheno[i];
        nextPheno[i] = nextPheno[j];
        nextPheno[j] = r;
    }
    for (i = 0; i < 10; i++) {
        document.querySelector("td.blank").className = nextPheno[i];
        pheno[i] = nextPheno[i]
    }
    $("td.red").delay(1000 * rownumber).fadeIn(900);
    $("td.blue").delay(1000 * rownumber).fadeIn(900);
    $("td.purple").delay(1000 * rownumber).fadeIn(900);
}
