import Swal from 'sweetalert2'

export async function alertRemove(item) {
    const res = await Swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this ${item}!`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        reverseButtons: true
    })
    if (res.isConfirmed) {
        Swal.fire(
            'Deleted!',
            `Your ${item} has been deleted.`,
            'success'
        )
        return Promise.resolve()
    } else return Promise.reject('data saved!')
}

export function alertError(text) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text,
    })

}