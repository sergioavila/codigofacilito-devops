// Placeholder to host a component
const Hours = () => {
    //get hour and minutes
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    return (<div>
        <h1>Hora actual {hours}:{minutes}</h1>
    </div>
    )
}

export default Hours;