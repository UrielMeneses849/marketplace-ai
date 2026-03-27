import { useEffect, useState } from "react";
function Modal({ agent, onClose }) {
  if (!agent) return null;

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        opacity: isClosing ? 0 : 1,
        transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          width: "600px",
          maxWidth: "90%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          position: "relative",
          transform: isClosing ? "scale(0.96) translateY(12px)" : "scale(1) translateY(0)",
          opacity: isClosing ? 0 : 1,
          transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >

        {/* Close button */}
        <div
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#E6E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#001391"
          }}
        >
          ✕
        </div>

        {/* Header */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
          <img
            src={agent.image}
            alt={agent.name}
            style={{ width: "90px", height: "90px", borderRadius: "16px" }}
          />

          <div>
            <h2 style={{ margin: 0, color: "#001391", fontSize: "28px" }}>
              {agent.name}
            </h2>
            <p style={{ margin: "6px 0", fontSize: "16px", color: "#333" }}>
              {agent.desc}
            </p>
          </div>
        </div>

        {/* Info */}
        <p style={{ margin: "6px 0" }}>
          Área: <strong>Negocio</strong>
        </p>

        <p style={{ margin: "6px 0", marginBottom: "16px" }}>
          Autor: <strong>{agent.author}</strong>
        </p>

        {/* Qué hace */}
        <p style={{ fontWeight: 500 }}>¿Qué hace?:</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          {agent.functions?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Salida */}
        <p style={{ fontWeight: 500 }}>Salida:</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          {agent.outputs?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Button (conditionally render only if NOT "Proximamente") */}
        {agent.category !== "Proximamente" && (
          <button
                      onClick={() => {
              if (agent.url) {
                window.open(agent.url, "_blank");
              }
            }}
            style={{
              width: "100%",
              padding: "14px",
              background: "#001391",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Probar Agente
          </button>
        )}

      </div>
    </div>
  );
}

export default Modal;