const AboutCard = ({ title, body }) => {
    // Define icon mapping based on title
    const getIcon = (title) => {
        if (title.toLowerCase().includes('misión')) return 'bi-bullseye';
        if (title.toLowerCase().includes('visión')) return 'bi-eye';
        if (title.toLowerCase().includes('valores')) return 'bi-gem';
        return 'bi-info-circle';
    };

    // Define color scheme based on title
    const getColorScheme = (title) => {
        if (title.toLowerCase().includes('misión')) return { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' };
        if (title.toLowerCase().includes('visión')) return { bg: 'bg-success', text: 'text-success', border: 'border-success' };
        if (title.toLowerCase().includes('valores')) return { bg: 'bg-warning', text: 'text-warning', border: 'border-warning' };
        return { bg: 'bg-info', text: 'text-info', border: 'border-info' };
    };

    const icon = getIcon(title);
    const colors = getColorScheme(title);

    return (
        <div className={`card border-0 text-prose shadow-sm h-100 ${colors.border} border-top border-4`}>
            <div className="card-header bg-transparent border-0 pb-0 pt-4">
                <div className="d-flex align-items-center mb-2">
                    <div className={`${colors.bg} rounded-circle d-flex align-items-center justify-content-center me-3`}
                        style={{ width: '50px', height: '50px' }}>
                        <i className={`bi ${icon} text-white fs-4`}></i>
                    </div>
                    <h4 className={`card-title mb-0 fw-bold ${colors.text}`}>{title}</h4>
                </div>
            </div>
            <div className="card-body pt-2 fs-6">
                {body}
            </div>
        </div>
    )
}

export default AboutCard