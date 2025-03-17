// Função para abrir o modal com detalhes completos do evento
function abrirEventoCompleto(evento) {
  document.getElementById("eventoImagem").src = evento.imagem;
  document.getElementById("eventoNome").textContent = evento.nome;
  document.getElementById("eventoData").textContent = new Date(
    evento.data
  ).toLocaleDateString("pt-BR");
  document.getElementById("eventoLocal").textContent = evento.local;
  document.getElementById("eventoCurso").textContent = evento.curso; // Adicione esta linha
  document.getElementById("eventoOrganizador").textContent = evento.organizador;
  document.getElementById("eventoContato").textContent = evento.contato;
  document.getElementById("eventoDescricao").textContent = evento.descricao;

  const modal = new bootstrap.Modal(
    document.getElementById("modalEventoCompleto")
  );
  modal.show();
}

// Dados iniciais dos eventos
const eventos = [
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
];

// Renderizar eventos
function renderizarEventos(eventosFiltrados = eventos) {
  const container = document.getElementById("eventosContainer");
  container.innerHTML = "";
  eventosFiltrados.forEach((evento, index) => {
    container.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src="${
                              evento.imagem
                            }" class="card-img-top" alt="${evento.nome}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${evento.nome}</h5>
                                <p class="text-muted"><strong>Data:</strong> ${new Date(
                                  evento.data
                                ).toLocaleDateString("pt-BR")}</p>
                                <p class="text-muted"><strong>Local:</strong> ${
                                  evento.local
                                }</p>
                                <p class="text-muted"><strong>Curso:</strong> ${
                                  evento.curso
                                }</p>
                                <button class="btn btn-ver-evento btn-sm mt-auto" type="button" onclick="abrirEventoCompleto(eventos[${index}])">Detalhes do Evento</button>
                            </div>
                        </div>
                    </div>
                `;
  });
}

// Inicializar eventos
document.addEventListener("DOMContentLoaded", () => renderizarEventos());

// Adicionar novo evento
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
  renderizarEventos();
  bootstrap.Modal.getInstance(document.getElementById("modalEvento")).hide();
  e.target.reset();
});

// Função para remover acentos de uma string
function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Filtro e ordenação automáticos
document.getElementById("searchInput").addEventListener("input", () => {
  const searchTerm = removerAcentos(
    document.getElementById("searchInput").value.toLowerCase()
  );
  const sortOption = document.getElementById("sortSelect").value;
  let eventosFiltrados = eventos.filter(
    (e) =>
      removerAcentos(e.nome.toLowerCase()).includes(searchTerm) ||
      removerAcentos(e.local.toLowerCase()).includes(searchTerm) ||
      removerAcentos(e.descricao.toLowerCase()).includes(searchTerm)
  );
  if (sortOption === "name")
    eventosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  else if (sortOption === "date")
    eventosFiltrados.sort((a, b) => new Date(a.data) - new Date(b.data));
  renderizarEventos(eventosFiltrados);
});
document.getElementById("sortSelect").addEventListener("change", () => {
  const searchTerm = removerAcentos(
    document.getElementById("searchInput").value.toLowerCase()
  );
  const sortOption = document.getElementById("sortSelect").value;
  let eventosFiltrados = eventos.filter(
    (e) =>
      removerAcentos(e.nome.toLowerCase()).includes(searchTerm) ||
      removerAcentos(e.local.toLowerCase()).includes(searchTerm) ||
      removerAcentos(e.descricao.toLowerCase()).includes(searchTerm)
  );
  if (sortOption === "name")
    eventosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  else if (sortOption === "date")
    eventosFiltrados.sort((a, b) => new Date(a.data) - new Date(b.data));
  renderizarEventos(eventosFiltrados);
});

// Ação do botão Inscrever-se
document.getElementById("inscreverBtn").addEventListener("click", () => {
  alert("Inscrição realizada com sucesso! (Funcionalidade em desenvolvimento)");
  bootstrap.Modal.getInstance(
    document.getElementById("modalEventoCompleto")
  ).hide();
});

// função para abrir e fechar o menu em responsividade
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
