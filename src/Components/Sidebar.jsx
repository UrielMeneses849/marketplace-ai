import bbva from '../assets/bbva.svg'
export default function Sidebar() {
  return (
<div style={{
        width: "220px",
        height: "100vh",
        background: "#0A0A0A",
        color: "white",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "30px",
        fontWeight: "bold",
        fontSize: "18px",
        position: "fixed",
        left: 0,
        top: 0,
      }}>
      <img src={bbva} alt="Hero Image" style={{ width: '80%' }} />
    </div>
  );
}  