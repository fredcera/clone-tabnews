import { useState } from "react";

function Home() {
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const revelarMensagem = () => {
        setMostrarMensagem(true);
    };

    return (
        <div style={{
            minHeight: "100vh",
            padding: "40px",
            background: "linear-gradient(to bottom right, #e0f7fa, #fce4ec)",
            color: "#333",
            fontFamily: "Segoe UI, sans-serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            transition: "all 0.3s ease"
        }}>
            <h1>Obrigado por ser parte do que hoje faz toda a diferença na minha vida!</h1>

            {!mostrarMensagem && (
                <button
                    onClick={revelarMensagem}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "1em",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#b2dfdb",
                        color: "#004d40",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.2s ease"
                    }}
                >
                    Ver mensagem de agradecimento
                </button>
            )}

            {mostrarMensagem && (
                <p style={{
                    marginTop: "30px",
                    fontSize: "1.2em",
                    maxWidth: "700px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
                }}>
                    Agradeço à minha família por nunca soltar minha mão, mesmo nos momentos mais turbulentos.
                    Vocês sempre acreditaram que eu podia mudar, e me ensinaram que a vida tem altos e baixos —
                    mas também recomeços. Cada novo dia é uma chance de fazer diferente... e eu sigo tentando,
                    com vocês no coração.
                </p>
            )}
        </div>
    );
}

export default Home;
