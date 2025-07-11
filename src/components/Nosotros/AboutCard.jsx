const AboutCard = ({ title, body }) => {
    return (
        <div className="card text-prose">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body">
                <>
                    {body}
                </>
            </div>
        </div>
    )
}

export default AboutCard