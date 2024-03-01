const modal = document.querySelector("#modal");
const taskForm = document.querySelector("#taskForm");
const addButton = document.querySelector("#addButton");
const closeButton = document.querySelector("#closeButton");
const hero = document.querySelector("#hero");

addButton.addEventListener("click", () => {
	modal.show();
});

closeButton.addEventListener("click", () => {
	modal.close();
});

taskForm.addEventListener("submit", (event) => {
	event.preventDefault();
	modal.close();

	localStorage.setItem("title", `${document.querySelector("#title").value}`);
	localStorage.setItem(
		"description",
		`${document.querySelector("#description").value}`
	);
	localStorage.setItem(
		"dueDate",
		`${document.querySelector("#dueDate").value}`
	);

	const formData = {
		title: localStorage.getItem("title"),
		description: localStorage.getItem("description"),
		dueDate: localStorage.getItem("dueDate"),
	};

	const card = document.createElement("div");
	const taskContainer = document.createElement("ul");
	const taskItemOne = document.createElement("li");
	const taskItemTwo = document.createElement("li");
	const taskItemThree = document.createElement("li");
	const removeButton = document.createElement("button");

	card.classList.add("card");

	taskItemOne.textContent = `Task: ${formData.title}`;
	taskItemTwo.textContent = `Description: ${formData.description}`;
	taskItemThree.textContent = `Due Date: ${formData.dueDate}`;
	removeButton.textContent = "Done!";
	removeButton.style.cssText =
		"background-color: #eeeeee; border: none; border-radius: 15px; padding: 3px 5px 3px 5px; width: 50%";

	removeButton.addEventListener("click", () => {
		card.remove();
	});

	taskContainer.appendChild(taskItemOne);
	taskContainer.appendChild(taskItemTwo);
	taskContainer.appendChild(taskItemThree);
	card.appendChild(taskContainer);
	card.appendChild(removeButton);
	hero.appendChild(card);
});
