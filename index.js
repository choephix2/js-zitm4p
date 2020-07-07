// Import stylesheets
import './style.css';

const HTML_Slots = `
<h1>Slots Game</h1>
<div>...</div>
<script src="/slots.js"></script>
`

const HTML_LiveCasino = `
<h1>Live Casino Game</h1>
<div>[ le game ]</div>
<script src="/live-casino.js"></script>
`

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameCategory = urlParams.get('cat')

document.body.innerHTML = 
  gameCategory === `live-casino`
  ? HTML_LiveCasino
  : HTML_Slots;