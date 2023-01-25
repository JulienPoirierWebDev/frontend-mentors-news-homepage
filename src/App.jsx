import {Button} from "./components/atoms/Button";
import {MainArticle} from "./components/molecules/MainArticle";
import {Container} from "./components/atoms/Container";

const mainArticle = {
    title:"The Bright Future of Web 3.0?",
    content:"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
}

function App() {

  return (
    <div className="App">
        <Container>
            <MainArticle article={mainArticle}/>
        </Container>
    </div>
  )
}


export default App
