function encodeAndDecodeMessages() {
    const sendButton = document.querySelectorAll('div button')[0];
    const readButton = document.querySelectorAll('div button')[1];

    sendButton.addEventListener('click', encode);
    readButton.addEventListener('click', decode);

    const messageField = document.querySelectorAll('div textarea')[0];
    const receiveField = document.querySelectorAll('div textarea')[1];

    function encode() {
        const message = messageField.value;

        let encoded = '';
        for (let char of message) {
            encoded += String.fromCharCode((char.charCodeAt(0) + 1));
        }
        receiveField.value = encoded;
        messageField.value = '';
    }

    function decode() {
        const encoded = receiveField.value;
        let message = '';
        for (let char of encoded) {
            message += String.fromCharCode((char.charCodeAt(0) - 1));
        }
        receiveField.value = message;
    }
}

//Не съм я прегледал!