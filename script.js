document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if (name == "" || email == "" || message == "") {
        error.innerText = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        error.innerText = "Enter valid email!";
        return;
    }

    error.style.color = "green";
    error.innerText = "Form Submitted Successfully!";
});

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task == "") {
        alert("Enter task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='removeTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}
