// for the js code, i used a lot of if-else sttements to accompany the big amount of possible situations

// first off, i used const to define a variable, which are taken from the two <select>-<option> tags
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");

// i also used an event listener so that the program will be able to change the options for select2 depending on the choice from select1
select1.addEventListener("change", updateInput);

// this function helps in adding options to select2
function addOption(value, name) {
  const option = document.createElement("option");
  option.value = value;
  option.text = name;
  select2.add(option);
}

// this function takes the value of select1, resets select2, and calls the first function to set custom options tailored to the choice made in select1
function updateInput() {
    const selectedOption = select1.value;
    // Reset the options in select2
    select2.innerHTML = "";
  
    // for the if-else statement below...

    // it compares the value of the user's selected option and runs the block of code appropriate for the situation
    if (selectedOption === "1") {
        // here, the function above is called three times to add the options to the select2 box
        addOption("distance", "Distance");
        addOption("speed", "Speed");
        addOption("time", "Time");
        
        // i have these two codes to set the placeholder to the first choice (which in this case is for distance)
        document.getElementById("firstvalue").placeholder = "Speed";
        document.getElementById("secondvalue").placeholder = "Time";

        // and here, i added another event listener similar to what i did earlier for select1, but this time for select2
        select2.addEventListener("change", function() {
            const selectedUnit = select2.value;

            // the event that it changes are the different placeholders that are appropriate to the unit selected in select2
            if (selectedUnit === "distance") {
            document.getElementById("firstvalue").placeholder = "Speed";
            document.getElementById("secondvalue").placeholder = "Time";
            }
            
            else if (selectedUnit === "speed") {
            document.getElementById("firstvalue").placeholder = "Distance";
            document.getElementById("secondvalue").placeholder = "Time";
            }
            
            else if (selectedUnit === "time") {
            document.getElementById("firstvalue").placeholder = "Distance";
            document.getElementById("secondvalue").placeholder = "Speed";
            }
        });
    }
    
    // and it's the same for the rest of this if-else statement
    else if (selectedOption === "2") {
        addOption("force", "Force");
        addOption("mass", "Mass");
        addOption("acceleration", "Acceleration");

        document.getElementById("firstvalue").placeholder = "Mass";
        document.getElementById("secondvalue").placeholder = "Acceleration";

        select2.addEventListener("change", function() {
            const selectedUnit = select2.value;
    
            if (selectedUnit === "force") {
            document.getElementById("firstvalue").placeholder = "Mass";
            document.getElementById("secondvalue").placeholder = "Acceleration";
            }
            
            else if (selectedUnit === "mass") {
            document.getElementById("firstvalue").placeholder = "Force";
            document.getElementById("secondvalue").placeholder = "Acceleration";
            }
            
            else if (selectedUnit === "acceleration") {
            document.getElementById("firstvalue").placeholder = "Force";
            document.getElementById("secondvalue").placeholder = "Mass";
            }
        });
    }
    
    else if (selectedOption === "3") {
        addOption("momentum", "Momentum");
        addOption("mass2", "Mass");
        addOption("velocity", "Velocity");

        document.getElementById("firstvalue").placeholder = "Mass";
        document.getElementById("secondvalue").placeholder = "Velocity";

        select2.addEventListener("change", function() {
            const selectedUnit = select2.value;
  
            if (selectedUnit === "momentum") {
            document.getElementById("firstvalue").placeholder = "Mass";
            document.getElementById("secondvalue").placeholder = "Velocity";
            }
        
            else if (selectedUnit === "mass2") {
            document.getElementById("firstvalue").placeholder = "Momentum";
            document.getElementById("secondvalue").placeholder = "Velocity";
            }
        
            else if (selectedUnit === "velocity") {
            document.getElementById("firstvalue").placeholder = "Momentum";
            document.getElementById("secondvalue").placeholder = "Mass";
            }
        });
    }
        
    else if (selectedOption === "4") {
        addOption("work", "Work");
        addOption("force2", "Force");
        addOption("distance2", "Distance");

        document.getElementById("firstvalue").placeholder = "Force";
        document.getElementById("secondvalue").placeholder = "Distance";

        select2.addEventListener("change", function() {
            const selectedUnit = select2.value;
    
            if (selectedUnit === "work") {
            document.getElementById("firstvalue").placeholder = "Force";
            document.getElementById("secondvalue").placeholder = "Distance";
            }
            
            else if (selectedUnit === "force2") {
            document.getElementById("firstvalue").placeholder = "Work";
            document.getElementById("secondvalue").placeholder = "Distance";
            }
            
            else if (selectedUnit === "distance2") {
            document.getElementById("firstvalue").placeholder = "Work";
            document.getElementById("secondvalue").placeholder = "Force";
            }
        });
    }
        
    else if (selectedOption === "5") {
        addOption("work2", "Work");
        addOption("power", "Power");
        addOption("time2", "Time");

        document.getElementById("firstvalue").placeholder = "Power";
        document.getElementById("secondvalue").placeholder = "Time";
    
        select2.addEventListener("change", function() {
            const selectedUnit = select2.value;
    
            if (selectedUnit === "work") {
            document.getElementById("firstvalue").placeholder = "Power";
            document.getElementById("secondvalue").placeholder = "Time";
            }
            
            else if (selectedUnit === "power") {
            document.getElementById("firstvalue").placeholder = "Work";
            document.getElementById("secondvalue").placeholder = "Time";
            }
            
            else if (selectedUnit === "time2") {
            document.getElementById("firstvalue").placeholder = "Work";
            document.getElementById("secondvalue").placeholder = "Power";
            }
        });
    }
}
  
// for this function, it proceeds to calculation for the user's wanted value
function calculate() {
    // i first defined a variable for the selected unit (so it will be taking the value of select2)
    const selectedUnit = select2.value;
    // and two variables for the input and convert it into a number using parseFloat
    var convertval1 = parseFloat(document.getElementById("firstvalue").value);
    var convertval2 = parseFloat(document.getElementById("secondvalue").value);

    // and once those were set, i started with another if-else statement
    if (selectedUnit === "distance") {
        // if the selectedUnit is distance, then the program will calculate for distance which is seen in the defined variable below
        var distance = convertval1 * convertval2;
        // once calculated, i get the id of the answer box and use innerHTML to print it inside
        document.getElementById("answer").innerHTML = distance + " m";

        // i also print the formula this way
        var formula = "d = st";
        document.getElementById("formula").innerHTML = formula;

        // as well as the solution
        var solution = convertval1 + " m/s * " + convertval2 + " s = " + distance + " m";
        document.getElementById("solution").innerHTML = solution;
    }

    // the rest of the if-else statement is the same as how i explained above
    else if (selectedUnit == "speed") {
        var speed = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = speed + " m/s";

        var formula = "s = d / t";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " m / " + convertval2 + " s = " + speed + " m/s";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "time") {
        var time = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = time + " s";

        var formula = "t = d / s";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " m/s / " + convertval2 + " s = " + time + " s";
        document.getElementById("solution").innerHTML = solution;
    }


    else if (selectedUnit == "force") {
        var force = convertval1 * convertval2;
        document.getElementById("answer").innerHTML = force + " N";

        var formula = "f = ma";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " kg * " + convertval2 + " m/s^2 = " + force + " N";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "mass") {
        var mass = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = mass + " kg";

        var formula = "m = f / a";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " N / " + convertval2 + " m/s^2 = " + mass + " kg";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "acceleration") {
        var acceleration = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = acceleration + " m/s^2";

        var formula = "a = f / m";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " N / " + convertval2 + " m = " + acceleration + " m/s^2";
        document.getElementById("solution").innerHTML = solution;
    }


    else if (selectedUnit == "momentum") {
        var momentum = convertval1 * convertval2;
        document.getElementById("answer").innerHTML = momentum + " kg m/s";

        var formula = "p = mv";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " kg * " + convertval2 + " m/s = " + momentum + " kg m/s";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "mass2") {
        var mass2 = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = mass2 + " kg";

        var formula = "m = p / v";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " kg m/s / " + convertval2 + " m/s = " + mass2 + " kg";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "velocity") {
        var velocity = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = velocity + " m/s";

        var formula = "v = p / m";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " kg m/s / " + convertval2 + " kg = " + velocity + " m/s";
        document.getElementById("solution").innerHTML = solution;
    }


    else if (selectedUnit == "work") {
        var work = convertval1 * convertval2;
        document.getElementById("answer").innerHTML = work + " J";

        var formula = "W = Fd";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " N * " + convertval2 + " m = " + work + " J";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "force2") {
        var force2 = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = force2 + " N";

        var formula = "F = W / d";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " J / " + convertval2 + " m = " + force2 + " N";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "distance2") {
        var distance2 = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = distance2 + " m";

        var formula = "d = W / F";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " J / " + convertval2 + " N = " + distance2 + " m";
        document.getElementById("solution").innerHTML = solution;
    }


    else if (selectedUnit == "work2") {
        var work2 = convertval1 * convertval2;
        document.getElementById("answer").innerHTML = work2 + " J";

        var formula = "W = Pt";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " W * " + convertval2 + " s = " + work2 + " J";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "power") {
        var power = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = power + " W";

        var formula = "P = W / t";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " J / " + convertval2 + " s = " + distance + " W";
        document.getElementById("solution").innerHTML = solution;
    }

    else if (selectedUnit == "time2") {
        var time2 = convertval1 / convertval2;
        document.getElementById("answer").innerHTML = time2 + " s";

        var formula = "t = W / P";
        document.getElementById("formula").innerHTML = formula;

        var solution = convertval1 + " J / " + convertval2 + " W = " + distance + " s";
        document.getElementById("solution").innerHTML = solution;
    }
}