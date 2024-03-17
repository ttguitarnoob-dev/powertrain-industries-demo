export default function Separator({ bottomColor, topColor }) {

    return(
        <>
        <div className="separator mt-3 mb-3" style={{borderBottom: `25px solid ${bottomColor}`, borderTop: `25px solid ${topColor}`, borderRight: '20vw solid transparent', height: 0}}  ></div>
        {/* <section style={{backgroundColor: {color}, height: "20px"}}>

        </section> */}
        </>
    )
}

// style={{borderBottom: `25 px solid ${color}`, borderTop: "25px solid #d8a372",  borderRight: "50vw solid transparent", height: 0 }}