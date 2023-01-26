import {MainArticle} from "./components/molecules/MainArticle";
import {Container} from "./components/atoms/Container";

import {NewArticles} from "./components/molecules/NewArticles";
import {Typography} from "./components/atoms/Typography";
import {Title} from "./components/atoms/Title";

const mainArticle = {
    title:"The Bright Future of Web 3.0?",
    content:"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
}

const news = [
    {
        title:"Hydrogen VS Electric Cars",
        content:"Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        title:"The Downsides of AI Artistry",
        content:"What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title:"Is VC Funding Drying Up?",
        content:"Private funding by VC firms is down 50% YOY. We take a look at what that means."

    }
]

const others = [
    {
        number : "01",
        title:'Reviving Retro PCs',
        content:'What happens when old PCs are given modern upgrades?',
        image:"image-retro-pcs.jpg"
    },
    {
        number : "02",
        title:'Top 10 Laptops of 2022',
        content:'Our best picks for various needs and budgets.',
        image:'image-top-laptops.jpg'
    },
    {
        number : "03",
        title:'The Growth of Gaming',
        content:'How the pandemic has sparked fresh opportunities.',
        image:"image-gaming-growth.jpg"
    }
]

function App() {

  return (
    <div className="App">
        <Container>
            <MainArticle article={mainArticle}/>
            <NewArticles news={news}/>
            <div className="mt-4">
                {others.map((article) => {
                    return (
                        <div className={"flex mt-12 h-36 max-w-xl "}>
                            <div className={"min-h-full basis-4/12"}>
                                <img className={"h-full"} src={`src/assets/images/${article.image}`} alt="Images de vieux ordinateurs"/>
                            </div>
                            <div className={"flex flex-col justify-between items-start ml-6 basis"}>
                                <p className={"font-[Inter-ExtraBold] text-4xl text-[#5d5f79]"}>{article.number}</p>
                                <Title size={"small"} variant={"2"} title={article.title}/>
                                <Typography content={article.content}/>
                            </div>
                        </div>

                    )
                })}

            </div>
        </Container>
    </div>
  )
}




export default App
