# 🎮 <img width="311" height="60" alt="logo" src="https://github.com/user-attachments/assets/d3cf2f50-95a4-4f1e-9133-448dd37d92ea" />


[![React Badge](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite Badge](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License Badge](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## ✨ Sobre o Projeto

O **Adivinhe** é um jogo interativo de adivinhação de palavras desenvolvido com React e TypeScript. O objetivo é descobrir a palavra secreta baseando-se em uma dica temática antes que o limite de tentativas se esgote.
<br/> O projeto foi desenvolvido na trilha Fullstack, da Rocketseat 💜.

### 🎯 Funcionalidades e Propósito

O jogo foi desenhado para testar o vocabulário e a lógica do usuário através de um sistema de dicas e palpites.

| Funcionalidade | Para que Serve | Como Funciona na Prática |
| :--- | :--- | :--- |
| **Ciclo de Jogo Dinâmico** | Garante que cada partida seja única. | Seleciona aleatoriamente um desafio (palavra + dica) de uma base de dados interna no início de cada rodada. |
| **Gestão de Tentativas** | Cria um desafio equilibrado para o jogador. | Calcula um limite de erros baseado no tamanho da palavra (+4 de margem), monitorando o fim do jogo por vitória ou derrota. |
| **Validação de Palpites** | Previne erros de entrada e repetições. | Bloqueia caracteres já utilizados e valida se o campo está vazio, exibindo alertas informativos ao usuário. |
| **Feedback Visual de Status** | Orienta o progresso do jogador. | Altera a cor e o estado dos componentes de letra (`correct` vs `default`) conforme o acerto ou erro. |
| **Interface Responsiva** | Garante acessibilidade em diferentes telas. | Utiliza CSS Modules para um layout centralizado e flexível que se adapta ao dispositivo. |

---

## 🛠️ O Arsenal de Tecnologia: Detalhes Turbinados

A arquitetura do **Adivinhe** foca em **Modularidade** e **Segurança de Tipos**, utilizando o que há de mais moderno no ecossistema React.

### 🌐 Core Technologies & Framework

| Tecnologia | Função no Projeto | Detalhes Técnicos e Boas Práticas |
| :--- | :--- | :--- |
| **React 19** | Biblioteca de Interface. | Uso avançado de hooks (`useState`, `useEffect`) para sincronizar o estado das letras com a lógica de fim de jogo. |
| **TypeScript** | Linguagem Principal. | Implementação de interfaces rigorosas para componentes e tipos de dados, garantindo que o fluxo de informações seja previsível. |
| **Vite** | Build Tool. | Configurado para um desenvolvimento ultra-rápido e um bundle final otimizado. |

### 🎨 Estilização e UI Componentizada

| Tecnologia | Função no Projeto | Detalhes Técnicos e Boas Práticas |
| :--- | :--- | :--- |
| **CSS Modules** | Escopo Local de Estilos. | Garante que os estilos de cada componente (Button, Header, Tip) sejam isolados, evitando conflitos globais. |
| **Noto Sans** | Tipografia. | Integrada via Google Fonts para garantir uma leitura clara e um visual moderno. |
| **SVG Icons** | Elementos Visuais. | Utilização de vetores leves para ícones de dica e reinicialização, mantendo a performance da aplicação. |

---

## 🎓 Meu Mergulho e Destaque de Aprendizado

Este projeto reflete minha evolução como **Desenvolvedor Front-end**, aplicando conceitos de engenharia de software no desenvolvimento de interfaces:

1.  **Manipulação de Estados Complexos:** A lógica de cruzamento entre as letras da palavra secreta e o array de letras já utilizadas foi um excelente exercício de algoritmos em JavaScript/TypeScript.
2.  **Arquitetura de Componentes Reutilizáveis:** Desenvolvi componentes atômicos (Button, Input, Letter) que podem ser facilmente reaproveitados em outros projetos, seguindo o princípio DRY (Don't Repeat Yourself).
3.  **Clean Code com TypeScript:** A tipagem de propriedades dos componentes elevou a manutenibilidade do código, permitindo identificar erros de lógica antes mesmo da execução.

---

## ⚙️ Como Rodar a Aplicação (Passo a Passo)

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado.
* Gerenciador de pacotes (NPM ou Yarn).

### Configuração
1. **Clone o Repositório:**
   ```bash
   git clone [https://github.com/Davi-Lorena/adivinhe.git](https://github.com/Davi-Lorena/adivinhe.git)
   cd adivinhe
