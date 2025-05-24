const { ipcRenderer } = require('electron');

document.getElementById('submit-news').addEventListener('click', () => {
    const title = document.getElementById('news-title').value;
    const summary = document.getElementById('news-summary').value;
    const date = document.getElementById('news-date').value;
    const imageUrls = document.getElementById('news-image-urls').value.split(',');

    const newsItem = {
        title,
        summary,
        date,
        imageUrls,
    };

    ipcRenderer.send('add-news', newsItem);
    clearForm();
});

function clearForm() {
    document.getElementById('news-title').value = '';
    document.getElementById('news-summary').value = '';
    document.getElementById('news-date').value = '';
    document.getElementById('news-image-urls').value = '';
}