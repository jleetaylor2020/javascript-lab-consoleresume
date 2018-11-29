
// STUCK ON CAPATILIZING 'JESSICA' & STUCK ON BOOLEAN VALUE TO LIST BAM: IN SKILLS AREA
function toUpper(jessica) {
    return jessica.toUpperCase();
}

console.log("Name:", "Jessica");
console.log("Career: Technology");
console.log("Description: I am motivated and passionate to do more with my life. I seek opportunities for career growth, and pursuing a passion in technology.");
console.log("My Interests:");
console.log("Smart Home Technology");
console.log("Traveling Abroad");
console.log("My Previous Experience:");

function displayPosition (company, title, description) {
    var myExperience = title + 'at ' + company + 'where I' + description;
    console.log(myExperience);

}

displayPosition ('Community Food Bank of Central AL ', ' Nonprofit Manager ', ' am responsible for coordinating donations from corporate grocery stores.'),
displayPosition ('AT&T ', ' Sales Rep ', ' learned new technology and exceeded sales quotas. ');

console.log("My Skills:");

function displaySkill (skills) {
    var workskills = skills;
    console.log(workskills);  
    
}

displaySkill ('Spanish');
displaySkill ('Microsoft Office');
displaySkill ('Ninja');



