export const unsplashService = {
    getCollection
}

const UnsplashJs = require('unsplash-js').default;
const unsplash = new UnsplashJs({
    accessKey: ""
});

async function getCollection(collectionNum = '***') {
    try {
        const photos = await unsplash.collections.getCollectionPhotos(collectionNum)
        return photos.json()
    } catch (err) {
        return err
    }
}