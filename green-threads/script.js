// Função para mostrar a sombra na tela
function showOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
  // Função para ocultar a sombra na tela
  function hideOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  function showMenu(){
    const carrinhoMenu = document.getElementById("cart");
    carrinhoMenu.style.display = "block";
  }
  function hideMenu(){
    const carrinhoMenu = document.getElementById("cart");
    carrinhoMenu.style.display = "none";
  }
  // Função para tratar o clique no botão
  function handleButtonClick() {
    showOverlay();
    showMenu();
  }
  
  // Adicionando evento de clique ao botão
  const botao = document.getElementById("carrinho");
  botao.addEventListener("click", handleButtonClick);
  
  // Impedindo que o clique dentro da div "carrinho-menu" feche a sombra
  const carrinhoMenu = document.getElementById("cart");
  carrinhoMenu.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  
  // Adicionando evento de clique para fechar a sombra ao clicar fora da div "carrinho-menu"
  const overlay = document.getElementById("overlay");
  overlay.addEventListener("click", hideOverlay);
  overlay.addEventListener("click", hideMenu);

  const buy = document.getElementById("continue");
  buy.addEventListener("click", hideOverlay);
  buy.addEventListener("click", hideMenu);


  
  
  
  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }
  
  function showCart(){
    listContainer.innerHTML = localStorage.getItem("data");
  }


  // Array para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addItemToCart(item) {
  cartItems.push(item);
}

// Função para atualizar o carrinho exibido no menu
function updateCartMenu() {
  const cartMenu = document.getElementById("cart-items");
  cartMenu.innerHTML = "";

  let total = 0;

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - R$${item.price.toFixed(2)}`;
    cartMenu.appendChild(li);

    total += item.price;
  });

  const totalElement = document.getElementById("total");
  totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function apagui() {
  alert("Carrinho limpo!")
  location.reload();
}

const trash = document.getElementById("apagar");
  trash.addEventListener("click", apagui);

// Função para tratar o clique no botão de adicionar ao carrinho
function handleAddToCartClick(event) {
  event.preventDefault();

  const product = event.target.dataset.product;

  // Obter informações do produto com base no dataset ou através de outras lógicas

  // Exemplo de informações do produto
  const item = {
    name: "Camisa GreenThreds",
    price: 70.00,
  };

  addItemToCart(item);
  updateCartMenu();

  showMenu();
  saveData();
  showCart();
}

// Adicionar o evento de clique para todos os botões "adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll(".add");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCartClick);
});

  // Função para finalizar a compra
  function checkout() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    
    const totalElement = document.getElementById("total");
    totalElement.innerText = "Total: R$ 0.00";
    location.reload();

    alert("Compra finalizada!");
    saveData();
    showCart();    
  }

  // Adicionando o evento de clique para o botão "Finalizar Compra"
  const checkoutButton = document.getElementById("checkout");
  checkoutButton.addEventListener("click", checkout);


