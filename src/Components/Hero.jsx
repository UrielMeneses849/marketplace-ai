import Heroimg from '../assets/Hero.svg'
export default function Hero() {
  return (
    <div style={{ width: "100%",
                 boxSizing: "border-box", 
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center"
                }}>
      <img src={Heroimg} alt="Hero Image" style={{ width: '95%'}} />
    </div>
  );
}   