const Button=({title,bgColor,color="#fff",outlined})=>{
return(
    <button class="btn"
     style={{
        color:color,
        border:"1px solid" + bgColor,
        background:outlined ? "transparent" : bgColor
    }}
    >{title}</button>
)
}

export default Button