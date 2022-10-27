import Content from "../Content/Index";
import './Contents.css'

export default function Contents(){
    return(
    <div className="posts">
        <Content
            title="High five, Hyperlink!"
            image="img/hyperlink.webp"
            alt="Hyperlink"/>
              
        <Content 
        title="Sorry, bro."
        image ="img/sorry_bro.webp"
        alt="Sorry, bro."
        />
      
    </div>
    )
}