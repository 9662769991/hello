import { useState } from "react";

function ApiCallingtask() {
  const [mydata, setData] = useState("");
  const [submit , submited] = useState("");
  

  function display(e) {
    setData(e.target.value);
  }

  const handle = () => {
    submited(mydata);
    setData('');
  }
  return (
    <>
      <form action="">
        Enter Name : <input type="text" name="" id="" placeholder="Enter Name" value={mydata} onChange={display} />
        <input type="button" value="Submit" onClick={handle}/>
      </form>
     <h1>{submit}</h1>
    </>
  );
}

export default ApiCallingtask;