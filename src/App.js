import logo from "./logo.svg";
import "./App.css";
import Hok from "./componant/Hok"; 
import First from './componant/First';
import Ca from "./componant/Ca";
import Cb from "./componant/Cb";
import Cc from "./componant/Cc";
import Cd from "./componant/Cd";
import coma from"./componant/coma";
import ApiCalling from "./componant/Apicalling";
import ApiCallingtask from "./componant/Apicallingtask";
import For from "./componant/For";

function App() {
  return (
    <>
    {/* <Hok />
    <A/>
    <D/> */}
   {/*<ApiCalling/> 
    <ApiCallingtask/>*/}
    <For/>
     </>
  );
}

export default App;

function A(){
  return(
    <>
    <h1 style={{backgroundColor:'green', fontSize:'100px',color:'salmon'}}>hello</h1>
    <B/>
   </>
  )
}

function B(){
  return(
    <>
    <h1 style={{backgroundColor:'blue', fontSize:'50px',color:'aquamarine'}}>hi</h1>
    <C/>
    </>
  )
}

function C(){
  return(
    <h1 style={{backgroundColor:'blanchedalmond',fontSize:'30px',color:'rebeccapurple'}}>buddy</h1>
  )
}

function D(){
  return(
    <h1 style={{backgroundColor:'yellow',fontSize:'100px',color:'rebeccapurple'}}>Hello world</h1>
  )
}
