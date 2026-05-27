<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Surpresa de Dia dos Namorados</title>
    <style>
        body {
            font-family: 'DM Sans', sans-serif;
            line-height: 1.6;
            color: #3f2a24;
            margin: 0;
            padding: 20px;
            background-color: #fff9f5;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            background: #fff0e8;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        h1, h2, h3 {
            font-family: 'Playfair Display', serif;
            color: #c2514a;
            margin-top: 25px;
            margin-bottom: 10px;
        }
        h1 {
            font-size: 2.2em;
            text-align: center;
            color: #e07b5a;
        }
        h2 {
            font-size: 1.8em;
            border-bottom: 1px solid #f1c2b2;
            padding-bottom: 5px;
        }
        h3 {
            font-size: 1.4em;
            color: #e07b5a;
        }
        code {
            background-color: #ffe6dd;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            color: #7a5d52;
        }
        pre {
            background-color: #ffe6dd;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 15px;
            border: 1px solid #f1c2b2;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        p {
            margin-bottom: 10px;
        }
        .text-center {
            text-align: center;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 0.9em;
            color: #7a5d52;
            border-top: 1px solid #f1c2b2;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>💖 Surpresa de Dia dos Namorados - Para o Amor da Minha Vida 💖</h1>

        <p>Este é um website personalizado e interativo, criado com muito carinho para surpreender seu(sua) namorado(a) no Dia dos Namorados (ou em qualquer dia especial!). Ele combina uma experiência de revelação divertida, uma mensagem romântica e bem-humorada, um mini-game interativo e uma linha do tempo emocionante com fotos do relacionamento de vocês.</p>

        <h2>✨ Funcionalidades Principais</h2>
        <ul>
            <li><strong>Tela de Revelação Interativa</strong>: Uma tela inicial com uma mensagem convidativa e um botão "Clique para revelar" que adiciona um toque de mistério e diversão à surpresa.</li>
            <li><strong>Mensagem Principal Personalizável</strong>: Uma seção hero com uma mensagem de feliz Dia dos Namorados e um texto que pode ser totalmente adaptado para refletir a sua história e piadas internas.</li>
            <li><strong>Mini-Jogo "Ache o Coração Certo"</strong>: Um pequeno e divertido jogo onde seu(sua) parceiro(a) precisa clicar em corações para encontrar o "coração certo", com feedback carinhoso a cada tentativa.</li>
            <li><strong>Timeline do Relacionamento</strong>: Uma linha do tempo onde você pode destacar momentos importantes da sua história, com descrições e, o mais legal, <strong>fotos do casal</strong> para cada evento.</li>
            <li><strong>Design Romântico e Responsivo</strong>: O site é visualmente atraente, com cores suaves e elementos românticos, e se adapta bem a diferentes tamanhos de tela (celulares, tablets e computadores).</li>
        </ul>

        <h2>🛠️ Como Personalizar</h2>
        <p>O projeto foi pensado para ser super fácil de personalizar, mesmo para quem não tem muita experiência com código. Você vai editar o arquivo <code>index.html</code> para a maioria das alterações.</p>

        <h3>1. Mensagem de Boas-Vindas e Títulos</h3>
        <ul>
            <li><strong>Nome do(a) Parceiro(a)</strong>:
                <p>No <code>index.html</code>, procure pela linha:</p>
                <pre><code>&lt;h2 class="hero-title"&gt;Oi, &lt;span class="personalizavel" data-label="nome-parceiro"&gt;meu amor&lt;/span&gt; 💘&lt;/h2&gt;</code></pre>
                <p>Mude <code>meu amor</code> para o nome ou apelido carinhoso do(a) seu(sua) parceiro(a).</p>
            </li>
            <li><strong>Mensagem do Cartão no Hero</strong>:
                <p>Ainda na seção <code>&lt;header class="hero"&gt;</code>, você encontrará um <code>&lt;aside class="hero-card"&gt;</code>. Edite o parágrafo com a classe <code>hero-card-text</code>:</p>
                <pre><code>&lt;p class="hero-card-text"&gt;\n    "Eu poderia te escrever um textão aqui, mas a verdade é simples:\n    com você até fila de mercado vira passeio romântico." ✨\n&lt;/p&gt;</code></pre>
                <p>Substitua o texto pela sua própria mensagem, piada interna ou declaração!</p>
            </li>
            <li><strong>Assinatura Final</strong>:
                <p>No final do <code>index.html</code>, na seção <code>&lt;section class="section section-final"&gt;</code>, procure por:</p>
                <pre><code>Assinado: &lt;span class="personalizavel" data-label="assinatura"&gt;seu(a) dev apaixonado(a)&lt;/span&gt;.</code></pre>
                <p>Mude <code>seu(a) dev apaixonado(a)</code> para a sua assinatura.</p>
            </li>
        </ul>

        <h3>2. Timeline do Relacionamento</h3>
        <p>A timeline é onde você conta a história de vocês! Cada item é um bloco <code>&lt;article class="timeline-item"&gt;</code>.</p>
        <ul>
            <li><strong>Adicionar/Remover Momentos</strong>:
                <ul>
                    <li>Para <strong>adicionar um novo momento</strong>: Copie e cole um bloco <code>&lt;article class="timeline-item"&gt;...&lt;/article&gt;</code> existente e preencha com as suas informações.</li>
                    <li>Para <strong>remover um momento</strong>: Simplesmente delete o bloco <code>&lt;article class="timeline-item"&gt;...&lt;/article&gt;</code> correspondente.</li>
                </ul>
            </li>
            <li><strong>Alterar Texto e Data</strong>:
                <p>Dentro de cada <code>timeline-item</code>, você encontrará:</p>
                <pre><code>&lt;h4 class="timeline-title"&gt;O dia em que tudo começou&lt;/h4&gt;\n&lt;span class="timeline-date"&gt;DD/MM/AAAA&lt;/span&gt;\n&lt;p class="timeline-text"&gt;\n    Aqui você pode contar como a gente se conheceu...\n&lt;/p&gt;</code></pre>
                <p>Edite o conteúdo de <code>&lt;h4&gt;</code> para o título do momento, <code>&lt;span&gt;</code> para a data e <code>&lt;p&gt;</code> para a descrição.</p>
            </li>
            <li><strong>Adicionar Fotos do Casal</strong>:
                <p>Dentro de cada <code>timeline-item</code>, há uma estrutura para a foto:</p>
                <pre><code>&lt;figure class="timeline-photo"&gt;\n  &lt;img\n    src="https://images.pexels.com/photos/3693901/pexels-photo-3693901.jpeg?auto=compress&cs=tinysrgb&w=800"\n    alt="Foto ilustrativa de um casal sorrindo juntos"\n  /&gt;\n  &lt;figcaption&gt;Substitua por uma foto real desse dia inesquecível. 💌&lt;/figcaption&gt;\n&lt;/figure&gt;</code></pre>
                <p><strong>Para trocar a foto</strong>:</p>
                <ol>
                    <li>Substitua o link dentro de <code>src="..."</code> pela URL da sua foto. Se você tiver as fotos no seu projeto (ex: numa pasta <code>imagens/</code>), pode usar <code>src="imagens/sua-foto.jpg"</code>.</li>
                    <li>Altere o <code>alt="..."</code> para uma breve descrição da sua foto (importante para acessibilidade).</li>
                    <li>Edite o texto dentro de <code>&lt;figcaption&gt;</code> para uma legenda fofa para sua foto.</li>
                </ol>
            </li>
        </ul>

        <h2>🚀 Como Visualizar o Projeto</h2>
        <ol>
            <li><strong>Salve os arquivos</strong>: Certifique-se de que os arquivos <code>index.html</code>, <code>style.css</code> e <code>script.js</code> estejam salvos no mesmo diretório.</li>
            <li><strong>Abra o <code>index.html</code></strong>: Basta clicar duas vezes no arquivo <code>index.html</code> no seu explorador de arquivos, e ele será aberto no seu navegador padrão.</li>
        </ol>

        <div class="footer">
            <p>---</p>
            <p>Feito com amor (e um pouco de código) por [Seu Nome/Apelido]! ❤️</p>
        </div>
    </div>
</body>
</html>
