/*
    for the javascript code, i created two functions;
        - convert()
        - clearForm()
*/

function convert() {
    // inside the convert() function, i first defined my variables

    // here we have the select1 (for the first <select>-<option> tag)
    var select1 = document.getElementById("select1");
    // and the contents for the var above will be moved into this one
    var from = select1.options[select1.selectedIndex].value;
    
    // these two are the same as above, but made for the second <select>-<option> tag
    var select2 = document.getElementById("select2");
    var to = select2.options[select2.selectedIndex].value;
    
    // i also defined the variable for input
    var input = document.getElementById("convertit").value;
    // added a console.log to see if it's working properly
    console.log(input);
    // and then converted the input as a number using parseFloat
    var convertnum = parseFloat(input);

    // once the variables were set, i started a lengthy if-else statement that will determine how to convert the given
    // each condition compares the "from" and "to" <select>-<option> choices to perform the appropriate actions
    if (from === "1" && to === "2") {
        // here we have celsius to farenheit

        // i created a variable amed farenheit which equals to the formula of that conversion
        var farenheit = (convertnum * 1.8) + 32;
        // once it has the farenheit variable, it will display the answer for the user;
        document.getElementById("displayans").innerHTML = farenheit + " °F";
        
        // as well as the solution
        var solution = "(" + convertnum + " °C * 1.8) + 32 = " + farenheit + " °F";
        document.getElementById("displaysol").innerHTML = solution;
    }
    else if (from === "1" && to === "3") {
        // here we have the same process, but for celsius to kelvin
        var kelvin = convertnum + 273.15;
        document.getElementById("displayans").innerHTML = kelvin + " K";
        
        var solution = convertnum + " °C + 273.15 = " + kelvin + " K";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "1" && to === "4") {
        // celsius to rankine
        var rankine = (convertnum + 273.15) * 1.8;
        document.getElementById("displayans").innerHTML = rankine + " R";
        
        var solution = "(" + convertnum + " °C + 273.15) * 1.8 = " + rankine + " R";
        document.getElementById("displaysol").innerHTML = solution;
    }


    else if (from === "2" && to === "1") {
        // farenheit to celsius
        var celsius = (convertnum - 32) / 1.8;
        document.getElementById("displayans").innerHTML = celsius + " °C";
        
        var solution = "(" + convertnum + " °F - 32) / 1.8 = " + celsius + " °C";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "2" && to === "3") {
        // farenheit to kelvin
        var kelvin = (convertnum + 459.67) / 1.8;
        document.getElementById("displayans").innerHTML = kelvin + " K";
        
        var solution = "(" + convertnum + " °F + 459.67) / 1.8 = " + kelvin + " K";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "2" && to === "4") {
        // farenheit to rankine
        var rankine = convertnum + 459.67;
        document.getElementById("displayans").innerHTML = rankine + " R";
        
        var solution =  convertnum + " °F + 459.67 = " + rankine + " R";
        document.getElementById("displaysol").innerHTML = solution;
    }


    else if (from === "3" && to === "1") {
        // kelvin to celsius
        var celsius = convertnum - 273.15;
        document.getElementById("displayans").innerHTML = celsius + " °C";
        
        var solution =  convertnum + " K - 273.15 = " + celsius + " °C";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "3" && to === "2") {
        // kelvin to farenheit
        var farenheit = (convertnum * 1.8) - 459.67;
        document.getElementById("displayans").innerHTML = farenheit + " °F";
        
        var solution =  "(" + convertnum + " K * 1.8) - 459.67 = " + farenheit + " °F";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "3" && to === "4") {
        // kelvin to rankine
        var rankine = convertnum + 459.67;
        document.getElementById("displayans").innerHTML = rankine + " R";
        
        var solution =  convertnum + " K * 1.8 = " + rankine + " R";
        document.getElementById("displaysol").innerHTML = solution;
    }


    else if (from === "4" && to === "1") {
        // rankine to celsius
        var celsius = (convertnum / 1.8) - 273.15;
        document.getElementById("displayans").innerHTML = celsius + " °C";
        
        var solution =  convertnum + " R + 459.67 = " + celsius + " °C";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "4" && to === "2") {
        // rankine to farenheit
        var farenheit = convertnum - 459.67;
        document.getElementById("displayans").innerHTML = farenheit + " °F";
        
        var solution =  convertnum + " R - 459.67 = " + farenheit + " °F";
        document.getElementById("displaysol").innerHTML = solution;
    }

    else if (from === "4" && to === "3") {
        // rankine to kelvin
        var kelvin = convertnum / 1.8;
        document.getElementById("displayans").innerHTML = kelvin + " K";
        
        var solution =  convertnum + " R / 1.8 = " + kelvin + " K";
        document.getElementById("displaysol").innerHTML = solution;
    }

    // by creating those conditions, all possible conversions are covered
    // (so the user can convert as much as they want, however they want)

    else if (from === "1" && to === "1" || from === "2" && to === "2" || from === "3" && to === "3" || from === "4" && to === "4") {
        // but, if the user will try to convert something into itself, the program will result in a syntax error
        alert("Syntax Error. Please try again.")
    }

    else {
        // and if i didn't cover any other scenario, an alert will say "something went wrong"
        alert("Something went wrong. Please try again.")
    }
}

function clearForm() {
    // now inside this function, i used console.log in order to track functionality of the program
    console.log("Function Called");
    // and .reset() to clear the whole page and return it back to default
    document.getElementById("myForm").reset();
}