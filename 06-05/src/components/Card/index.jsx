import './style.css'

export default function Card({ texto }) {
    return (
        <div className="card-container">
            {texto}
        </div>
    )
}