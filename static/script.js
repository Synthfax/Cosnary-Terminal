async function loadLanguages() {
  const select = document.getElementById("langSelect");
  try {
    const res = await fetch("/languages");
    const langs = await res.json();
    langs.forEach(l => {
      const opt = document.createElement("option");
      opt.value = l.value;
      opt.textContent = l.label;
      select.appendChild(opt);
    });
    // Default to English if exists
    select.value = langs.find(l => l.value.toLowerCase() === "english")?.value || "all galaxies";
  } catch (err) {
    console.error("Failed to load languages", err);
    setOutput("🌌 Unable to load language options. Please try again later.");
  }
}

async function doSearch() {
  const word = document.getElementById("wordInput").value.trim();
  const lang = document.getElementById("langSelect").value;

  if (!word) {
    setOutput("🌌 Please enter a word to search the cosmos...");
    return;
  }

  try {
    const res = await fetch("/search", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ word, lang })
    });

    if (!res.ok) {
      const err = await res.json();
      setOutput(`🚀 ${err.error || "Unknown error"}`);
      return;
    }

    const data = await res.json();
    if (data.results.length === 0) {
      setOutput(`🚀 No celestial definitions found for '${word}'`);
      return;
    }

    renderResults(word, data.results);
  } catch (err) {
    setOutput("🌠 Connection to the cosmic database failed. Please try again.");
    console.error("Search error:", err);
  }
}

function setOutput(msg) {
  const out = document.getElementById("outputArea");
  out.textContent = msg;
  out.classList.add("message");
}

function renderResults(word, results) {
  const out = document.getElementById("outputArea");
  out.classList.remove("message");
  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  let html = `✨ ${capitalizedWord} ✨\n\n`;

  results.forEach((r, i) => {
    const stars = "⭐".repeat(Math.min(3, i+1));
    html += `${stars} Definition #${i+1}\n`;
    html += `Language: <span class="language">${r.lang}</span>\n`;
    html += `<span class="pos">${r.pos}</span>\n`;
    if (r.ipa) html += `Pronunciation: <span class="ipa">/${r.ipa}/</span>\n`;
    html += `\n${r.definition}\n\n`;
    if (i < results.length - 1) html += "―".repeat(30) + "\n\n";
  });

  out.innerHTML = html;
}

// Event listeners
document.getElementById("searchBtn").addEventListener("click", doSearch);
document.getElementById("wordInput").addEventListener("keypress", (e) => {
  if(e.key === "Enter") doSearch();
});

// Load languages on page load
loadLanguages();
