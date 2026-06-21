document.addEventListener("DOMContentLoaded", () => {
    const campoNome = document.getElementById("campo-nome");
    const campoCorFundo = document.getElementById("campo-cor");
    const campoCorTexto = document.getElementById("campo-cor-texto");

    const hInicioTitulo = document.getElementById("inicio-titulo");
    const hInicioBanner = document.getElementById("inicio-banner");
    const hInicioTexto = document.getElementById("inicio-texto");

    const hSobreTitulo = document.getElementById("sobre-titulo");
    const hSobreTexto = document.getElementById("sobre-texto");
    const hSobreP1 = document.getElementById("sobre-pilar-1");
    const hSobreP2 = document.getElementById("sobre-pilar-2");
    const hSobreP3 = document.getElementById("sobre-pilar-3");

    const hProjTitulo = document.getElementById("projeto-titulo");
    const hProjAntes = document.getElementById("projeto-img-antes");
    const hProjDepois = document.getElementById("projeto-img-depois");
    const hProjTexto = document.getElementById("projeto-texto");

    const hContEmail = document.getElementById("contato-email");
    const hContLocal = document.getElementById("contato-localizacao");

    const btnSalvar = document.getElementById("btn-salvar-rascunho");
    const btnPublicar = document.getElementById("btn-publicar-pagina");
    const btnAleatorio = document.getElementById("btn-gerar-aleatorio");

    const modal = document.querySelector(".modal-sucesso");
    const btnFecharModal = document.querySelector(".modal-botao");
    const telaPublicada = document.querySelector(".pagina-publicada");

    const botoesAba = document.querySelectorAll(".aba-item");
    const blocosAba = document.querySelectorAll(".bloco-aba-conteudo");

    botoesAba.forEach(botao => {
        botao.addEventListener("click", () => {
            botoesAba.forEach(b => b.classList.remove("ativa"));
            blocosAba.forEach(bloco => bloco.classList.remove("ativa"));

            botao.classList.add("ativa");
            const alvo = botao.getAttribute("data-alvo");
            document.getElementById(alvo).classList.add("ativa");
        });
    });

    const botoesPub = document.querySelectorAll(".pub-nav-item");
    const blocosPub = document.querySelectorAll(".bloco-pub-conteudo");

    botoesPub.forEach(botao => {
        botao.addEventListener("click", () => {
            botoesPub.forEach(b => b.classList.remove("ativa"));
            blocosPub.forEach(bloco => bloco.classList.remove("ativa"));

            botao.classList.add("ativa");
            const alvo = botao.getAttribute("data-pub-alvo");
            document.getElementById(alvo).classList.add("ativa");
        });
    });

    const sincronizarModelos = () => {
        const bg = campoCorFundo.value;
        const tx = campoCorTexto.value;

        const alvosVisuais = document.querySelectorAll(".pagina-customizada, .pagina-publicada-conteudo, .publicado-menu-nav");
        alvosVisuais.forEach(el => {
            el.style.backgroundColor = bg;
            el.style.color = tx;
        });

        document.querySelectorAll(".titulo-customizado").forEach(t => t.style.color = tx);

        document.getElementById("preview-inicio-titulo").textContent = hInicioTitulo.value || "Título Provisório da Página";
        document.getElementById("pub-view-inicio-titulo").textContent = hInicioTitulo.value || "Título Provisório da Página";

        document.getElementById("preview-inicio-texto").textContent = hInicioTexto.value || "O texto descritivo configurado será renderizado nesta região.";
        document.getElementById("pub-view-inicio-texto").textContent = hInicioTexto.value || "O texto descritivo configurado será renderizado nesta região.";

        const renderBanner = (url, containerId) => {
            const container = document.getElementById(containerId);
            if (url && url.trim() !== "") {
                container.innerHTML = `<img src="${url}" alt="Capa">`;
            } else {
                container.innerHTML = `<div class="banner-vazio">Insira uma URL de imagem de capa válida.</div>`;
            }
        };
        renderBanner(hInicioBanner.value, "preview-inicio-banner");
        renderBanner(hInicioBanner.value, "pub-view-banner");

        document.getElementById("preview-sobre-titulo").textContent = hSobreTitulo.value || "Sobre a Empresa";
        document.getElementById("pub-view-sobre-titulo").textContent = hSobreTitulo.value || "Sobre a Empresa";
        document.getElementById("preview-sobre-texto").textContent = hSobreTexto.value || "História descritiva conceitual.";
        document.getElementById("pub-view-sobre-texto").textContent = hSobreTexto.value || "História descritiva conceitual.";

        const renderCardsPilares = (containerId) => {
            const container = document.getElementById(containerId);
            const p1 = hSobreP1.value || "Pilar Um";
            const p2 = hSobreP2.value || "Pilar Dois";
            const p3 = hSobreP3.value || "Pilar Três";

            container.innerHTML = `
        <div class="card-pilar-item" style="border-color: ${tx}40">
          <h4 style="color: ${tx}">${p1}</h4>
          <p>Compromisso com os padrões estabelecidos no briefing inicial do projeto.</p>
        </div>
        <div class="card-pilar-item" style="border-color: ${tx}40">
          <h4 style="color: ${tx}">${p2}</h4>
          <p>Conexão entre estética contemporânea e usabilidade diária.</p>
        </div>
        <div class="card-pilar-item" style="border-color: ${tx}40">
          <h4 style="color: ${tx}">${p3}</h4>
          <p>Acompanhamento e suporte minucioso em todas as etapas estruturais.</p>
        </div>
      `;
        };
        renderCardsPilares("preview-container-pilares");
        renderCardsPilares("pub-container-pilares");

        document.getElementById("preview-projeto-titulo").textContent = hProjTitulo.value || "Projeto de Destaque";
        document.getElementById("pub-view-projeto-titulo").textContent = hProjTitulo.value || "Projeto de Destaque";
        document.getElementById("preview-projeto-texto").textContent = hProjTexto.value || "Soluções estruturais da obra.";
        document.getElementById("pub-view-projeto-texto").textContent = hProjTexto.value || "Soluções estruturais da obra.";

        const renderFoto = (url, containerId, label) => {
            const container = document.getElementById(containerId);
            if (url && url.trim() !== "") {
                container.innerHTML = `<img src="${url}" alt="${label}">`;
            } else {
                container.innerHTML = `<div class="banner-vazio">${label} sem link</div>`;
            }
        };
        renderFoto(hProjAntes.value, "preview-img-antes", "Antes");
        renderFoto(hProjAntes.value, "pub-view-antes", "Antes");
        renderFoto(hProjDepois.value, "preview-img-depois", "Depois");
        renderFoto(hProjDepois.value, "pub-view-depois", "Depois");

        document.getElementById("preview-contato-email").textContent = hContEmail.value || "-";
        document.getElementById("pub-view-email").textContent = hContEmail.value || "-";
        document.getElementById("preview-contato-localizacao").textContent = hContLocal.value || "-";
        document.getElementById("pub-view-localizacao").textContent = hContLocal.value || "-";

        const enderecoDigitado = hContLocal.value.trim();
        const framePreview = document.getElementById("preview-mapa-frame");
        const framePub = document.getElementById("pub-mapa-frame");

        if (enderecoDigitado !== "") {
            const urlMapaFinal = `https://maps.google.com/maps?q=${encodeURIComponent(enderecoDigitado)}&t=&z=14&ie=UTF-8&iwloc=&output=embed`;
            if (framePreview.src !== urlMapaFinal) framePreview.src = urlMapaFinal;
            if (framePub.src !== urlMapaFinal) framePub.src = urlMapaFinal;
        }
    };

    const inputsEventos = [campoCorFundo, campoCorTexto, hInicioTitulo, hInicioBanner, hInicioTexto, hSobreTitulo, hSobreTexto, hSobreP1, hSobreP2, hSobreP3, hProjTitulo, hProjAntes, hProjDepois, hProjTexto, hContEmail, hContLocal];
    inputsEventos.forEach(input => {
        if (input) input.addEventListener("input", sincronizarModelos);
    });

    const capturarPacoteDados = () => {
        return {
            nome: campoNome.value, bg: campoCorFundo.value, tx: campoCorTexto.value,
            it: hInicioTitulo.value, ib: hInicioBanner.value, ix: hInicioTexto.value,
            st: hSobreTitulo.value, sx: hSobreTexto.value, sp1: hSobreP1.value, sp2: hSobreP2.value, sp3: hSobreP3.value,
            pt: hProjTitulo.value, pa: hProjAntes.value, pd: hProjDepois.value, px: hProjTexto.value,
            ce: hContEmail.value, cl: hContLocal.value
        };
    };

    if (btnSalvar) {
        btnSalvar.addEventListener("click", () => {
            const dados = capturarPacoteDados();
            localStorage.setItem(`vivre_site_${dados.nome || 'rascunho'}`, JSON.stringify(dados));

            const modalConteudo = modal.querySelector(".modal-conteudo");
            modalConteudo.innerHTML = `
        <h3>Operação Concluída</h3>
        <p>Os parâmetros e modificações estruturais foram vinculados ao identificador do navegador.</p>
        <button class="modal-botao botao-principal" onclick="fecharModalSucesso()">Fechar Janela</button>
      `;
            if (modal) modal.classList.add("visivel");
        });
    }

    if (btnPublicar) {
        btnPublicar.addEventListener("click", () => {
            const form = document.getElementById("formulario-customizacao");
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }
            sincronizarModelos();
            if (telaPublicada) telaPublicada.classList.add("ativa");
        });
    }


    if (btnAleatorio) {
        btnAleatorio.addEventListener("click", () => {
            campoNome.value = "vivre-studio-rand-" + Math.floor(Math.random() * 900 + 100);
            campoCorFundo.value = "#fbfaf8";
            campoCorTexto.value = "#2a2827";

            hInicioTitulo.value = "Arquitetura Orgânica e Espaços Fluídos";
            hInicioBanner.value = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80";
            hInicioTexto.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat justo. Cras id accumsan turpis. Proin elementum, dolor sit amet varius facilisis, magna ligula sodales lorem, ac pulvinar nisl libero porta justo.";

            hSobreTitulo.value = "Nossa Filosofia Arquitetônica desde 2012";
            hSobreTexto.value = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
            hSobreP1.value = "Sustentabilidade Ecológica";
            hSobreP2.value = "Minimalismo Funcional";
            hSobreP3.value = "Ergonomia Premium";

            hProjTitulo.value = "Revitalização da Cozinha Integrada Concept";
            hProjAntes.value = "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=500&q=80";
            hProjDepois.value = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80";
            hProjTexto.value = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.";

            hContEmail.value = "contato@vivrealeatorio.com.br";
            hContLocal.value = "Rua Borboletas Psicodélicas, Jabaquara, São Paulo - SP, CEP 04347-150";

            sincronizarModelos();
        });
    }


    window.voltarAoPainel = () => {
        if (telaPublicada) telaPublicada.classList.remove("ativa");
    };

    window.copiarLinkGerado = () => {
        const mensagemFicticia = "Obrigado por usar o site, estamos em melhoria!";
        navigator.clipboard.writeText(mensagemFicticia);

        const modalConteudo = modal.querySelector(".modal-conteudo");
        modalConteudo.innerHTML = `
      <h3>Link Copiado!</h3>
      <p>Obrigado por usar o site, estamos em melhoria!</p>
      <div class="animacao-modal animacao-copiar">
        <div class="elemento-gira"></div>
      </div>
      <button class="modal-botao botao-principal" onclick="fecharModalSucesso()">Fechar Janela</button>
    `;

        if (modal) modal.classList.add("visivel");
    };

    window.voltarAoPainelComModal = () => {
        const modalConteudo = modal.querySelector(".modal-conteudo");
        modalConteudo.innerHTML = `
      <h3>Modo de Edição</h3>
      <p>Funcionalidade ainda não totalmente implementada, mas seus dados locais foram preservados!</p>
      <div class="animacao-modal animacao-editar">
        <div class="elemento-pulsa"></div>
      </div>
      <button class="modal-botao botao-principal" onclick="fecharModalSucessoAposEditar()">Fechar e Voltar</button>
    `;

        if (modal) modal.classList.add("visivel");
    };

    window.fecharModalSucesso = () => {
        if (modal) modal.classList.remove("visivel");
    };

    window.fecharModalSucessoAposEditar = () => {
        if (modal) modal.classList.remove("visivel");
        if (telaPublicada) telaPublicada.classList.remove("ativa");
    };

    sincronizarModelos();
});