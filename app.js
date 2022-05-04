let count = 0;

// Select value and buttons
const value = document.querySelector("#value"); // Get id value
const btns = document.querySelectorAll(".btn");

// Node list is array like, so we can iterate foreach
// We can not run all array methods
btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease") && count > 0) count--;
    else if (styles.contains("reset")) count = 0;
    else if (styles.contains("increase")) count++;
    value.textContent = count;
  });
});
