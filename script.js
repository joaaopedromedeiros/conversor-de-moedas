// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;




// recuperando o valor digitado nos elementos, posso usar as infos dele agora.
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const curruncy = document.getElementById("currency")
const footer = document.querySelector("main footer") // seleção por classe css
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o amount para receber somente números. (Usando  expressões regulares)

amount.addEventListener("input", () => {

  const hasCharacterRegex = /\D+/g 
  amount.value = amount.value.replace(hasCharacterRegex, "")


 amount.value
}) // Agora não consigo digitar caracteres porque estão sendo substituídas por espaço >>""<< dentro do input que esta sendo selecionado pela variável amount

// Se estiver observando... coisas que acontecem como input acontece.... { oq está aqui dentro}
  /* o value é um "atributo" do javascript que faz algo com o conteúdo da constante, nesse caso checar oq tem de valor atribuido*/

  // Capturando o evento de submit do formulário quando >>envia<< o forms!
  form.onsubmit = (event) => {
    event.preventDefault()

      // Criando formatação de exibição  desses valores caso selecione cada moeda         
    switch (currency.value){
      case "USD": 
        convertCurrency(amount.value, USD, "US$")
        break 
      case "EUR": 
        convertCurrency(amount.value,EUR, "€")
        break
        case "GBP": 
        convertCurrency(amount.value, GBP, "£")
        break
    }
    
    // break? Assim que identificar oo tuipoi da moeda já vai parar de "pesquisar" entre as outras opções.


  } // event --> o tipo do acontecimento ao capturar, que nesse caso o currency.VALUE é o valor digitado no input classificado como CURRENCY.

  // Função para converter a moeda, oq está dentro de () é parametros que vou usar com dados dentro da função, aonde estão os dados por ai...?


  function convertCurrency (amount, price, symbol) 
  // Esses parametros estão de acordo com o ConvertCurrency acima
  {
    try {

     // Exibindo a cotação da moeda selecionada
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
      let total = amount * price


      // Verifica se o resultado é um número ou não
      if (isNaN(total)){
        return alert("Por favor digite o valor novamente para converter")
      }

      //Formatar o valor total para poder exibir ele
      total = formatCurrencyBRL(total).replace("R$"," ")

      // Sem esse string o replace não funciona, por isso tem ele ai

      // Exibe resultado total
      //result.textContent = total

      //Criando a mesma coisa formatando com R$
        result.textContent = `${total} Reais`

    //Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")  

    } catch (error) {
      // Remove a classe do footer removendo ele da tela, caso der erro.
      footer.classList.remove("show-result")
      console.log(error)
      alert("Não foi possivel converter tente novamente mais tarde")
    }
  }

  // Objetivo da função:  Formata a moeda  em formato  brasileiro
  function formatCurrencyBRL(value){
    //Primeiro converte para número para utilizar toLocalString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", { 
      style: "currency", 
      currency: "BRL",
    })

    // Essa parte de style & currency é objeto, não aprendemos ainda... mas o currency se refere ao valor digitado no input com esse id --> currency
  }



