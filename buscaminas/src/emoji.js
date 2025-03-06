
const Emoji = ({ juegoEnCurso }) => {

    return (
      <div className="align-self-center m-2 borderInsideS">
        <img
          src={juegoEnCurso ? "acierto.png" : "logo.png"} style={{ width: 50 }} alt="Game Status"
        />
      </div>
    );

  };
  
  export default Emoji;
  