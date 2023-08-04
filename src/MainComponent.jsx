import { FooterComponent } from "./Components/FooterComponent"
import { HomePage } from "./Pages/HomePage"

export const MainComponent = ()=>{

    return(
        <div>
            <h1> Main Component</h1>
            <HomePage></HomePage>
            <FooterComponent></FooterComponent>
        </div>
    )
}