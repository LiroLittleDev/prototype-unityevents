document.getElementById("formEvento").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;
    const organizador = document.getElementById("organizador").value || "Não informado";
    const contato = document.getElementById("contato").value || "Não informado";
    const imagemInput = document.getElementById("imagem");

    if (nome && descricao && data && local) {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");

        let imagemHTML = "";
        if (imagemInput.files.length > 0) {
            const file = imagemInput.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                imagemHTML = `<img src="${e.target.result}" class="card-img-top" style="height: 180px; object-fit: cover;">`;
                inserirEvento();
            };
            reader.readAsDataURL(file);
        } else {
            inserirEvento();
        }

        function inserirEvento() {
            card.innerHTML = `
                <div class="card shadow-sm">
                    ${imagemHTML}
                    <div class="card-body">
                        <h5 class="card-title">${nome}</h5>
                        <p class="text-muted"><strong>Data:</strong> ${data}</p>
                        <p class="text-muted"><strong>Local:</strong> ${local}</p>
                        <button class="btn btn-link p-0" type="button" onclick="toggleDetails(this)">Exibir mais detalhes</button>
                        <div class="detalhes" style="display: none;">
                            <hr>
                            <p><strong>Organizador:</strong> ${organizador}</p>
                            <p><strong>Contato:</strong> ${contato}</p>
                            <p><strong>Descrição:</strong> ${descricao}</p>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById("eventosContainer").prepend(card);

            // Fechar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("modalEvento"));
            modal.hide();

            // Limpar campos
            document.getElementById("formEvento").reset();

            // Atualizar eventos
            eventos.unshift({ nome, descricao, data, local, organizador, contato, imagem: imagemHTML });
            filtrarEventos();
        }
    } else {
        alert("Preencha todos os campos obrigatórios!");
    }
});

function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Ocultar detalhes";
    } else {
        details.style.display = "none";
        button.textContent = "Exibir mais detalhes";
    }
}

const eventos = [
    {
        nome: "Meu pet bem cuidado",
        descricao: "Um evento dedicado ao bem-estar dos pets, com palestras e atividades.",
        data: "2025-03-05",
        local: "ESBAM",
        organizador: "Thiago Almeida",
        contato: "thiago.almeida@example.com",
        imagem: `<img src="assets/img/med-veterinaria.jpg" class="card-img-top" style="height: 180px; object-fit: cover;">`
    },
    {
        nome: "Saúde Mental",
        descricao: "Discussões sobre a importância da saúde mental e técnicas de autocuidado.",
        data: "2025-03-06",
        local: "ESBAM",
        organizador: "Maria Silva",
        contato: "maria.silva@example.com",
        imagem: `<img src="assets/img/psicologia.jpg" class="card-img-top" style="height: 180px; object-fit: cover;">`
    },
    {
        nome: "Inovações Tecnológicas",
        descricao: "Apresentação das últimas inovações tecnológicas e suas aplicações.",
        data: "2025-03-07",
        local: "ESBAM",
        organizador: "João Pereira",
        contato: "joao.pereira@example.com",
        imagem: `<img src="assets/img/tecnologia.jpg" class="card-img-top" style="height: 180px; object-fit: cover;">`
    },
    {
        nome: "Direito e Sociedade",
        descricao: "Debates sobre o impacto das leis na sociedade moderna.",
        data: "2025-03-08",
        local: "ESBAM",
        organizador: "Ana Costa",
        contato: "ana.costa@example.com",
        imagem: `<img src="assets/img/direito.jpg" class="card-img-top" style="height: 180px; object-fit: cover;">`
    }
];

document.getElementById("searchInput").addEventListener("input", filtrarEventos);
document.getElementById("sortSelect").addEventListener("change", filtrarEventos);

function filtrarEventos() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const sortValue = document.getElementById("sortSelect").value;

    let filteredEventos = eventos.filter(evento => 
        evento.nome.toLowerCase().includes(searchValue)
    );

    if (sortValue === "name") {
        filteredEventos.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortValue === "date") {
        filteredEventos.sort((a, b) => new Date(a.data) - new Date(b.data));
    }

    const eventosContainer = document.getElementById("eventosContainer");
    eventosContainer.innerHTML = "";

    filteredEventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card shadow-sm">
                ${evento.imagem}
                <div class="card-body">
                    <h5 class="card-title">${evento.nome}</h5>
                    <p class="text-muted"><strong>Data:</strong> ${evento.data}</p>
                    <p class="text-muted"><strong>Local:</strong> ${evento.local}</p>
                    <button class="btn btn-link p-0" type="button" onclick="toggleDetails(this)">Exibir mais detalhes</button>
                    <div class="detalhes" style="display: none;">
                        <hr>
                        <p><strong>Organizador:</strong> ${evento.organizador}</p>
                        <p><strong>Contato:</strong> ${evento.contato}</p>
                        <p><strong>Descrição:</strong> ${evento.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        eventosContainer.appendChild(card);
    });
}

// Carregar eventos iniciais
document.addEventListener("DOMContentLoaded", filtrarEventos);

