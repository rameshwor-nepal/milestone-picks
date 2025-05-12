export const convertUrlToImageData = async (myImageUrl: string) => {
    try {
        const res = await fetch(myImageUrl)
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                return new File([blob], `${myImageUrl}`, { type: blob.type });
            });
        return res;
    } catch (err) {
        console.log(err)
        return null;
    }
};