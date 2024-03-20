const checkDOB = (dob) => {
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear(); // Use 'let' for 'age' since its value might change
    let m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--; // This is now valid because 'age' is declared with 'let'
    }
    return age >= 5 && age <= 100; // Return true if age is within the range
};

const submitRegister = (e) => {
    e.preventDefault(); 

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    const form = document.getElementById("form-register");
    const firstName = capitalizeFirstLetter(form.elements["first_name"].value);
    const lastName = capitalizeFirstLetter(form.elements["last_name"].value);
    const dob = form.elements["dob"].value;
    const battingStyle = form.elements["batting_style"].value;
    const bowlingStyle = form.elements["bowling_style"].value;
    const primaryRole = form.elements["primary_role"].value;
    const email = form.elements["email"].value;
    const pass = form.elements["password"].value;

    const errorDiv = document.getElementById("error");
    errorDiv.innerHTML = ""; 

    /* //Email duplicate check (Future Reference)
    if (existingEmails.includes(email)) {
        errorDiv.innerHTML = "Error: Email already exists.";
        return; 
    } */

    if (!checkDOB(dob)) {
        const errorP = document.createElement("p");
        errorP.innerHTML = "Error: Age must be between 5 to 100 years.";
        errorDiv.appendChild(errorP);
        return; 
    }

    errorDiv.innerHTML = "";     
    const profileList = document.getElementById("profileList");
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.innerHTML = `<strong>Name:</strong> ${firstName} ${lastName}`;
    li.appendChild(name);
    li.appendChild(document.createElement("br"));

    const dobElement = document.createElement("span");
    dobElement.innerHTML = `<strong>DOB:</strong> ${dob}`;
    li.appendChild(dobElement);
    li.appendChild(document.createElement("br"));

    const battingStyleElement = document.createElement("span");
    battingStyleElement.innerHTML = `<strong>Batting Style:</strong> ${battingStyle}`;
    li.appendChild(battingStyleElement);
    li.appendChild(document.createElement("br"));

    const bowlingStyleElement = document.createElement("span");
    bowlingStyleElement.innerHTML = `<strong>Bowling Style:</strong> ${bowlingStyle}`;
    li.appendChild(bowlingStyleElement);
    li.appendChild(document.createElement("br"));

    const primaryRoleElement = document.createElement("span");
    primaryRoleElement.innerHTML = `<strong>Primary Role:</strong> ${primaryRole}`;
    li.appendChild(primaryRoleElement);
    li.appendChild(document.createElement("br"));

    const emailElement = document.createElement("span");
    emailElement.innerHTML = `<strong>Email:</strong> ${email}`;
    li.appendChild(emailElement);
    li.appendChild(document.createElement("br"));

    const password = document.createElement("span");
    password.innerHTML = `<strong>Password:</strong> ${pass}`;
    li.appendChild(password);

    profileList.appendChild(li);

    const successMessage = document.createElement("p");
    successMessage.innerHTML = "Profile submitted successfully!";
    document.getElementById("result").appendChild(successMessage); // Assuming "result" is the ID where you want to append the message
    
    setTimeout(() => {
        successMessage.remove();
    }, 2000);
    
    form.reset();
};

document.getElementById("form-register").onsubmit = submitRegister;
