import Header1 from "./Header/Header"

function headerDecide(props){
    const isHeader = props.isHeader;
    if (isHeader === "Header-0"){
        return <Header1/>
    } else {
        return
    }
}

export default headerDecide