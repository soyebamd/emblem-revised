// Function to move the button
function moveButton() {
  const mButton = document.querySelector(".movetosmallscreen");
  const mobileContainer = document.querySelector(".mob-buttonpos");
  const tag = document.querySelector(".tag-cover");

  // Check the screen width
  if (window.innerWidth < 750) {
    if (mButton && mobileContainer && !mobileContainer.contains(mButton)) {
      mobileContainer.appendChild(mButton); // Move the button to .mob-buttonpos
    }
  } else {
    if (
      mButton &&
      document.body.contains(mButton) &&
      !document.body.contains(mobileContainer)
    ) {
      document.body.appendChild(mButton); // Move the button back to its original location
    }
  }
}

// detect top scroll position

function topScrollPos() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 8) {
    tag.style.top = "82px";
  }

  console.log("Scroll Position:", scrollTop);
}

topScrollPos();
window.addEventListener("scroll", topScrollPos);

// Run the function when the page loads
window.addEventListener("load", moveButton);

// Run the function whenever the window is resized
window.addEventListener("resize", moveButton);
