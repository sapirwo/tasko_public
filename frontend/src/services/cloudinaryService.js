export const cloudinaryService = {
    uploadImg
}

async function uploadImg({target}) {
    const CLOUD_NAME = ""
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const formData = new FormData();
    formData.append('file', target.files[0])
    formData.append('upload_preset', '');
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        const url = data.secure_url
        return url

    } catch (err) {
        console.log(err);
    }
}