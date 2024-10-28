// Handle button click to toggle collapse and change button text
document.getElementById("toggleButton").addEventListener("click", function () {
  const button = document.getElementById("toggleButton");
  const newsButton = document.getElementById("newsButton");
  const isCollapsed = button.textContent === "View More";

  if (isCollapsed) {
    button.textContent = "View Less";
  } else {
    button.textContent = "NEWS";
    button.style.display = "none";
    newsButton.style.display = "block";
  }
});
document.getElementById("newsButton").addEventListener("click", function () {
  window.open("news.html", "_blank"); // Redirect to news.html
});

document.querySelectorAll(".open-link-ios").forEach((button) => {
  button.addEventListener("click", () => {
    window.open("https://apps.apple.com/app/id1526436837?mt=8", "_blank");
  });
}); // redirect to app store
document.querySelectorAll(".open-link-aos").forEach((button) => {
  button.addEventListener("click", () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.pubg.imobile",
      "_blank"
    );
  });
}); // redirect to android store
document.querySelectorAll(".open-link-ucpin").forEach((link) => {
  link.addEventListener("click", () => {
    window.open(
      "https://www.unipin.com/in/bgmi?utm_source=Referral&utm_medium=Website&utm_campaign=BGMI-Website",
      "_blank"
    ); // redirect to ucpin
  });
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This creates the smooth scroll effect
  });
});
