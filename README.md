# 🌦️ ClimaVision | WeatherVision

Sistema web moderno para consulta de clima em tempo real utilizando a API da WeatherAPI.

A modern web application for real-time weather monitoring powered by WeatherAPI.

---

## 📌 Sobre o Projeto | About the Project

O **ClimaVision** é uma aplicação web desenvolvida com **HTML, CSS e JavaScript puro (Vanilla JS)** que permite consultar:

- 🌍 País  
- 🏙️ Cidade  
- 📅 Data e hora local  
- 🌡️ Temperatura atual  
- ☁️ Condição climática  

A aplicação consome dados em tempo real por meio de requisições assíncronas utilizando `fetch` e `async/await`.

---

## 🛠️ Tecnologias Utilizadas | Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- API REST  
- Async/Await  
- Fetch API  
- Manipulação de DOM  

---

## 🧠 Arquitetura do Projeto | Project Architecture

```bash
📁 projeto
 ┣ 📂 css
 ┃ ┗ 📄 style.css
 ┣ 📂 js
 ┃ ┗ 📄 script.js
 ┣ 📂 img
 ┣ 📄 index.html
 ┗ 📄 README.md
```
---

## ⚙️ Funcionalidades | Features

- ✅ Busca dinâmica por cidade  
- ✅ Consumo de API externa  
- ✅ Interface moderna e responsiva  
- ✅ Tratamento de erros  
- ✅ Separação de responsabilidades (funções específicas para cada atualização do DOM)  

---

## 🔄 Fluxo da Aplicação | Application Flow

1. Usuário digita o nome da cidade  
2. Evento de clique dispara a requisição  
3. A aplicação consome a API  
4. Os dados retornados são tratados  
5. A interface é atualizada dinamicamente  

---

## 🌐 API Utilizada | API Used

**WeatherAPI**

**Endpoint utilizado:**

```bash
https://api.weatherapi.com/v1/current.json

Felipe Loures
Desenvolvedor Front-End
