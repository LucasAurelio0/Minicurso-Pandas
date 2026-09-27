import { Link } from 'react-router-dom'

type NextStepProps = {
    label: string
    to: string
}

function NextStep({ label, to }: NextStepProps) {
    return (
        <div className="next-step">
            <Link to={to} className="primary-button">
                {label} →
            </Link>
        </div>
    )
}

export default NextStep