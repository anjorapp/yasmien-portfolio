let currentExercise = "";

/* TOGGLE SIDEBAR */
function toggleSidebar() {
    const sidebar = document.getElementById("sideBar");

    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "200px";
    }
}

/* HOME */
function showHome() {
    document.getElementById("card").innerHTML = `
        <h2>Welcome</h2>
        <p>Select an exercise to begin.</p>
    `;
}

/* OPEN EXERCISE */
function openExercise(exer) {

    currentExercise = exer;
    toggleSidebar();

    const list = document.getElementById("activity-list");
    list.innerHTML = "";

    let max = exer === "exer2" ? 7 : 8;

    document.getElementById("sidebar-title").innerText =
        exer === "exer2"
            ? "Exercise 2 Activities"
            : "Exercise 3 Activities";

    for (let i = 1; i <= max; i++) {
        list.innerHTML += `
            <button onclick="showActivity(${i})">
                Activity ${i}
            </button>
        `;
    }
}

/* SHOW ACTIVITY */
function showActivity(num) {

    const card = document.getElementById("card");

    if (currentExercise === "exer2") {
        if (num === 1) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 1: Your First JavaScript Output</h2>
                <p>Objective: Learn how JavaScript displays output.</p>
                <p>This program will show an alert and log message.</p>
                <button class="run-btn" onclick="runActivity1()">Run Program</button>
            `;
        }

        else if (num === 2) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 2: Variables and Data Types</h2>
                <p>Objective: Understand variables and basic data types.</p>
                <p>(Check the console for the result.)</p>
                <button class="run-btn" onclick="runActivity2()">Run Program</button>
            `;
        }

        else if (num === 3) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 3: Simple Calculator</h2>
                <p>Objective: Practice arithmetic operations.</p>
                <p>(Check the console for the result.)</p>
                <button class="run-btn" onclick="runActivity3()">Run Program</button>
            `;
        }

        else if (num === 4) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 4: User Input using prompt().</h2>
                <p>Objective: Interact with the user.</p>
                <button class="run-btn" onclick="runActivity4()">Run Program</button>
            `;
        }

        else if (num === 5) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 5: Conditional Statements</h2>
                <p>Objective: Introduce if, else.</p>
                <button class="run-btn" onclick="runActivity5()">Run Program</button>
            `;
        }

        else if (num === 6) {
            card.innerHTML = `
                <h2>Exercise 2</h2>
                <h2>Activity 6: Loops (Basic)</h2>
                <p>Objective: Understand repetition.</p>
                <p>(Check the console for the result.)</p>
                <button class="run-btn" onclick="runActivity6()">Run Program</button>
                
            `;
        }

        else if (num === 7) {
            card.innerHTML = `
            <h2>Exercise 2</h2>
                <h2>Activity 7: JavaScript and HTML Interaction</h2>
                <p>Objective: Connect JavaScript with the webpage.</p>
                <button class="run-btn" onclick="runActivity7()">Button here</button>
            `;
        }


        // EXERCISE 3 ACTIVITIES
        else {
            card.innerHTML = `
                <h2>Exercise 2 - Activity ${num}</h2>
                <p>Program not created yet.</p>
            `;
        }

        // EXERCISE 3 ACTIVITIES
    } else {
        if (num === 1) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 1: </h2>
                <p>Task: Create a button that changes the background of the webpage when clicked.</p>
                <button class="run-btn" id="colorBtn" onclick="runActivity1()">Change Color</button>
                <button class="run-btn" id="resetBtn" >Reset</button>

            `;
        }

        else if (num === 2) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 2: </h2>
                <p>Task: Create a Dark Mode toggle button</p>
                <h3>Dark Mode Toggle</h3>
                <button class="run-btn" id="darkModeBtn" onclick="runActivity2()">Toggle Dark Mode</button>
                <p>(Press the button to turn back to light mode.)</p>
            `;
        }
        else if (num === 3) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 3: </h2>
                <p>Task: Add new list items when a button is clicked.</p>
                <ul id="itemList"></ul>
                <button class="run-btn" id="addBtn" onclick="runActivity3()">Add Item</button>
            `;
        }

        else if (num === 4) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 4: </h2>
                <p>Task: Remove a paragraph when button is clicked.</p>
                <p id="removeMe">This paragraph will be removed.</p>
                <button class="run-btn" id="removeBtn" onclick="runActivity4()">Remove Paragraph</button>
            `;
        }

        else if (num === 5) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 5: </h2>
                <p>Task: Display of characters typed in input field.</p>
                <input onclick="runActivity5()" type="text" id="textInput" placeholder="Type something...">
                <p>Character Count: <span id="charCount">0</span></p>
            `;
        }

        else if (num === 6) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 6: </h2>
                <p>Task: Create a simple addition calculator.</p>
                 <input type="number" id="num1" placeholder="Enter first number" />
                <input type="number" id="num2" placeholder="Enter second number" />
                <button class="run-btn" id="calcBtn" onclick="runActivity6()">Add</button>
                <p>Result: <span id="result" >0</span></p>
            `;
        }
        else if (num === 7) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 7: </h2>   
                <p>Task: Change image when button is clicked.</p>
                <img
                    id="myImage"
                    src="kuromi.jpg"
                    width="200"
                    alt="Image"
                />
                <br /><br />
                <button class="run-btn" id="imgBtn" onclick="runActivity7()">Change Image</button>
            `;
        }

        else if (num === 8) {
            card.innerHTML = `
                <h2>Exercise 3</h2>
                <h2>Activity 8: </h2>   
                <p>Task: Create a mini To-Do list.</p>
                <input type="text" id="taskInput" placeholder="Enter a task">
                <button class="run-btn" id="addTaskBtn" onclick="runActivity8()">Add Task</button>
                <ul id="taskList"></ul>
            `;
        }


        else {
            card.innerHTML = `
                <h2>Exercise 3 - Activity ${num}</h2>
                <p>Program not created yet.</p>
            `;
        }
    }
}


/* RUN SEPARATE PROGRAMS */

/* Activity 1 */
function runActivity1() {

    if (currentExercise == "exer2") {
        alert("Welcome to JavaScript!");
        console.log("This is my first JS program.");
    }

    else { // Exercse 3
        const button = document.getElementById("colorBtn");

        button.addEventListener("click", function() {
            const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lightcoral"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });
    }
}

/* Activity 2 */
function runActivity2() {
    if (currentExercise == "exer2") {
        // Declare the following variables:
        let Name = "Yasmien";
        let age = 21;
        let isStudent = true;
        // Display each variable in the console.
        console.log("Name: ", Name);
        console.log("Age: ", age);
        console.log("isStudent: ", isStudent);
        // Display a sentence in the console that includes all three variables.
        console.log("My name is " + Name + ", I am " + age + " years old. ");
    }

    else { // Exercse 3
        const darkModeBtn = document.getElementById("darkModeBtn");

        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            console.log('dark-mode')
        });
    }
}

/* Activity 3 */
function runActivity3() {
    if (currentExercise == "exer2") {
        // Declare two numbers
        let num1 = 43;
        let num2 = 28;

        // Compute and display
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;

        // Display results in the console
        console.log("--The two numbers to compute-- ");
        console.log("First number: ", num1);
        console.log("Second number: ", num2);
        console.log();
        console.log("--Results-- ");
        console.log("Sum: ", sum);
        console.log("Difference: ", difference);
        console.log("Product: ", product);
        console.log("Quotient: ", quotient);
    }

    else { // Exercse 3
        const list = document.getElementById("itemList");

        const li = document.createElement("li");

        li.textContent = "Item " + (list.children.length + 1);

        list.appendChild(li);
    }
}

// Activity 4
function runActivity4() {
    if (currentExercise == "exer2") {
        // Ask the user for their name
        let Name = prompt("Enter your Full Name: ")
        // Ask for their favorite number
        let fav_num = prompt("Enter your favorite number: ")
        // Display a greeting message
        alert("Hello " + Name + "! Your favorite number is " + fav_num + ".")
    }

    else { // Exercse 3
        const removeBtn = document.getElementById("removeBtn");
        const paragraph = document.getElementById("removeMe");

        removeBtn.addEventListener("click", function () {
            paragraph.remove();
        });
    }
}

// Activity 5
function runActivity5() {
    if (currentExercise == "exer2") {
        // Ask the user for their age.
        let age = prompt("Enter your age: ")

        // If age is 18 or above, display:
        if (age >= 18) {
            alert("You are eligible.")
        }
        // Otherwise, display:
        else {
            alert("Your are not eligible!")
        }
    }
    else { // Exercse 3
        const input = document.getElementById("textInput");
        const charCount = document.getElementById("charCount");

        input.addEventListener("input", function () {
            charCount.textContent = input.value.length;
        });
    }
}

// Activity 6
function runActivity6() {
    if (currentExercise == "exer2") {
        // Use a for loop to display numbers 1 to 10 in the console
        console.log("Numbers from 1 to 10:");
        for (let i = 0; i < 10; i++) {
            console.log(i + 1);
        }
        // Use a while loop to display numbers 10 to 1.
        console.log("Numbers from 10 to 1:");
        let i = 10;
        while (i > 0) {
            console.log(i);
            i--;
        }
    }

    else { // Exercse 3
        const calcBtn = document.getElementById("calcBtn");

        calcBtn.addEventListener("click", function () {
            const num1 = Number(document.getElementById("num1").value);
            const num2 = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent = num1 + num2;
        });
    }
}

// Activity 7
function runActivity7() {
    if (currentExercise == "exer2") {
        // function to display an alert when the button is clicked
        Click()
    }

    else { // Exercse 3
        const imgBtn = document.getElementById("imgBtn");
        const image = document.getElementById("myImage");

        let isFirstImage = true;

        imgBtn.addEventListener("click", function () {
            if (image.src.includes("200")) {
                image.src = "kuromi.jpg";
            } else {
                image.src = "anime.jpg";
            }
        });

    }
}

// Activity 8
function runActivity8() {
    if (currentExercise == "exer3") {
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");

        addTaskBtn.addEventListener("click", function () {
            if (taskInput.value.trim() !== "") {
                const li = document.createElement("li");
                li.textContent = taskInput.value;
                taskList.appendChild(li);
                taskInput.value = "";
            }
        });
    }
}
    // For exercise 2, activity 7
function Click() {
    alert("Button clicked!");
} 


// CALCULATOR
function openGradeCalculator() {

    const card = document.getElementById("card");

    card.innerHTML = `
        <h2>Student Grade Calculator</h2>

        <h3>Quiz Scores</h3>
        <div id="quizContainer">
            <div class="quizRow">
                <input type="number" class="quizScore" placeholder="Score">
                <input type="number" class="quizItems" placeholder="Items">
            </div>
        </div>
        <button class="run-btn" id="addQuiz">Add Quiz</button>

        <h3>Exam Scores</h3>
        <div id="examContainer">
            <div class="examRow">
                <input type="number" class="examScore" placeholder="Score">
                <input type="number" class="examItems" placeholder="Items">
            </div>
        </div>
        <button class="run-btn" id="addExam">Add Exam</button>

        <h3>MCO Scores</h3>
        <div id="mcoContainer">
            <input type="number" class="mco" placeholder="MCO Score (0-100)">
        </div>
        <button class="run-btn" id="addMCO">Add MCO</button>

        <br><br>

        <button class="run-btn" id="calculateGrade">Calculate Grade</button>
        <button class="run-btn" id="resetGrade">Reset</button>

        <h3>Final Grade: <span id="finalGrade">0</span></h3>
        <h3>Grade Equivalent: <span id="gradeEquivalent">-</span></h3>
    `;

    setupGradeCalculator();
}

function setupGradeCalculator() {

    const addQuiz = document.getElementById("addQuiz");
    const addExam = document.getElementById("addExam");
    const addMCO = document.getElementById("addMCO");

    const quizContainer = document.getElementById("quizContainer");
    const examContainer = document.getElementById("examContainer");
    const mcoContainer = document.getElementById("mcoContainer");

    const calculateBtn = document.getElementById("calculateGrade");
    const resetBtn = document.getElementById("resetGrade");

    const finalGrade = document.getElementById("finalGrade");
    const gradeEquivalent = document.getElementById("gradeEquivalent");


    /* ADD QUIZ */
    addQuiz.addEventListener("click", () => {
        const div = document.createElement("div");
        div.className = "quizRow";
        div.innerHTML = `
            <input type="number" class="quizScore" placeholder="Score">
            <input type="number" class="quizItems" placeholder="Items">
        `;
        quizContainer.appendChild(div);
    });


    /* ADD EXAM */
    addExam.addEventListener("click", () => {
        const div = document.createElement("div");
        div.className = "examRow";
        div.innerHTML = `
            <input type="number" class="examScore" placeholder="Score">
            <input type="number" class="examItems" placeholder="Items">
        `;
        examContainer.appendChild(div);
    });


    /* ADD MCO */
    addMCO.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "MCO Score (0-100)";
        input.className = "mco";
        mcoContainer.appendChild(input);
    });


    /* CALCULATE GRADE */
    calculateBtn.addEventListener("click", () => {

        /* QUIZ */
        const quizScores = document.querySelectorAll(".quizScore");
        const quizItems = document.querySelectorAll(".quizItems");

        let quizPercentTotal = 0;

        quizScores.forEach((q, index) => {
            const score = Number(q.value);
            const items = Number(quizItems[index].value);

            if (items > 0) {
                quizPercentTotal += (score / items) * 100;
            }
        });

        const quizAverage = quizPercentTotal / quizScores.length;


        /* EXAM */
        const examScores = document.querySelectorAll(".examScore");
        const examItems = document.querySelectorAll(".examItems");

        let examPercentTotal = 0;

        examScores.forEach((e, index) => {
            const score = Number(e.value);
            const items = Number(examItems[index].value);

            if (items > 0) {
                examPercentTotal += (score / items) * 100;
            }
        });

        const examAverage = examPercentTotal / examScores.length;


        /* MCO */
        const mcoInputs = document.querySelectorAll(".mco");
        let mcoTotal = 0;

        mcoInputs.forEach(m => {
            mcoTotal += Number(m.value);
        });

        const mcoAverage = mcoTotal / mcoInputs.length;


        /* FINAL GRADE */
        const grade =
            (quizAverage * 0.20) +
            (examAverage * 0.30) +
            (mcoAverage * 0.50);

        finalGrade.textContent = grade.toFixed(2);


        /* GRADE EQUIVALENT */
        let equivalent = "F";

        if (grade >= 90) equivalent = "A";
        else if (grade >= 80) equivalent = "B";
        else if (grade >= 70) equivalent = "C";
        else if (grade >= 60) equivalent = "D";

        gradeEquivalent.textContent = equivalent;

    });


    /* RESET */
    resetBtn.addEventListener("click", () => {
        document.querySelectorAll("input").forEach(i => i.value = "");
        finalGrade.textContent = "0";
        gradeEquivalent.textContent = "-";
    });
}
