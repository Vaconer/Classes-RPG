class Personagem {
    constructor(nome, descricao, imagemURL) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagemURL = imagemURL;
        this.index = -1; // Índice inicial
    }

    criarCard() {
        const classList = document.getElementById("class-list");

        const classDiv = document.createElement("div");
        classDiv.classList.add("class-card");
        classDiv.id = `card-${this.index}`;

        const classImage = document.createElement("img");
        classImage.src = this.imagemURL;
        classImage.alt = this.nome;

        const className = document.createElement("h2");
        className.textContent = this.nome;

        const classDescription = document.createElement("p");
        classDescription.textContent = this.descricao;

        const attackButton = document.createElement("button");
        attackButton.textContent = "Atacar";
        attackButton.classList.add("attack-button");

        // Clique para o botão de ataque
        attackButton.addEventListener("click", () => {
            this.realizarAtaque();
        });

        // Inicialmente, o botão de ataque não é visível
        attackButton.style.display = "none";

        // Mouseover para mostrar o botão de ataque
        classDiv.addEventListener("mouseover", () => {
            attackButton.style.display = "block";
        });

        // Mouseout para ocultar o botão de ataque
        classDiv.addEventListener("mouseout", () => {
            attackButton.style.display = "none";
        });

        classDiv.appendChild(classImage);
        classDiv.appendChild(className);
        classDiv.appendChild(classDescription);
        classDiv.appendChild(attackButton);
        classList.appendChild(classDiv);
    }

    realizarAtaque() {
        // Dano aleatório (entre 1 e 20)
        const dano = Math.floor(Math.random() * 20) + 1;

        // Mensagem de ataque
        const mensagemAtaque = document.createElement("p");
        mensagemAtaque.textContent = `${this.nome} atacou causando ${dano} de dano!`;

        // Elemento da classe de personagem
        const classDiv = document.querySelector(`#card-${this.index}`);

        // Remover mensagens de ataque anteriores (se houver)
        const mensagensAnteriores = classDiv.querySelectorAll(".mensagem-ataque");
        mensagensAnteriores.forEach((mensagem) => {
            mensagem.remove();
        });

        // Mensagem de ataque à classe de personagem
        mensagemAtaque.classList.add("mensagem-ataque");
        classDiv.appendChild(mensagemAtaque);

        // Ocultar o botão de ataque após um ataque
        const attackButton = classDiv.querySelector(".attack-button");
        attackButton.style.display = "none";
    }
}

const arraydedados = [
    { nome: "Barbaro", descricao: "Um bárbaro feroz das terras selvagens, com cabelos desgrenhados e cicatrizes de batalhas antigas.", imagemURL: "barbaro.jpg" },
    { nome: "Bardo", descricao: "Um bardo carismático e viajado, vestido com roupas coloridas e um alaúde sempre à mão.", imagemURL: "Bardo.jpg" },
    { nome: "Bruxo", descricao: "Um bruxo misterioso, vestido em trajes sombrios e com olhos brilhantes que escondem segredos ancestrais.", imagemURL: "Bruxo.jpg" },
    { nome: "Clérigo", descricao: "Um clérigo devoto, vestindo uma túnica sagrada adornada com símbolos divinos e um olhar sereno de fé.", imagemURL: "Clérigo.jpg" },
    { nome: "Druida", descricao: "Um druida da floresta, com vestes feitas de folhas e cipós, que parece estar em sintonia com a natureza circundante.", imagemURL: "Druida.jpg" },
    { nome: "Feiticeiro", descricao: "Um feiticeiro enigmático, com trajes extravagantes e um cajado pulsante de energia arcana.", imagemURL: "Feiticeiro.jpg" },
    { nome: "Guardião", descricao: "Um guardião imponente, vestindo uma armadura reluzente e segurando um escudo firme que irradia confiança e proteção.", imagemURL: "Guardião.jpg" },
    { nome: "Guerreiro", descricao: "Um guerreiro destemido, com uma armadura robusta e uma espada afiada, pronto para enfrentar qualquer desafio.", imagemURL: "Guerreiro.jpg" },
    { nome: "Ladino", descricao: "Um ladino sorrateiro, vestido de maneira discreta e com olhos espertos que nunca perdem um detalhe.", imagemURL: "Ladino.jpg" },
    { nome: "Mago", descricao: "Um mago sábio, trajando um manto estrelado e empunhando um cajado que resplandece com poderes arcanos.", imagemURL: "Mago.jpg" },
    { nome: "Monge", descricao: "Um monge disciplinado, vestido com roupas simples e carregando uma aura de serenidade, pronto para usar suas habilidades marciais e espirituais.", imagemURL: "Monge.jpg" },
    { nome: "Paladino", descricao: "Um paladino justo e destemido, vestido em armadura reluzente, com a luz divina a irradiar de sua espada sagrada.", imagemURL: "Paladino.jpg" }
];

const personagens = arraydedados.map((obj, index) => {
    const personagem = new Personagem(obj.nome, obj.descricao, obj.imagemURL);
    personagem.index = index; // Defina o índice
    personagem.criarCard(); // Crie o card na página
    return personagem;
});

