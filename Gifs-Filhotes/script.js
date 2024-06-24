const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnc0Z3gxZGRveTBpcG1peGQxZDJqcGd0NXFpdW9rdGdneHpjbDY3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QPaEnNSB4n6VO/200.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHN2dzhqaGp0M2VrZ25oNnB3d3lhbzI1YTh6dWVlMzhndTd6cGh1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I9XrL9Tc1jpe/200.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDI3eWpucWlmZG9tOTdycjg2OG1maWJsbXF6b2I0Z3pqODNmOHFtZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfLIA5rPSEdYrGvWLw/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBteHp6cTBubXZydDUwMnp1MG0yend5ZHpvZ2N1MzR3ZTVkd3VyOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ONuQzM11fjvoY/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFoOHBuY3FvOTFpdXBwZHV1bmtjZWRydWp2ZDd1ZnI1ZW92djk5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CY5RNbG7J8koM/giphy.webp",
    "https://i.giphy.com/hSjOP9Isvq8oWYQiVS.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y1NnR0bzNjODFjOWxvajhneTNzenl6cW1jamxrcjhwOGRzZWJocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KcmhtjgAAnuoM/giphy.webp",
    "https://media4.giphy.com/media/aS3OpVkmOA9O0/giphy.webp?cid=ecf05e47lsx7zl5a929v90d3n15u6of0w2il7dxd4wgibpi1&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWdyYmpwOXV3cm9sazB3YXRuanBwNnFqcTg2enV1aXo0dW51aG55dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tzNyMk9OxjDVu/200.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmdtb2ZkOXpxaGc2bXRrOGhlcjVxMDQ5Ymw1ZGFkNzR1bTR0ZTRiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TiGU15XidBZ9S/giphy.webp"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);