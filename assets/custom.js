// Function to move the button
function moveButton() {
  const mButton = document.querySelector(".movetosmallscreen");
  const mobileContainer = document.querySelector(".mob-buttonpos");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

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
  console.log(scrollTop);
}

topScrollPos();
window.addEventListener("scroll", topScrollPos);

// Run the function when the page loads
window.addEventListener("load", moveButton);

// Run the function whenever the window is resized
window.addEventListener("resize", moveButton);
