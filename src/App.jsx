import Player from "./components/Player.jsx";
import Timer from "./components/TimerChallenge.jsx";

import { useRef, useState } from "react";

function App() {
  const myRef = useRef(null);
  const [data, setData] = useState();

  function handleClick() {
    // setData((prevData) => {
    //   return myRef.current.value ? myRef.current.value : prevData;
    // });
    setData(myRef.current.value.trim());
    myRef.current.value = "";
  }

  return (
    <>
      <Player onHandleClick={handleClick} data={data} ref={myRef} />
      <div id="challenges">
        <Timer title="Easy" targetTime={1} name={data} />
        <Timer title="Not Easy" targetTime={5} name={data} />
        <Timer title="Getting Tough" targetTime={10} name={data} />
        <Timer title="Pros Only" targetTime={15} name={data} />
      </div>
    </>
  );
}

export default App;
