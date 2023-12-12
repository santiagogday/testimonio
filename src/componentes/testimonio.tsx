import "./styles.css"

type Props = {
    foto: string
    link: string
    texto: string
}
const Testimonio = (props: Props) => {
    return(
        <div>
            <div className="contenedor-testimonio">
                <img
                src={`${props.link}`}
                alt={`Foto de ${props.foto}`}
                title={`Foto de ${props.foto}`} />
                <div className="contenedor-texto">
                    <p>{`${props.texto}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonio