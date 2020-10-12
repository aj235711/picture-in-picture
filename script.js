const vid = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        vid.srcObject = mediaStream;
        vid.onloadedmetadata = () => {
            vid.play();
        }
    } catch(err) {
        console.log('Error,', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await vid.requestPictureInPicture(); 
    button.disabled = false;
})

// On load
selectMediaStream();