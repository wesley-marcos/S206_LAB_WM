
<h1 align="center">Projeto 1 - Cypress</h1>
<h3 align="center">✅ Concluído ✅</h3>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre as atividades</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-bib">Biblioteca</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 🎓 Sobre o projeto

Esse projeto foi desenvolvido para a matéria S206 - Qualidade de Software, do **[INATEL](https://inatel.br/home/)**, ministrada pelo monitor Antonio Victor Mendes Fonseca. O intuito da aplicação é fazer teste de UI, através de testes em um site de preferência. Optamos por utilizar o **[INATEL - MOODLE](https://moodle.inatel.br/login/index.php)**, pois se trata de um domínio da própria instituição.


---

## 📜 Tecnologias 

As seguintes tecnologias foram utilizadas na construção do projeto:

* Cypress
* Node.js  


### Utilitários

[![VSCode Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)

---

## 🚀 Como executar o projeto

Basta seguir os seguintes passos:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node](https://nodejs.org/en/download)

Além disto é bom ter um editor ou IDE para trabalhar com o código, assim como mostrado na aba ***Utilitários***.

```bash

# Instale o cypress
$ npm install cypress

# Criar o diretório inicial e indicar para o node que o diretório é um projeto
$ npm init

# Baixar as dependencias do projeto
$ npm install

# Adicionando as dependências necessárias para gerar o reporte de testes
$ npm i --save-dev cypress-mochawesome-reporter

# Rodar o projeto
$ ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

```

---


## 👥 Autor
<table>
  <tr>
    <td>
      <h4 align="center">
        <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/pedro-balestra" width="180px;" alt="Pedro Balestra">
      </h4>
      <strong>Pedro Balestra</strong>
      <br>
      <a href="https://www.linkedin.com/in/pedro-balestra/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge">
      </a>
      <a href="mailto:pedro.balestra@outlook.com">
        <img src="https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Outlook Badge">
      </a>
    </td>
    <td>
      <h4 align="center">
        <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/wesley-marcos" width="180px;" alt="Wesley Marcos">
      </h4>
      <strong>Wesley Marcos</strong>
      <br>
      <a href="https://www.linkedin.com/in/wesley-marcos-borges/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge">
      </a>
      <a href="mailto:wesley.marcos@gec.inatel.com">
        <img src="https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Outlook Badge">
      </a>
    </td>
  </tr>
</table>

---
## 📝 Licença
[![License](https://img.shields.io/github/license/wesley-marcos/C214_teste_mock)](http://badges.mit-license.org)

- **[MIT license](https://choosealicense.com/licenses/mit/)**
