const vid = document.getElementById('video');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        vid.srcObject = mediaStream;
        vid.onloadedmetadata = () => {
            vid.play();
            button1.style.display = 'none';
            button2.style.display = 'block';
        }
    } catch(err) {
        console.log('Error,', error);
    }
}

button1.addEventListener('click', selectMediaStream);
button2.addEventListener('click', playPictureInPicture);

async function playPictureInPicture() {
    button2.disabled = true;
    await vid.requestPictureInPicture(); 
    button2.disabled = false;
}

// On load
// selectMediaStream();