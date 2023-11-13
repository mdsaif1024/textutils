import React from 'react'
// import React,{useState} from 'react'


const About = (props) => {
//     // const [myStyle, setmyStyle] = useState(second)
//     const [myStyle, setmyStyle] = useState({
//         color: "black",
//         backgroundColor: "white"
//     })
//     const [btnText, setbtnText] = useState("Enable Dark Mode")
//    const toogleStyle=()=>{
//         if (myStyle.color === "black") {
//             setmyStyle({
//                 color: "white",
//                 backgroundColor: "black"
//             })
//             setbtnText("Enable Light Mode")
//         }
//         else{
//             setmyStyle({
//                 color: "black",
//                 backgroundColor: "white"
//             })
//             setbtnText("Enable Dark Mode") 
//         }
//     }
    return (
        <>
            {/* <div className='container' style={myStyle} > */}
            <div className='container my-10' onClick={props.toggleMode} >
                <h1 style={{color: props.mode === "dark" ? "white" : "black"}}>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" onClick={props.toggleMode}>
                    {/* <div className="accordion-item" style={myStyle}> */}
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                // style={myStyle}
                                // onClick={props.toggleMode}
                                style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                            >
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        >
                            <div className="accordion-body">
                                 Textutils gives you a way to analyze your text quickly. It helps in word counting, editing, copying the text, removing white spaces, and many more.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" onClick={props.toggleMode}>
                    {/* <div className="accordion-item" style={myStyle}> */}
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                // style={myStyle}
                                // onClick={props.toggleMode}
                                style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                            >
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        >
                            <div className="accordion-body">
                                It is free to use. It is free of cost. You dont have to pay a single pennny.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" onClick={props.toggleMode}>
                    {/* <div className="accordion-item" style={myStyle}> */}
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                // style={myStyle}
                                // onClick={props.toggleMode}
                                style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                            >
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        >
                            <div className="accordion-body">
                                 It is browser compatible so you use it wherever you want. It totally depends upon your choice.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-primary mx-8 my-2" onClick={toogleStyle}>{btnText}</button> */}
            </div>

        </>
    )
}

export default About