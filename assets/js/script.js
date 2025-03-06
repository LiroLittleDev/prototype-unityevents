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
                        <p class="card-text">${descricao}</p>
                        <p class="text-muted">${data} - ${local}</p>
                        <button class="btn btn-link p-0" type="button" onclick="toggleDetails(this)">Exibir mais detalhes</button>
                        <div class="detalhes" style="display: none;">
                            <hr>
                            <p><strong>Organizador:</strong> ${organizador}</p>
                            <p><strong>Contato:</strong> ${contato}</p>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById("eventosContainer").appendChild(card);

            // Fechar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("modalEvento"));
            modal.hide();

            // Limpar campos
            document.getElementById("formEvento").reset();
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