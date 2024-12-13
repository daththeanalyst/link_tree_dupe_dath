import links from "./data.js";

const linksContainer = document.getElementById("links");

// Generate links dynamically
links.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.target = "_blank"; // Open links in a new tab

  // Add icon
  const icon = document.createElement("i");
  icon.className = link.icon; // Use the icon class from data.js

  // Add title
  const text = document.createElement("span");
  text.textContent = link.title;

  // Append icon and text to the link
  linkElement.appendChild(icon);
  linkElement.appendChild(text);

  linksContainer.appendChild(linkElement);
});
