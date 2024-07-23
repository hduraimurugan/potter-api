document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    fetch('https://potterapi-fedeperin.vercel.app/es/characters')
        .then(response => response.json())
        .then(data => { 
            const players = data;

            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'card';
                console.log(player.children)
                card.innerHTML = `
                    
                    <img src="${player.image || 'default-avatar.png'}" alt="${player.name}">
                    <div class="card-content">
                        <h4>${player.fullName}</h4>
                        <p>Nickname: ${player.nickname}</p>
                        <p>House: ${player.hogwartsHouse}</p>
                        <p>Played by: ${player.interpretedBy}</p>                           
                    </div>
                    
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the characters:', error));
});
