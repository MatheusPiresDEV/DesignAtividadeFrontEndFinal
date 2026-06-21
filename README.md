# MP Portfólios - Design de Interiores & Arquitetura Clássica

## Objetivo do Projeto
Este projeto consiste em um site institucional e portfólio interativo voltado para o mercado de arquitetura e design de interiores com estética neoclássica. O objetivo principal é fornecer uma plataforma onde profissionais possam expor transformações de ambientes, gerenciar rascunhos de páginas customizadas localmente e captar novos clientes de forma elegante e dinâmica. 

O projeto foi desenvolvido como parte de uma Avaliação Prática acadêmica para aplicar conceitos fundamentais de desenvolvimento Web Front-End sem o uso de frameworks externos.

---

## Tecnologias Utilizadas
Para garantir o cumprimento dos requisitos estritos da avaliação, o projeto foi construído utilizando exclusivamente tecnologias nativas (Vanilla Web):
- **HTML5 Semântico:** Para a estruturação acessível e otimizada de todo o conteúdo.
- **CSS3 Avançado:** Para estilização responsiva, grid layouts, filtros visuais (grayscale) e transições fluidas.
- **JavaScript (Vanilla):** Para manipulação dinâmica do DOM, gerenciamento de eventos, persistência de dados local e validação estrita.

*Nota: Nenhuma biblioteca ou framework (como Bootstrap, React ou jQuery) foi utilizada no desenvolvimento.*

---

## Estrutura das Páginas
O site é composto por 4 páginas de navegação totalmente responsivas através de um menu dinâmico:

1. **Início (`index.html`):** Tela de apresentação do estúdio, contendo banners conceituais, portfólio de projetos integrados e rodapé informativo.
2. **Criar Página (`customizar.html`):** Painel interativo de gerenciamento e criação de portfólios onde o usuário configura cores de fundo, insere banners de projetos e testa em tempo real antes de simular a publicação.
3. **Dúvidas Frequentes (`duvidas.html`):** Central de ajuda estruturada em formato de sanfona (Accordion Layout) dinâmico, acompanhada de cards laterais de suporte e uma seção com embutimento de vídeo demonstrativo.
4. **Contato (`contato.html`):** Canal de atendimento com formulário integrado, cards informativos de localização com mapa interativo e feedback visual institucional.

---

## Funcionalidades Implementadas
- **Menu Hamburguer Nativo:** Sistema de navegação responsivo operado 100% via CSS (CSS-Only Toggle), garantindo leveza e performance em dispositivos móveis.
- **Slider Interativo "Antes e Depois":** Componente customizado baseado em sobreposição de camadas que permite ao usuário arrastar uma linha divisória para revelar a transformação do ambiente em tempo real.
- **Persistência de Dados com LocalStorage:** Mecanismo em JavaScript que salva rascunhos de customização diretamente no cache do navegador, impedindo a perda de progresso caso a aba seja fechada.
- **Efeito Sanfona Fluido (FAQ):** Abertura e fechamento independente de perguntas frequentes através de transições suaves de altura baseadas em CSS Grid (`grid-template-rows: 1fr`).
- **Validação Estrita de Formulário:** Interceptação nativa do evento de envio (`submit`), auditoria de preenchimento de campos obrigatórios e checagem de formato estrutural de e-mail via Expressões Regulares (Regex).
- **Modal de Sucesso Animada:** Feedback visual imediato em formato de janela sobreposta (*overlay*) simulando o protocolo e gravação dos dados de contato em um banco de dados.

---

## 🔗 Links de Acesso
- **Repositório no GitHub:** https://github.com/MatheusPiresDEV/DesignAtividadeFrontEndFinal.git
- **Site Publicado (GitHub Pages):** https://matheuspiresdev.github.io/DesignAtividadeFrontEndFinal/
- **Vídeo de Apresentação no YouTube:** Perae

---

## 👥 Integrantes
- **Nome do Aluno** - Matheus Gustavo Da Silva Pires
