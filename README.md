📝 README.md – QRCode Generator API (Node + Express)
# 📦 QRCode Generator API  
API simples e eficiente para geração de QR Codes utilizando **Node.js**, **Express** e a biblioteca **qrcode**.  
Suporta geração em **Base64** e **download direto em PNG**.

---

## 🚀 Tecnologias utilizadas
- **Node.js**
- **Express**
- **CORS**
- **qrcode** (biblioteca de geração de QR Code)

---

## 📁 Estrutura do projeto



qrcode-api/
├── index.js
├── package.json
└── node_modules/


---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/qrcode-api.git
cd qrcode-api

2. Instalar dependências
npm install

3. Iniciar o servidor
node index.js


Servidor rodando em:

http://localhost:3000

📌 Endpoints
1. Gerar QR Code (Base64)

POST /qrcode
Gera um QR Code e retorna como string Base64.

🔹 Body JSON:
{
  "content": "Texto ou URL aqui",
  "size": 300
}

🔹 Resposta:
{
  "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}

2. Gerar QR Code e baixar PNG

POST /qrcode/download

Permite baixar o QR Code diretamente como arquivo .png.

🔹 Body JSON:
{
  "content": "https://camufladoscompany.com",
  "size": 400
}

🔹 Resultado:

O navegador ou cliente HTTP fará download do arquivo qrcode.png

// (NÃO IMPLEMENTADO AINDA) 🛠 Configurações adicionais opcionais

Você pode customizar:

cor do QR Code

fundo

margens

tamanho

A rota pode ser estendida facilmente para suportar essas opções.

//

📄 Licença

Este projeto é livre para uso e modificação.
