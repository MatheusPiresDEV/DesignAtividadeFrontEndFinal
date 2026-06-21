document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contato");
  const modalOverlay = document.getElementById("contato-modal-sucesso");
  const btnFecharModal = document.getElementById("btn-fechar-modal");

  if (formulario) {
    formulario.addEventListener("submit", (evento) => {
      // Impede o redirecionamento padrão do HTML
      evento.preventDefault();
      
      let formularioValido = true;
      const inputs = formulario.querySelectorAll("input[required], textarea[required]");

      inputs.forEach(input => {
        const pai = input.parentElement;
        
        // Validação customizada
        if (!input.value.trim()) {
          pai.classList.add("campo-invalido");
          formularioValido = false;
        } else if (input.type === "email" && !validarEstruturaEmail(input.value)) {
          pai.classList.add("campo-invalido");
          formularioValido = false;
        } else {
          pai.classList.remove("campo-invalido");
        }
      });

      // Se passar em todos os testes, limpa os campos e dispara a janela modal
      if (formularioValido) {
        formulario.reset();
        if (modalOverlay) modalOverlay.classList.add("ativo");
      }
    });

    // Remove as marcações de erro em tempo real enquanto o usuário corrige os dados
    formulario.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("input", () => {
        const pai = input.parentElement;
        if (pai.classList.contains("campo-invalido")) {
          pai.classList.remove("campo-invalido");
        }
      });
    });
  }

  // Função auxiliar com regex estrutural de e-mail
  const validarEstruturaEmail = (email) => {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
  };

  // Ouvinte de fechamento da Janela Modal
  if (btnFecharModal && modalOverlay) {
    btnFecharModal.addEventListener("click", () => {
      modalOverlay.classList.remove("ativo");
    });
  }
});