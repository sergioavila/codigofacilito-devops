const Hours = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    return (<div>
        <h1>Hora actual {hours}:{minutes}</h1>
    </div>
    )
}

export default Hours;