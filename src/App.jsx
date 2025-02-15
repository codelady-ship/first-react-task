import  "./style.css";
//defaut export
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Button from "./Components/Button";

//bg-proopsdur atribut kimi
const App =()=>{
    return(
  <div>
    <Header />
    <div class="buttons">
    <Button 
    title="click me:)" bgColor="gray"/>
    <Button 
    title="delete" bgColor="yellow" color="black"/>
    <Button 
    title="register" bgColor="blue"/>
    <Button 
    title="login" bgColor="green" outlined={true} color="black"/>
    </div>
    <Cards/>
    <Footer />
    <Cards/>
  </div>
    )
}
export default App;