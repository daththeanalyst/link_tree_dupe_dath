import links from "./data.js";

const linksContainer = document.getElementById("links");

// Generate links dynamically
links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.textContent = link.title;
  anchor.target = "_blank"; // Open links in a new tab
  linksContainer.appendChild(anchor);
});
