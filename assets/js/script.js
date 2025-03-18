// Adicionar novo evento no botao criar evento
document.getElementById("formEvento").addEventListener("submit", (e) => {
  e.preventDefault();
  const novoEvento = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,
    data: document.getElementById("data").value,
    local: document.getElementById("local").value,
    organizador: document.getElementById("organizador").value || "Anônimo",
    contato: document.getElementById("contato").value || "Não informado",
    imagem: document.getElementById("imagem").files[0]
      ? URL.createObjectURL(document.getElementById("imagem").files[0])
      : "assets/img/default-event.jpg",
    curso: document.getElementById("curso").value,
  };
  eventos.unshift(novoEvento); // Adiciona o novo evento no início do array
  eventosOriginais = [...eventos]; // Atualiza a cópia do array original
  renderizarEventos();
  bootstrap.Modal.getInstance(document.getElementById("modalEvento")).hide();
  e.target.reset();
});

// Função para abrir o modal com detalhes completos do evento
function abrirEventoCompleto(index) {
  const evento = eventos[index];
  document.getElementById("eventoImagem").src = evento.imagem;
  document.getElementById("eventoImagem").style.objectFit = "contain"; // Ajuste para exibir a imagem por completo
  document.getElementById("eventoNome").textContent = evento.nome;
  document.getElementById("eventoCurso").textContent = evento.curso;
  document.getElementById("eventoDescricao").textContent = evento.descricao;
  document.getElementById("eventoLocal").textContent = evento.local;
  document.getElementById("eventoData").textContent = new Date(
    evento.data
  ).toLocaleDateString("pt-BR");
  document.getElementById("eventoOrganizador").textContent = evento.organizador;
  document.getElementById("eventoContato").textContent = evento.contato;

  const modal = new bootstrap.Modal(
    document.getElementById("modalEventoCompleto")
  );
  modal.show();
}

// Ação do botão Inscrever-se no modal de evento completo
document.getElementById("inscreverBtn").addEventListener("click", () => {
  alert("Inscrição realizada com sucesso! (Funcionalidade em desenvolvimento)");
  bootstrap.Modal.getInstance(
    document.getElementById("modalEventoCompleto")
  ).hide();
});

// Configuração do plugin Particles.js para HeroSection
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 6 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
  }
});

// Dados de exemplos de eventos
let eventos = [
  {
    nome: "Meu pet bem cuidado",
    data: "2025-03-05",
    local: "ESBAM",
    organizador: "Thiago Almeida",
    contato: "thiago.almeida@example.com",
    descricao: "Um evento dedicado ao bem-estar dos pets.",
    imagem: "assets/img/med-veterinaria.jpg",
    curso: "Medicina Veterinária",
  },
  {
    nome: "Saúde Mental",
    data: "2025-03-06",
    local: "ESBAM",
    organizador: "Maria Silva",
    contato: "maria.silva@example.com",
    descricao: "Discussões sobre saúde mental.",
    imagem: "assets/img/psicologia.jpg",
    curso: "Psicologia",
  },
  {
    nome: "Inovações Tecnológicas",
    data: "2025-03-07",
    local: "ESBAM",
    organizador: "João Pereira",
    contato: "joao.pereira@example.com",
    descricao: "Inovações tecnológicas.",
    imagem: "assets/img/tecnologia.jpg",
    curso: "Tecnologia",
  },
  {
    nome: "Direito e Sociedade",
    data: "2025-03-08",
    local: "ESBAM",
    organizador: "Ana Costa",
    contato: "ana.costa@example.com",
    descricao: "Debates sobre leis.",
    imagem: "assets/img/direito.jpg",
    curso: "Direito",
  },
  {
    nome: "Construindo o Futuro",
    data: "2025-03-09",
    local: "ESBAM",
    organizador: "Carlos Souza",
    contato: "carlos.souza@example.com",
    descricao: "Inovações na engenharia civil.",
    imagem: "assets/img/engenharia.jpg",
    curso: "Engenharia",
  },
  {
    nome: "Gestão de Negócios",
    data: "2025-03-10",
    local: "ESBAM",
    organizador: "Fernanda Lima",
    contato: "fernanda.lima@example.com",
    descricao: "Estratégias de administração moderna.",
    imagem: "assets/img/administracao.jpg",
    curso: "Administração",
  },
  {
    nome: "Design de Interiores",
    data: "2025-03-11",
    local: "ESBAM",
    organizador: "Paula Ribeiro",
    contato: "paula.ribeiro@example.com",
    descricao: "Tendências em design de interiores.",
    imagem: "assets/img/design.jpg",
    curso: "Design",
  },
  {
    nome: "Arquitetura Sustentável",
    data: "2025-03-12",
    local: "ESBAM",
    organizador: "Ricardo Martins",
    contato: "ricardo.martins@example.com",
    descricao: "Práticas de arquitetura sustentável.",
    imagem: "assets/img/arquitetura.jpg",
    curso: "Arquitetura",
  },
  {
    nome: "Saúde e Bem-Estar",
    data: "2025-03-13",
    local: "ESBAM",
    organizador: "Juliana Alves",
    contato: "juliana.alves@example.com",
    descricao: "Importância da educação física.",
    imagem: "assets/img/educacao-fisica.jpg",
    curso: "Educação Física",
  },
  {
    nome: "Cuidados de Enfermagem",
    data: "2025-03-14",
    local: "ESBAM",
    organizador: "Mariana Santos",
    contato: "mariana.santos@example.com",
    descricao: "Práticas avançadas em enfermagem.",
    imagem: "assets/img/enfermagem.jpg",
    curso: "Enfermagem",
  },
];

// Manter uma cópia do array original dos eventos
let eventosOriginais = [...eventos];

// Renderizar eventos
function renderizarEventos(eventosFiltrados = eventos) {
  const container = document.getElementById("eventosContainer");
  container.innerHTML = "";
  eventosFiltrados.forEach((evento, index) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${evento.imagem}" class="card-img-top" alt="${evento.nome}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${evento.nome}</h5>
            <p class="text-muted"><strong>Curso:</strong> ${evento.curso}</p>
            <p class="text-muted"><strong>Local:</strong> ${evento.local}</p>
            <p class="text-muted"><strong>Data:</strong> ${new Date(evento.data).toLocaleDateString("pt-BR")}</p>
            <button class="btn btn-ver-evento btn-sm mt-auto" type="button" data-index="${index}" onclick="abrirEventoCompleto(${index})">Detalhes do Evento</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Inicializar eventos e configurar menu responsivo
document.addEventListener("DOMContentLoaded", () => {
  renderizarEventos();
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// Função para remover acentos de uma string
function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Filtro automático
document.getElementById("searchInput").addEventListener("input", () => {
  filtrarEventos();
});

// Ordenação automática
document.getElementById("sortSelect").addEventListener("change", () => {
  filtrarEventos();
});

// Adicione um evento de mudança ao seletor de curso
document.getElementById("cursoSelect").addEventListener("change", () => {
  filtrarEventos();
});

// Função para filtrar e ordenar eventos
function filtrarEventos() {
  const searchTerm = removerAcentos(
    document.getElementById("searchInput").value.toLowerCase()
  );
  const sortOption = document.getElementById("sortSelect").value;
  const cursoOption = document.getElementById("cursoSelect").value;

  // Restaurar o array original antes de aplicar filtros e ordenação
  eventos = [...eventosOriginais];

  let eventosFiltrados = eventos.filter(
    (e) =>
      (removerAcentos(e.nome.toLowerCase()).includes(searchTerm) ||
        removerAcentos(e.local.toLowerCase()).includes(searchTerm) ||
        removerAcentos(e.descricao.toLowerCase()).includes(searchTerm)) &&
      (cursoOption === "default" || e.curso === cursoOption)
  );

  if (sortOption === "name-asc")
    eventosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  else if (sortOption === "name-desc")
    eventosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
  else if (sortOption === "date-asc")
    eventosFiltrados.sort((a, b) => new Date(a.data) - new Date(b.data));
  else if (sortOption === "date-desc")
    eventosFiltrados.sort((a, b) => new Date(b.data) - new Date(a.data));

  // Atualizar o array de eventos com a nova ordem
  eventos = eventosFiltrados;

  renderizarEventos(eventosFiltrados);
}

// Função para limpar filtros
document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("sortSelect").value = "default";
  document.getElementById("cursoSelect").value = "default";
  eventos = [...eventosOriginais]; // Restaurar o array original
  renderizarEventos();
});

// Adicionar evento de clique ao botão Buscar
document.getElementById("searchButton").addEventListener("click", () => {
  filtrarEventos();
});
