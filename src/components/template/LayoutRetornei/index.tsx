import Navbar from "../Navbar";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Index(props: LayoutProps) {

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

