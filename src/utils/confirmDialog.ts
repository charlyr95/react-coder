import Swal from 'sweetalert2'

export async function confirmDialog(titulo: string = "¿Estás seguro?", texto: string = "", buttonText: string = "Aceptar"): Promise<boolean> {
    const result = await Swal.fire({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: 'Cancelar'
    })
    return result.isConfirmed
}
