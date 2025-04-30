const menu = [
  {
    nome: "Hamburguer",
    descricao: "Pão, Carne, Queijo oe Salada",
    imagem:"armando-ascorve-morales-ypZI_CA91M0-unsplash.jpg",
  },

  {
    nome: "Pizza",
    descricao: "Mussarela, Tomate e Manjericão",
    imagem: "ivan-torres-MQUqbmszGGM-unsplash.jpg",
  },

  {
    nome: "Suco Natural",
    descricao: "Suco de Frutas Frescas",
    imagem:"kobby-mendez-xBFTjrMIC0c-unsplash.jpg",
  },
];

const pedidosFeitos = {};
const listaPedidos = document.getElementById('lista-pedidos');
const menuContainer = document.getElementById("menu");
const btnLimpar = document.getElementById('btn-limpar');
const mensagem = document.getElementById ('mensagem-pedido')



function atualizarListaPedidos () {
  listaPedidos.innerHTML = "";


  for (let nome in pedidosFeitos) {
    const li = document.createElement("li");
    
    li.innerHTML = `
    ${nome} x${pedidosFeitos[nome]}
    <button class = "btn-retirar"> ❌ </button>
    `;

    const btnRetirar = li.querySelector(".btn-retirar");
    btnRetirar.addEventListener ("click", () => {
      if (pedidosFeitos[nome] > 1) {
        pedidosFeitos [nome] -= 1;
      } else {
        delete pedidosFeitos[nome];
      }
      atualizarListaPedidos();
    });

    listaPedidos.appendChild(li);
}
}

menu.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <img src= "${item.imagem}" alt="${item.nome}">
    <div class="card-content">
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
      <button class="btn-pedir">Pedir</button>
    </div>
    `;

    const btnPedir = card.querySelector(".btn-pedir");
  btnPedir.addEventListener("click", () => {

    mensagem.innerText = `Você pediu um ${item.nome}!🍽️`;
    mensagem.style.display = 'block'

    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 3000);

    if (pedidosFeitos[item.nome]) {
      pedidosFeitos[item.nome]  += 1;
    } else {
      pedidosFeitos[item.nome] = 1;
    }

atualizarListaPedidos()
  });

  menuContainer.appendChild(card);
});

    btnLimpar.addEventListener('click', () => {
      const confirmar = confirm("Tem certeza que deseja limpar todos os pedidos?");
      if (confirmar){
        for (let nome in pedidosFeitos) {
          delete pedidosFeitos[nome];
        }
        atualizarListaPedidos ();
        }
      });
