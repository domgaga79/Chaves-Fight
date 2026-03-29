## 🎮 Chaves Fight

**Chaves Fight** is a fighting game inspired by the classic Mexican TV show *El Chavo del Ocho*, bringing its most iconic characters into humorous and nostalgic battles.

Following the style of classic fighting games like *Street Fighter*, players can choose from a variety of characters, each with their own moves, abilities, and unique animations. The gameplay is simple and straightforward: fight opponents in 1v1 matches using punches, kicks, and special attacks until your opponent’s health bar is depleted.

The game recreates environments and situations inspired by the original series, featuring a retro visual style and mechanics reminiscent of 90s arcade fighting games. It also captures the personality and humor of each character, making every match fun and faithful to the spirit of the show.

### ✨ Features

* 🥊 Classic arcade-style combat
* 👦 Iconic characters from the Chaves universe
* 🎯 Unique moves and special abilities
* 🕹️ Simple and accessible gameplay
* 🎨 Retro-inspired visuals

If you’re a fan of fighting games and the Chaves series, **Chaves Fight** delivers a fun experience that blends action with nostalgia.



---

## 🎮 Chaves Fight

**Chaves Fight** é um jogo de luta inspirado no universo do clássico seriado mexicano *El Chavo del Ocho* (Chaves), trazendo os personagens mais icônicos da vila para batalhas cheias de humor e nostalgia.

Seguindo o estilo dos jogos clássicos de luta como *Street Fighter*, o game permite que o jogador escolha entre diversos personagens, cada um com seus próprios golpes, habilidades e animações únicas. A jogabilidade é simples e direta: enfrente oponentes em combates 1 contra 1 utilizando socos, chutes e ataques especiais até esgotar a barra de vida do adversário. ([Wikipedia][1])

O jogo recria cenários e situações inspiradas na série original, com visual retrô e mecânicas que remetem aos jogos de luta dos anos 90. Além disso, incorpora elementos característicos dos personagens, tornando cada luta divertida e fiel ao espírito cômico da franquia. ([TechTudo][2])

### ✨ Features

* 🥊 Combate estilo arcade clássico
* 👦 Personagens icônicos do universo Chaves
* 🎯 Golpes especiais e habilidades únicas
* 🕹️ Jogabilidade simples e acessível
* 🎨 Visual retrô inspirado em jogos antigos

Se você é fã de jogos de luta e da turma da vila, **Chaves Fight** é uma experiência divertida que mistura nostalgia com ação.

---
📱 Inteligência Artificial no Mobile (Modo Single Player)
Para a versão mobile, onde a interface de toque prioriza o controle de um único jogador, implementei uma IA de Combate Baseada em Estados para controlar o oponente (Nhonho).🤖 Comportamento do BotDiferente de um movimento aleatório, o jogador controlado pelo computador utiliza uma lógica de perseguição e ataque simulada por scripts em JavaScript:Rastreamento de Alvo: O Bot monitora constantemente as coordenadas $(x, y)$ do jogador principal (Chaves).Aproximação Inteligente: Ele calcula a distância ideal para o ataque. Se estiver longe, ele se aproxima; se estiver muito perto, ele "orbita" o jogador para evitar ataques diretos e buscar uma abertura.Tomada de Decisão de Ataque: * Ataque Curto: Quando atinge a distância de colisão, o Bot aciona o soco básico.Golpe Especial: Em intervalos de tempo sorteados (para não ser previsível), ele executa o ataque pesado, exigindo que o jogador utilize a mecânica de defesa ou esquiva.🛠️ Implementação TécnicaA lógica foi estruturada dentro de um setInterval ou no próprio game loop (dependendo da sua versão), garantindo que a "vontade" do Bot seja processada em milissegundos, criando um tempo de reação desafiador, mas justo para o usuário.💡 Por que isso é relevante no seu portfólio?Isso demonstra que você não apenas "copiou e colou" um cenário, mas pensou na UX (Experiência do Usuário):Adaptabilidade: Você entendeu que dois jogadores no mesmo celular não funcionaria bem e criou uma solução técnica (a IA).Lógica de Jogos: Criar um bot, mesmo que simples, exige conhecimento de vetores, distâncias euclidianas e máquinas de estado.
