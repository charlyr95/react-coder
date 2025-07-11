import Swal from "sweetalert2";

export async function confirmDialog(
  titulo: string = "¿Estás seguro?",
  texto: string = "",
  buttonText: string = "Aceptar"
): Promise<boolean> {
  const result = await Swal.fire({
    title: titulo,
    text: texto,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: buttonText,
    cancelButtonText: "Cancelar",
    customClass: {
      confirmButton: "btn btn-danger", // Bootstrap's red button class
      cancelButton: "btn btn-secondary", // Optional: Bootstrap's secondary button class
    },
  });
  return result.isConfirmed;
}
