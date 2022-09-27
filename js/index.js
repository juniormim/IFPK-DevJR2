

//Pegar elementos que serão preenchidos
const vitrine = document.querySelector(".vitrine") //main
const listacarrinho = document.querySelector(".listacarrinho") //carrinho
const footerTotal = document.querySelector(".total")
//Expor produtos na vitrine
function expor(produtos){
    //Limpar a vitrine para evitar duplicação de renderização
    vitrine.innerHTML = "";

    //Percorrer o array de produtos
    for(let i = 0; i<produtos.length; i++){
        
        //Acessando cada produto
        const item = produtos[i];

        //Criando card 
        const cardItem  = criarCardItem(item);
        vitrine.appendChild(cardItem);

    }
}
//Criar aviso de carro vazio/////////////////////////////////

    const avisoBox          = document.createElement("div")
    const avisoDestaque     = document.createElement("p")
    const aviso             = document.createElement("p")
    avisoBox.classList.add("avisoBox");
    avisoDestaque.classList.add("aviso","destaque");
    aviso.classList.add("aviso")
    avisoDestaque.innerText = "Carrinho vazio";
    aviso.innerText = "Adicione itens";
    avisoBox.appendChild(avisoDestaque);
    avisoBox.appendChild(aviso);
    listacarrinho.appendChild(avisoBox);
///////////////////////////////////////////////////////////

//Adicionar ao Carrinho
const estoque = data

for(let i=0; i<data.length;i++){
    estoque[i]["qnt"]=0;
}

//atualizar carrinho
function adicionarCarrinho(id){
    estoque[id-1].qnt ++;
}
function removerCarrinho(id){
    estoque[id-1].qnt --;
}
function exibirCarrinho (produtos){
    listacarrinho.innerHTML = "";
    footerTotal.innerHTML = "";
    let quantidade = 0;
    //Percorrer o array de produtos
    for(let i = 0; i<produtos.length; i++){
        if ( produtos[i].qnt > 0){
            quantidade +=1;    
        }
        }
        if(quantidade === 0){
            listacarrinho.appendChild(avisoBox);
        }
        if(quantidade > 0)
        {
            let total=0;
            var quantidadeTotal = 0
            for(let i = 0; i<produtos.length; i++){
                quantidadeTotal += estoque[i].qnt;
                total += estoque[i].qnt*estoque[i].value;
            }
            const fim                   = document.createElement("div")
            const quantidadeDeProdutos    = document.createElement("p");
            const fatura                = document.createElement("p")
            quantidadeDeProdutos.innerText = "Quantidade:  " + quantidadeTotal;
            fatura.innerText ="Total  " + "R$ " + total;
            quantidadeDeProdutos.classList.add("totalFinal")
            fatura.classList.add("totalFinal")  
            fim.appendChild(quantidadeDeProdutos);
            fim.appendChild(fatura);
            footerTotal.appendChild(fim); 

            for(let i = 0; i<produtos.length; i++)
            {
                if(produtos[i].qnt > 0)
                {
                const mcardItem  = criarMiniCardItem(produtos[i]);
                listacarrinho.appendChild(mcardItem);
                }
            }
        }
}

expor(data);

//Criar Card para a vitrine
function criarCardItem(produto){
//Coletando dados
const   img                 = produto.img;
const   nameItem            = produto.nameItem;
const   description         = produto.description;
const   value               = produto.value;
const   addCart             = produto.addCart;
const   tag                 = produto.tag;
const   id                  = produto.id

//Criar tags do modelo
const   card                = document.createElement("div");
const   frame               = document.createElement("div");
const   picture             = document.createElement("picture");
const   imgSrc              = document.createElement("img");
const   info                = document.createElement("div");
const   nomeProduto         = document.createElement("p");
const   descricaoProduto    = document.createElement("p");
const   valor               = document.createElement("p");
const   addButon            = document.createElement("button");
const   tagProduto          = document.createElement("p");

//Dando classe as tags

card.classList.add("card");
frame.classList.add("frame");             
picture.classList.add("picture");             
imgSrc.classList.add("img");              
info.classList.add("info");                
nomeProduto.classList.add("nomeProduto");         
descricaoProduto.classList.add("descricaoProduto");   
valor.classList.add("valor");              
addButon.classList.add("add");
addButon.setAttribute("id",id)           
tagProduto.classList.add("tagProduto");

//Preenchendo tags

imgSrc.src                  = img;
imgSrc.alt                  = nameItem;
nomeProduto.innerHTML       = nameItem;
descricaoProduto.innerHTML  = description;
valor.innerHTML             = "R$ " + value + ",00";
tagProduto.innerHTML        = tag;
addButon.innerHTML          = addCart;

//Montando o Card
picture.appendChild(imgSrc);
frame.appendChild(picture);
info.appendChild(tagProduto);
info.appendChild(nomeProduto);
info.appendChild(descricaoProduto);
info.appendChild(valor);
info.appendChild(addButon);
card.appendChild(frame);
card.appendChild(info);

//Retorna o Card
return card;
}

//Criar Minicard para o carrinho
function criarMiniCardItem(produto){
    //Coletando dados
const   img                 = produto.img;
const   nameItem            = produto.nameItem;
//const   description         = produto.description;
const   value               = produto.value;
const   addCart             = produto.addCart;
//const   tag                 = produto.tag;
const   id                  = produto.id
const   qProduto            = produto.qnt;

//Criar tags do modelo
const   mCard               = document.createElement("div");
const   frame               = document.createElement("div");
const   picture             = document.createElement("picture");
const   imgSrc              = document.createElement("img");
const   info                = document.createElement("div");
const   nomeProduto         = document.createElement("p");
//const   descricaoProduto    = document.createElement("p");
const   valor               = document.createElement("p");
const   removeButon         = document.createElement("button");
const   qntProdutos         = document.createElement("span")    
//const   tagProduto          = document.createElement("p");

//Dando classe as tags

mCard.classList.add("mCard");
frame.classList.add("frame");             
picture.classList.add("picture");             
imgSrc.classList.add("img");              
info.classList.add("info");                
nomeProduto.classList.add("nomeProduto");         
//descricaoProduto.classList.add("descricaoProduto");   
valor.classList.add("valor");
qntProdutos.classList.add("qnt")              
removeButon.classList.add("remove");
removeButon.setAttribute("id",id)            
//tagProduto.classList.add("tagProduto");

//Preenchendo tags

imgSrc.src                  = img;
imgSrc.alt                  = nameItem;
nomeProduto.innerHTML       = nameItem;
//descricaoProduto.innerHTML  = description;
valor.innerHTML             = "R$ " + value + ",00";
//tagProduto.innerHTML        = tag;
removeButon.innerText       = "Remover produto";
qntProdutos.innerHTML       =  qProduto;                 

//Montando o Card
picture.appendChild(imgSrc);
frame.appendChild(picture);
//info.appendChild(tagProduto);
info.appendChild(nomeProduto);
//info.appendChild(descricaoProduto);
info.appendChild(valor);
info.appendChild(removeButon);
info.appendChild(qntProdutos);
mCard.appendChild(frame);
mCard.appendChild(info);

//Retorna o Card
return mCard;
}

const botaoAdicionar = document.querySelector(".vitrine");
        botaoAdicionar.addEventListener("click", function(){
        const id = event.target.id;
        adicionarCarrinho(id);
        exibirCarrinho(estoque); 
});

const botaoRemover = document.querySelector(".listacarrinho");
        botaoRemover.addEventListener("click", function(){
        const id = event.target.id;
        removerCarrinho(id);
        exibirCarrinho(estoque);
});
