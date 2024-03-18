// import { useRef, useState } from "react";
import { forwardRef } from "react";

const Player = forwardRef(function Player({ onHandleClick, data }, ref) {
  // const myRef = useRef(null);
  // const [data, setData] = useState();

  // function handleClick() {
  //   // setData((prevData) => {
  //   //   return myRef.current.value ? myRef.current.value : prevData;
  //   // });
  //   setData(myRef.current.value);
  //   myRef.current.value = "";
  // }

  return (
    <section id="player">
      <h2>Welcome {data ? data : "unknown entity"}</h2>
      <p>
        <input type="text" ref={ref} />
        <button onClick={onHandleClick}>Set Name</button>
      </p>
    </section>
  );
});

export default Player;
