let form = document.getElementById("gradeForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let maths = Number(document.getElementById("maths").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
if (maths > 100 || english > 100 || science > 100) {
    document.getElementById("result").textContent =
        "Marks must be between 0 and 100.";
    return;
}
    let average = (maths + english + science) / 3;
let grade;

if (average >= 80) {
    grade = "A";
}   else if (average >= 60) {
    grade = "B";
}          
else if (average >= 40) {
    grade = "C";
}
else {
    grade = "Fail";
}           
    document.getElementById("result").textContent =
        name + "'s average marks: " + average.toFixed(2) + " | Grade: " + grade;
});

