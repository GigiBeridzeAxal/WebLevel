import Image from "next/image";
import Header from "./components/Header";
import Threejs from "./components/Welcome";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
     <Header></Header>
     <br /><br />
     <Welcome></Welcome>
     <br /><br />
     <Portfolio></Portfolio>
    </>
  );
}
