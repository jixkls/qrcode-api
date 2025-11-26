import express from "express";
import cors from "cors";
import QRCode from "qrcode";

//Middlewares
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Tamo on papai");
})

app.post("/qrcode", async (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({error: "content is required"});
    }

    try {
        const qrCodeBase64 = await QRCode.toDataURL(content);

        res.json({
            content: content,
            qrcode: qrCodeBase64
        });

    } catch (err) {
        res.status(500).json({error: "Erro ao gerar o QRCode"});
    }

});

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escutando a porta ${PORT}`));