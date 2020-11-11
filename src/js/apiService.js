export default async(name, page) => {
    try {
        const picturesList = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=18996583-5f88ddbbd0a62c224fff1ccf9`);
        return picturesList.json();
    } catch (error) {
        return error;
    }
}