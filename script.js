// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Fetch pinned repos from GitHub
async function loadProjects() {
  const username = "Tushar2153";
  try {
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
  } catch (err) {
    console.error("Error fetching repos:", err);
  }
}
loadProjects();

// Blog posts (sample)
const blogPosts = [
  {
    title: "Building a Sign Language Recognition System",
    date: "Sept 2025",
    summary: "How I used OpenCV and ML to translate gestures into text.",
    link: "#"

