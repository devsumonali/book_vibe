export const getBooksProps = async () => {
    const res = await fetch('/data.json');
    if (!res.ok) {
        console.log('Api fetching error');
    }
    return res.json();
};
