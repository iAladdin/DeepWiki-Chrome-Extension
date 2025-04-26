// Add DeepWiki button to GitHub repository page
function addDeepWikiButton() {
  // Check if current page is a GitHub repository
  const repoPattern =
    /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)(?:\/(?:tree|blob)\/[^\/]+)?/;
  const match = window.location.href.match(repoPattern);

  if (!match) {
    return; // Not a repository page, don't add button
  }

  const org = match[1];
  const repo = match[2];

  // Create button
  const button = document.createElement("a");
  button.className = "deepwiki-button";
  button.textContent = "View on DeepWiki";
  button.href = `https://deepwiki.com/${org}/${repo}`;
  button.target = "_blank"; // Open in new tab
  button.title = "View this repository on DeepWiki";

  // Find appropriate location to insert the button
  const navItems = document.querySelector("ul.pagehead-actions");

  if (navItems) {
    const listItem = document.createElement("li");
    listItem.appendChild(button);
    navItems.prepend(listItem);
  } else {
    // Fallback location: repository navigation bar
    const repoNav = document.querySelector("nav.js-repo-nav");
    if (repoNav) {
      repoNav.appendChild(button);
    }
  }
}

// Add button when page is loaded
window.addEventListener("load", addDeepWikiButton);

// Since GitHub is a SPA, monitor URL changes
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // Small delay to ensure DOM has updated
    setTimeout(addDeepWikiButton, 300);
  }
}).observe(document, { subtree: true, childList: true });
