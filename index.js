import "./styles.css";

const INDEX_SLOTS = {
  html: `
  <div>
    <h1>Slots Game</h1>
    <div>...</div>
  </div>
  <script src="/slots.js"></script>
  `,
  scripts: ["/common.js", "/slots.js"]
};

const INDEX_LIVE_CASINO = {
  html: `
  <div>
    <h1>Live Casino Game</h1>
    <div>[ le game ]</div>
  </div>
  <script src=></script>
  `,
  scripts: ["/common.js", "/live-casino.js"]
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameCategory = urlParams.get("cat");

const index_contents =
  gameCategory === `live-casino` ? INDEX_LIVE_CASINO : INDEX_SLOTS;

document.body.innerHTML = index_contents.html;
for (let src of index_contents.scripts) {
  let el = document.createElement("script");
  el.src = `src` + src;
  document.body.appendChild(el);
}
