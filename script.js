// Fetch pinned repos from GitHub API proxy
async function loadProjects() {
  const username = "Tushar2153";
  const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`);
  const data = await res.json();

  const container = document.getElementById("project-list");
  data.forEach(repo => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${repo.repo}</h3>
      <p>${repo.description || "No description provided."}</p>
      <p><b>Language:</b> ${repo.language || "N/A"} | ⭐ ${repo.stars}</p>
      <a href="https://github.com/${username}/${repo.repo}" target="_blank">View Code</a>
    `;
    container.appendChild(card);
  });
}
loadProjects();
