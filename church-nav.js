// ordem oficial das igrejas
const churches = [
  "sao-pedro",
  "sao-joao-latrao",
  "santa-maria-maggiore",
  "sao-paulo-fora-dos-muros",
  "san-clemente",
  "santa-prassede",
  "mosteiro-santa-escolastica",
  "catedral-san-lorenzo-tivoli",
  "catedral-anagni",
  "montecassino"
];

// identifica a igreja atual pela URL
const path = window.location.pathname;
const currentChurch = churches.find(c => path.includes("/" + c + "/"));

if (currentChurch) {
  const index = churches.indexOf(currentChurch);

  const prev = churches[index - 1];
  const next = churches[index + 1];

  const nav = document.createElement("nav");
  nav.className = "nav-igrejas";

  nav.innerHTML = `
    ${prev ? `<a class="nav-prev" href="../${prev}/index.html">← anterior</a>` : `<span></span>`}
    <a class="nav-mapa" href="../lazio/index.html">mapa</a>
    ${next ? `<a class="nav-next" href="../${next}/index.html">próxima →</a>` : `<span></span>`}
  `;

  document.body.appendChild(nav);
}

// preload das páginas vizinhas
if(prev){
  const linkPrev=document.createElement("link");
  linkPrev.rel="prefetch";
  linkPrev.href=`../${prev}/index.html`;
  document.head.appendChild(linkPrev);
}

if(next){
  const linkNext=document.createElement("link");
  linkNext.rel="prefetch";
  linkNext.href=`../${next}/index.html`;
  document.head.appendChild(linkNext);

}