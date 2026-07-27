const ApiKey = "241736338897545";
const ApiSecretKey = "P9KhNA4elB_l54_DJV0QaGM8F4A";

const url = 'https://api.cloudinary.com/v1_1/dg4zfs5xn/image/upload';


export async function uploadImage(formData) {
    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })

    const { secure_url } = await response.json()
    return secure_url;
}
