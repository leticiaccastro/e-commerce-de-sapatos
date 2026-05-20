const produtos = [

  {
    nome: "Nike Air Max",
    marca: "Nike",
    preco: "799,90",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwHtG-Drj3YY69AXM_hNRu3NEi3SNMSIYzA&s",
    promocao: true
  },

  {
    nome: "Adidas Adistar 4",
    marca: "Adidas",
    preco: "699,90",
    imagem: "https://s.freecorner.com.br/product/2025/09/tenis-adidas-adstar-4-azul-masculino-corrida-free-corner-jr0315-10.jpg?format=webp",
    promocao: false
  },

  {
    nome: "Puma 180 ",
    marca: "Puma",
    preco: "499,90",
    imagem: "https://artwalk.vtexassets.com/arquivos/ids/549257/40210-1-011-1-AW-800X1000.jpg?v=638612542980930000",
    promocao: true
  },

  {
    nome: "Asics GEL-NYC",
    marca: "Asics",
    preco: "549,90",
    imagem: "https://cdnimg.etiquetaunica.com.br/products/webp/tenis-asics-gel-nyc-azul-guy157-1690471132-0000003_v2.webp",
    promocao: false
  }

];

const grid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

let carrinho = 0;

produtos.forEach(produto => {

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `

    ${produto.promocao ? '<div class="promo">PROMOÇÃO</div>' : ''}

    <img src="${produto.imagem}" alt="${produto.nome}">

    <div class="card-content">

      <h3>${produto.nome}</h3>

      <div class="brand">Marca: ${produto.marca}</div>

      <div class="price">R$ ${produto.preco}</div>

      <button>
        <i class="fa-solid fa-cart-shopping"></i>
        Adicionar ao Carrinho
      </button>

    </div>

  `;

  const button = card.querySelector("button");

  button.addEventListener("click", () => {
    carrinho++;
    cartCount.innerText = carrinho;
  });

  grid.appendChild(card);

});
