import Iconos from './componentes/Iconos';

function App() {
  return (
    <div className="App">
      <Iconos></Iconos>
      <svg ><use xlinkHref="#twitter"/></svg>
      <svg ><use xlinkHref="#instagram"/></svg>
      <svg ><use xlinkHref="#facebook"/></svg>
      <svg ><use xlinkHref="#github"/></svg>
      <h5 className="font-josefin-sans font-black" >JOSEFIN josefin</h5>
    </div>
  );
}

export default App;
