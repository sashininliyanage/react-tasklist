import Header from "./components/Header";

const App = ()=> {
    return ( 
    <div className = "container" >
      <Header></Header>
    </div>
    );
}

Header.defaultProps = {
    title : "Trace Tracker",
}

export default App;