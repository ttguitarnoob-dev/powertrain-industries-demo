export default function Separator({ color }) {

    return(
        <>
        <div className="separator mt-3 mb-3" style={{borderBottom: `25px solid ${color}`}}  ></div>
        {/* <section style={{backgroundColor: {color}, height: "20px"}}>

        </section> */}
        </>
    )
}

// style={{borderBottom: `25 px solid ${color}`, borderTop: "25px solid #d8a372",  borderRight: "50vw solid transparent", height: 0 }}