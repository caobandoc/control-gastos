export function generarID() {
    let random = Math.random().toString(36).substring(2, 9);
    let fecha = Date.now().toString(36);
    return random + fecha;
}

export function formatearFecha(fecha) {
    let fechaNueva = new Date(fecha);
    let opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-CO', opciones);
}