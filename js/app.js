const systems = [
  { name: "Sistema Carmo Energy", url: "https://sce.carmoenergy.com/", category: "Operação", description: "Sistema corporativo operacional Carmo Energy.", icon: "⚙️", favorite: true, tags: "sce pt gm pronto operar" },
  { name: "PI Vision", url: "https://pi.carmoenergy.com/PIVision/#/Displays/15749/Monitoramento-Geral---TEND%C3%8ANCIA", category: "Supervisório", description: "Monitoramento geral e tendências operacionais.", icon: "📈", favorite: true, tags: "pi vision tendencia supervisório" },
  { name: "MAP", url: "https://carmoenergy.map.rntecnologia.com.br/map/dashboard/operacao", category: "Supervisório", description: "Monitoramento de ativos de petróleo, poços, SATs e tanques de campo.", icon: "🛢️", favorite: true, tags: "map poços sats tanques campo" },
  { name: "MedLogix", url: "http://10.254.200.80/login", category: "Medição Fiscal", description: "Acompanhamento de dados e medições fiscais.", icon: "📊", favorite: true, tags: "medlogix medição fiscal" },
  { name: "8.07 - Centro Integrado de Controle", url: "https://carmoenergy.sharepoint.com/:f:/s/dados/IgD_aXyDXtxCSbYEvHcaKgkZAZtoHSuDC_79k66S5iqn6ao", category: "Documentos", description: "Pasta de documentos do Centro Integrado de Controle.", icon: "🏭", favorite: true, tags: "cic centro integrado controle documentos" },
  { name: "GLPI - Chamados HelpDesk", url: "https://servicedesk.carmoenergy.com/Helpdesk", category: "TI", description: "Abertura e acompanhamento de chamados de TI.", icon: "🧰", favorite: false, tags: "glpi chamado helpdesk ti" },
  { name: "Inspeciones - SafeIS - COBRA", url: "https://safetycobrais.com/login", category: "Grupo Cobra", description: "Sistema de inspeções e segurança do Grupo Cobra.", icon: "🦺", favorite: false, tags: "safeis cobra inspeções segurança" },
  { name: "My Ahgora - TOTVS", url: "https://app.ahgora.com.br/externo/", category: "Corporativo", description: "Registro de ponto e controle de jornada.", icon: "🕒", favorite: false, tags: "ahgora ponto totvs" },
  { name: "Meu RH - TOTVS", url: "https://meurh.carmoenergy.com/web/app/RH/PortalMeuRH/#/login", category: "Corporativo", description: "FOPAG, férias e dados de RH.", icon: "👤", favorite: false, tags: "rh totvs fopag férias" },
  { name: "Carmópolis Dados", url: "https://carmoenergy.sharepoint.com/sites/dados/default.aspx", category: "Documentos", description: "SharePoint de dados e documentos Carmópolis.", icon: "📁", favorite: false, tags: "sharepoint dados documentos" },
  { name: "Resultado de Amostras", url: "https://labsoft-identitycenter-sts-prd.azurewebsites.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DmyLIMSweb_JQuery%26redirect_uri%3Dhttps%253A%252F%252Fcarmoenergy.mylimsweb.cloud%252Fcallback%252Findex%26response_type%3Dcode%26scope%3Dopenid%2520myLIMSweb_API_Create%2520myLIMSweb_API_Read%2520myLIMSweb_API_Update%2520myLIMSweb_API_Delete%2520DataViewer_API_Create%2520DataViewer_API_Read%2520DataViewer_API_Update%2520DataViewer_API_Delete%2520DataFactory_API_Create%2520DataFactory_API_Read%2520DataFactory_API_Update%2520DataFactory_API_Delete%26state%3D4941dd480c3d4f5bb2d4aa874beca18f%26code_challenge%3DZ38NlAo30qKmtF8r_--L2H07VKiWxRMJV79WQFxKA4c%26code_challenge_method%3DS256%26response_mode%3Dquery%26requesterClient%3Dcarmoenergy", category: "Laboratório", description: "Consulta de resultados de amostras laboratoriais.", icon: "🧪", favorite: false, tags: "amostras laboratório mylims bsw salinidade" },
  { name: "Engenharia Elétrica", url: "https://fs-educ.sempreser.com.br/adfs/ls/", category: "Engenharia", description: "Portal acadêmico da faculdade.", icon: "🎓", favorite: false, tags: "faculdade engenharia elétrica" },
  { name: "8Quali", url: "https://carmoenergy.8quali.com.br/home", category: "Documentos", description: "Sistema de gestão documental e qualidade.", icon: "✅", favorite: false, tags: "8quali qualidade documentos" },
  { name: "Portal Qualidade Assegurada", url: "https://carmoenergy.sharepoint.com/sites/QualidadeAssegurada", category: "Documentos", description: "Portal SharePoint de Qualidade Assegurada.", icon: "🗂️", favorite: false, tags: "qualidade assegurada sharepoint documentos" },
  { name: "Gestão de Frotas", url: "https://carmoenergy.innovareti.com.br/login", category: "Corporativo", description: "Sistema de gestão de frotas.", icon: "🚗", favorite: false, tags: "frotas veículos innovare" }
];

const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const tabButtons = document.querySelectorAll(".tab-button");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");
let activeFilter = "all";

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderCards() {
  const query = normalize(searchInput.value.trim());
  const filtered = systems.filter(item => {
    const matchesFilter = activeFilter === "all" ||
      (activeFilter === "Favoritos" && item.favorite) ||
      item.category === activeFilter;
    const searchable = normalize(`${item.name} ${item.category} ${item.description} ${item.tags}`);
    return matchesFilter && searchable.includes(query);
  });

  cardsGrid.innerHTML = filtered.map(item => `
    <a class="card" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${item.name}">
      <div>
        <div class="card-head">
          <div class="icon">${item.icon}</div>
          <span class="badge">${item.category}</span>
        </div>
        <h3>${item.favorite ? '<span class="favorite">★</span> ' : ''}${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="card-footer">
        <span>Abrir sistema</span>
        <span>↗</span>
      </div>
    </a>
  `).join("");

  resultCount.textContent = `${filtered.length} de ${systems.length}`;
  emptyState.classList.toggle("hidden", filtered.length > 0);
}

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const hour = now.getHours();
  greeting.textContent = hour < 12 ? "Bom dia, Max" : hour < 18 ? "Boa tarde, Max" : "Boa noite, Max";
}

searchInput.addEventListener("input", renderCards);
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderCards();
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

updateClock();
setInterval(updateClock, 30000);
renderCards();
