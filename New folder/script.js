// Grab references to the search field and interface keys
const searchInput = document.getElementById('live-search');

// Listen for keys pressed down globally on the operating system
window.addEventListener('keydown', (event) => {
    let keyName = event.key.toLowerCase();
    
    // Check if the spacebar was pressed
    if (keyName === ' ') {
        keyName = 'space';
    }

    // Match the target ID element corresponding to the letter
    const targetKey = document.getElementById(`key-${keyName}`);
    
    if (targetKey) {
        // Light up the virtual screen keycap layout
        targetKey.classList.add('active');
        
        // If the search field isn't explicitly active, handle typing manually into input parameters
        if (document.activeElement !== searchInput) {
            if (keyName === 'space') {
                searchInput.value += ' ';
            } else if (keyName.length === 1) { // Standard single character inputs
                searchInput.value += event.key;
            }
        }
    }
});

// Remove visual glow highlighting when the user releases their finger from the hardware key cap
window.addEventListener('keyup', (event) => {
    let keyName = event.key.toLowerCase();
    if (keyName === ' ') {
        keyName = 'space';
    }
    
    const targetKey = document.getElementById(`key-${keyName}`);
    if (targetKey) {
        targetKey.classList.remove('active');
    }
});
