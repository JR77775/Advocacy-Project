const main = document.querySelector('.playlist-cards');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');
const songTitle = document.querySelector('#songTitle');
const songImage = document.querySelector('#songImage');
const artistName = document.querySelector('#artistName');

const renderPlaylists = () => {
    const playlists = data.playlists;

    main.style.display = 'grid';
    main.style.gridTemplateColumns = 'repeat(4, 1fr)';
    main.style.gap = '20px';

    main.innerHTML = '';
    for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        const template = `
            <div class="card" data-index="${i}">
                <img src="${playlist.playlist_art}" alt="Playlist Art" />
                <h2>${playlist.playlist_name}</h2>
                <h3>${playlist.playlist_creator}</h3>
                <p>
                    <span class="heart">❤</span>
                    <span>${playlist.likeCount}</span>
                </p>
            </div>
        `;
        main.innerHTML += template;
    }

    /*    EXPERIMENTAL */
    const songs = data.songs;
    const songID = data.songID; 
if(modal.style.display!=none)
{
    for (let i = 0; i < songs.length; i++) {
        const songID = songID[i];
        const template = `
            <div class="Modalcard" data-index="${i}">
                <img src="${song.songImage}" alt="Playlist Art" />
                <h2>${playlist.playlist_name}</h2>
                <h3>${playlist.playlist_creator}</h3>
                <p>
                    <span class="heart">❤</span>
                    <span>${playlist.likeCount}</span>
                </p>
            </div>
        `;
        main.innerHTML += template;
    }
/*             


*/
}
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-index');
            const selectedPlaylist = playlists[index];
            songTitle.innerText = selectedPlaylist.playlist_name;
            songImage.src = selectedPlaylist.playlist_art;
            artistName.innerText = selectedPlaylist.playlist_creator;
            

            modal.style.display = 'block';
        });
    });

    
}


closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

renderPlaylists();

console.log(data);