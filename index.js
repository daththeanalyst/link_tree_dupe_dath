import links from "./data.js";

const linksContainer = document.getElementById("links");

// Generate links dynamically
links.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.target = "_blank"; // Open links in a new tab

  // Add logo
  const logo = document.createElement("img");
  logo.src = link.logo;
  logo.alt = `${link.title} logo`;

  // Add title
  const text = document.createElement("span");
  text.textContent = link.title;

  // Append logo and text to the link
  linkElement.appendChild(logo);
  linkElement.appendChild(text);

  linksContainer.appendChild(linkElement);
});
