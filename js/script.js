document;
/* =====================================================
   EVENTO PRINCIPAL - BOTÃO BUSCAR
   Responsável por capturar a cidade e chamar a API
===================================================== */

document
  .querySelector("#buscar")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Evita reload da página

    try {
      /* ===============================
         1️⃣ Captura e valida cidade
      =============================== */
      const cidade = document.querySelector("#inputCidade").value.trim();

      if (!cidade) {
        console.log("Digite uma cidade válida!");
        return;
      }

      /* ===============================
         2️⃣ Configuração da API
         API utilizada: WeatherAPI
      =============================== */
      const apiKey = "6a1b95d8f3fb4f9f832181224262802"; // 🔐 Nunca exponha sua chave em produção
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;

      /* ===============================
         3️⃣ Requisição HTTP
      =============================== */
      const resp = await fetch(apiUrl);

      if (!resp.ok) {
        console.log("Erro ao pesquisar cidade!");
        return;
      }

      const dados = await resp.json();
      console.log("Resposta da API:", dados);

      /* ===============================
         4️⃣ Atualização da interface
      =============================== */
      showCidade(dados.location.name, dados.location.region);

      showDate(dados.location.localtime);

      showClima(dados.current.temp_c, dados.current.condition.text);

      showPais(dados.location.country);
    } catch (error) {
      /* ===============================
         Tratamento de erro geral
      =============================== */
      console.log("Erro ao buscar a requisição!", error);
    }
  });

/* =====================================================
   FUNÇÕES DE ATUALIZAÇÃO DA INTERFACE (DOM)
   Cada função tem uma responsabilidade única
===================================================== */

/* Exibe cidade e estado */
function showCidade(nomeCidade, estado) {
  const climaCidade = document.querySelector("#cidade-escolhida");

  climaCidade.innerHTML = `
    <p>${nomeCidade}, ${estado}</p>
  `;
}

/* Exibe temperatura e condição climática */
function showClima(temperatura, clima) {
  const tempCidade = document.querySelector("#temp-cidade");
  const situacaoClima = document.querySelector("#situacao-clima");

  tempCidade.innerHTML = `
    <p>Temperatura</p>
    <p>${temperatura} °C</p>
  `;

  situacaoClima.innerHTML = `
    <p>Hoje</p>
    <p>${clima}</p>
  `;
}

/* Exibe data local da cidade */
function showDate(horarioLocal) {
  const data = document.querySelector("#data-hj");
  data.innerHTML = `${horarioLocal}`;
}

/* Exibe país */
function showPais(pais) {
  const psqPais = document.querySelector("#nacao");

  psqPais.innerHTML = `
    <h2>${pais}</h2>
  `;
}
