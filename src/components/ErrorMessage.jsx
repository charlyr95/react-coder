const ErrorMessage = ({ mensaje = "Ocurrió un error", onRetry }) => {
  return (
    <div className="alert text-center" role="alert">
      <p>{mensaje}</p>
      {onRetry && (
        <button className="btn btn-danger mt-2" onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
