

const sapatos = [
  {
    nome: "Nike Air Max",
    marca: "Nike",
    modelo: "Air Max",
    preco: 799.90,
    cores: ["Preto", "Branco"],
    tamanhos: [38, 39, 40, 41],
    promocao: true,
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    nome: "Adidas Ultraboost",
    marca: "Adidas",
    modelo: "Ultraboost",
    preco: 699.90,
    cores: ["Azul", "Branco"],
    tamanhos: [37, 38, 39],
    promocao: false,
    imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  }
];

const container = document.getElementById('produtos');

sapatos.forEach(sapato => {
  container.innerHTML += `
    <div class="card">
      <img src="${sapato.imagem}" alt="${sapato.nome}">

      <h2>${sapato.nome}</h2>

      <p><strong>Marca:</strong> ${sapato.marca}</p>

      <p><strong>Modelo:</strong> ${sapato.modelo}</p>

      <p><strong>Cores:</strong> ${sapato.cores.join(', ')}</p>

      <p><strong>Tamanhos:</strong> ${sapato.tamanhos.join(', ')}</p>

      <p class="preco">R$ ${sapato.preco}</p>

      ${sapato.promocao ? '<span class="promocao">PROMOÇÃO</span>' : ''}
    </div>
  `;
});