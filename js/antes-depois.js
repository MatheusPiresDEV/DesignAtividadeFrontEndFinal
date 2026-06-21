document.addEventListener("DOMContentLoaded", () => {
  // CONFIGURAÇÃO: Caminho da sua imagem padrão na pasta Assets caso o Unsplash falhe
  const IMAGEM_PADRAO_RESERVA = "assets/imagem-placeholder.jpg";

  // Função auxiliar para proteger as imagens contra erros de carregamento
  const precaverErroImagem = (elementoImg) => {
    if (!elementoImg) return;
    elementoImg.addEventListener("error", function tratarErro() {
      this.src = "assets/Reserva.jpg";
      // Remove o evento para evitar loops infinitos caso a imagem reserva também suma
      this.removeEventListener("error", tratarErro);
    });
  };

  // 1. FUNCIONAMENTO DO SLIDER ANTES E DEPOIS
  const barraAndante = document.querySelector(".barra-andante");
  const recorteFotoDepois = document.querySelector(".recorte-foto-depois");
  const linhaDivisoria = document.querySelector(".linha-divisoria");

  if (barraAndante && recorteFotoDepois && linhaDivisoria) {
    barraAndante.addEventListener("input", (e) => {
      const valor = e.target.value;
      recorteFotoDepois.style.width = `${valor}%`;
      linhaDivisoria.style.left = `${valor}%`;
    });
  }

  // 2. ATRIBUIÇÃO DE IMAGENS DO SLIDER (COM PROTEÇÃO)
  const fotosAntes = ["1513694203232-719a280e022f", "1505693416388-ac5ce068fe85", "1584622650111-993a426fbf0a"];
  const fotosDepois = ["1618221195710-dd6b41faaea6", "1616486338812-3dadae4b4ace", "1600210492486-724fe5c67fb0"];
  
  const indicePar = Math.floor(Math.random() * fotosAntes.length);
  const imgAntes = document.querySelector(".foto-antes");
  const imgDepois = document.querySelector(".recorte-foto-depois img");

  // Ativa a proteção antes de definir o link do Unsplash
  precaverErroImagem(imgAntes);
  precaverErroImagem(imgDepois);

  if (imgAntes && imgDepois) {
    imgAntes.src = `https://images.unsplash.com/photo-${fotosAntes[indicePar]}?w=1200&h=800&fit=crop`;
    imgDepois.src = `https://images.unsplash.com/photo-${fotosDepois[indicePar]}?w=1200&h=800&fit=crop`;
  }

  // 3. ATRIBUIÇÃO DE IMAGENS DOS CARDS DE ESTILOS (COM PROTEÇÃO)
  const fotosEstilos = [
    ["1600210492486-724fe5c67fb0", "1617806118233-18e1db207f62", "1600607687920-4e2a09cf159d"],
    ["1616486338812-3dadae4b4ace", "1540518614846-7eded433c457", "1513694203232-719a280e022f"],
    ["1505691938895-1758d7feb511", "1534349762230-e0cac37a211a", "1524758631624-e2822e304c36"]
  ];

  const blocosEstilosImgs = document.querySelectorAll(".bloco-estilo img");
  blocosEstilosImgs.forEach((img, index) => {
    precaverErroImagem(img); // Ativa a proteção individual do card
    if (fotosEstilos[index]) {
      const fotoId = fotosEstilos[index][Math.floor(Math.random() * fotosEstilos[index].length)];
      img.src = `https://images.unsplash.com/photo-${fotoId}?w=400&h=500&fit=crop`;
    }
  });

  // 4. EFEITO DE CONTADOR PROGRESSIVO DOS NÚMEROS
  const elementosNumeros = document.querySelectorAll(".numero-grande");

  if (elementosNumeros.length >= 4) {
    const metas = [
      { valor: Math.floor(Math.random() * (350 - 100 + 1)) + 100, sufixo: "+" },
      { valor: Math.floor(Math.random() * (18 - 5 + 1)) + 5, sufixo: "" },
      { valor: Math.floor(Math.random() * (100 - 95 + 1)) + 95, sufixo: "%" },
      { valor: Math.floor(Math.random() * (35 - 8 + 1)) + 8, sufixo: "" }
    ];

    const animarContador = (elemento, valorAlvo, sufixo) => {
      let inicio = null;
      const duracao = 1500;

      const passo = (timestamp) => {
        if (!inicio) inicio = timestamp;
        const progresso = timestamp - inicio;
        const taxaProgresso = Math.min(progresso / duracao, 1);
        
        const valorAtual = Math.floor(taxaProgresso * valorAlvo);
        elemento.textContent = `${valorAtual}${sufixo}`;

        if (taxaProgresso < 1) {
          requestAnimationFrame(passo);
        } else {
          elemento.textContent = `${valorAlvo}${sufixo}`;
        }
      };

      requestAnimationFrame(passo);
    };

    elementosNumeros.forEach((el, index) => {
      if (metas[index]) {
        animarContador(el, metas[index].valor, metas[index].sufixo);
      }
    });
  }
});