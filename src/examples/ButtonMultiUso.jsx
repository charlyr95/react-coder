const ButtonMultiUso = ({ color, label, onClick }) => {
    const buttonStyle = {
        backgroundColor: color || '#007BFF', // Default color if none is provided
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <button style={buttonStyle} onClick={onClick ? onClick : undefined}>
            {label}
        </button>
    );
};

export default ButtonMultiUso;