import { useState } from "react";
import Modal from "./Modal";
import proximamente from "../Proximamente.json";

export default function Cards({ agents, onClick }) {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div style={{ padding: "10px 10px", width: "100%", maxWidth: "1400px", margin: "0 auto", boxSizing: "border-box", fontFamily: "'Poppins', sans-serif" }}>

      <h2 style={{
        color: "#001391",
        marginBottom: "20px"
      }}>
        Agentes publicados
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 400px))",
          justifyContent: "center",
          gap: "28px",
          transform: window.innerWidth > 1400 ? "scale(1.1)" : "scale(1)",
          transformOrigin: "top center"
        }}
      >

        {agents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgent(agent)}
            style={{
              display: "flex",
              gap: "18px",
              background: "#fff",
              padding: "16px",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              alignItems: "center",
              transition: "all 0.25s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
            }}
          >

            <img
              src={agent.image}
              alt={agent.name}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />

            <div style={{ flex: 1 }}>
              <h4 style={{
                margin: 0,
                fontSize: "20px",
                color: "#001391"
              }}>
                {agent.name}
              </h4>

              <p style={{
                margin: "6px 0",
                fontSize: "14px",
                color: "#555"
              }}>
                {agent.desc}
              </p>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAgent(agent);
                }}
                style={{
                  fontSize: "14px",
                  color: "#001391",
                  cursor: "pointer",
                  marginBottom: "6px",
                  fontWeight: 500
                }}
              >
                Detalles ▾
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (agent.url) {
                    window.open(agent.url, "_blank");
                  }
                }}
                style={{
                  background: "#001391",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                Probar agente
              </button>
            </div>

          </div>
        ))}

      </div>

      <h2 style={{
        color: "#001391",
        margin: "8% 0 20px",
        textAlign: "center"
      }}>
        Proximamente
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 400px))",
          justifyContent: "center",
          gap: "28px",
          marginBottom: "2%",
        }}
      >
        {proximamente.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgent(agent)}
            style={{
              display: "flex",
              gap: "18px",
              background: "#fff",
              padding: "16px",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              alignItems: "center",
              transition: "all 0.25s ease",
              cursor: "pointer"
            }}
          >

            <img
              src={agent.image}
              alt={agent.name}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />

            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: "20px", color: "#001391" }}>
                {agent.name}
              </h4>

              <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                {agent.desc}
              </p>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAgent(agent);
                }}
                style={{
                  fontSize: "14px",
                  color: "#001391",
                  cursor: "pointer",
                  marginBottom: "6px",
                  fontWeight: 500
                }}
              >
                Detalles ▾
              </div>

            </div>

          </div>
        ))}
      </div>

      <Modal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />

    </div>
  );
}