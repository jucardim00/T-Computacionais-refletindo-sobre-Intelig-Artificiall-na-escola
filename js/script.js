const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["Ficou assustado com a velocidade com que a tecnologia se desenvolve.", "Sentiu receio sobre como o avanço descontrolado pode impactar a sociedade."]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Ficou entusiasmado com as infinitas possibilidades do futuro.", "Enxergou a tecnologia como uma ferramenta revolucionária para o cotidiano."]
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: ["Aproveitou a IA para otimizar o tempo de pesquisa de forma prática.", "Aprendeu a sintetizar conceitos complexos usando explicações geradas pela máquina."]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ["Preferiu confiar na própria capacidade crítica e na troca de ideias humanas.", "Desenvolveu o trabalho valorizando visões pessoais e pesquisas tradicionais."]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: ["No debate, defendeu a necessidade de criar redes de proteção para os trabalhadores.", "Alertou para os riscos de substituição da mão de obra humana pelo automatismo."]
            },
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: ["Sustentou que a tecnologia abre portas para novas profissões e especializações.", "Acreditou que a IA serve para amplificar o potencial e a criatividade das pessoas."]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: ["Optou por criar a imagem manualmente, expressando seu lado artístico autorais.", "Valorizou o processo artesanal de desenho digital em vez da geração automática."]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ["Utilizou geradores automáticos para traduzir suas ideias visuais em segundos.", "Explorou o uso de comandos de texto para criar ilustrações complexas rapidamente."]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: ["Compreendeu que a IA precisa de supervisão e que o toque humano é insubstituível.", "Revisou todo o conteúdo para garantir originalidade e precisão acadêmica."]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: ["Considerou que a formulação dos comandos já garantia a autoria do trabalho.", "Confiou integralmente na resposta da máquina para entregar a tarefa no prazo."]
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}


function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

mostraPergunta();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["Ficou assustado com a velocidade com que a tecnologia se desenvolve.", "Sentiu receio sobre como o avanço descontrolado pode impactar a sociedade."]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Ficou entusiasmado com as infinitas possibilidades do futuro.", "Enxergou a tecnologia como uma ferramenta revolucionária para o cotidiano."]
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: ["Aproveitou a IA para otimizar o tempo de pesquisa de forma prática.", "Aprendeu a sintetizar conceitos complexos usando explicações geradas pela máquina."]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ["Preferiu confiar na própria capacidade crítica e na troca de ideias humanas.", "Desenvolveu o trabalho valorizando visões pessoais e pesquisas tradicionais."]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: ["No debate, defendeu a necessidade de criar redes de proteção para os trabalhadores.", "Alertou para os riscos de substituição da mão de obra humana pelo automatismo."]
            },
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: ["Sustentou que a tecnologia abre portas para novas profissões e especializações.", "Acreditou que a IA serve para amplificar o potencial e a criatividade das pessoas."]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: ["Optou por criar a imagem manualmente, expressando seu lado artístico autorais.", "Valorizou o processo artesanal de desenho digital em vez da geração automática."]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ["Utilizou geradores automáticos para traduzir suas ideias visuais em segundos.", "Explorou o uso de comandos de texto para criar ilustrações complexas rapidamente."]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: ["Compreendeu que a IA precisa de supervisão e que o toque humano é insubstituível.", "Revisou todo o conteúdo para garantir originalidade e precisão acadêmica."]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: ["Considerou que a formulação dos comandos já garantia a autoria do trabalho.", "Confiou integralmente na resposta da máquina para entregar a tarefa no prazo."]
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}


function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

mostraPergunta();
