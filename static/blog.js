// Function to validate the form before submission
function validateForm() {
  var title = document.forms["newPostForm"]["title"].value;
  var content = document.forms["newPostForm"]["content"].value;
  if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both the title and content.");
      return false;
  }
  return true;
}

// Function to display the newly created post on the page
function displayNewPost(title, content) {
  var postsList = document.getElementById("postsList");
  var newPostItem = document.createElement("li");
  var newPostTitle = document.createElement("h3");
  var newPostContent = document.createElement("p");

  newPostTitle.textContent = title;
  newPostContent.textContent = content;

  newPostItem.appendChild(newPostTitle);
  newPostItem.appendChild(newPostContent);

  postsList.appendChild(newPostItem);
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
  var newPostForm = document.forms["newPostForm"];
  newPostForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var titleInput = newPostForm.elements["title"];
      var contentInput = newPostForm.elements["content"];

      var title = titleInput.value;
      var content = contentInput.value;

      if (title.trim() === "" || content.trim() === "") {
          alert("Please fill in both the title and content.");
          return;
      }

      // Send an AJAX request to the server to save the post (optional).
      // In this example, we are just displaying the post on the page.
      displayNewPost(title, content);

      // Reset the form after submission
      newPostForm.reset();
  });
});
