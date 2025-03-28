function encryptText() {
    const text = document.getElementById("encryptInput").value;
    const key = document.getElementById("encryptKey").value;
    if (!text || !key) {
        alert("Please enter text and key.");
        return;
    }

    const encrypted = btoa(text.split("").map((char, i) => 
        String.fromCharCode(char.charCodeAt(0) + key.length)
    ).join(""));

    document.getElementById("outputText").value = encrypted;
}

function decryptText() {
    const text = document.getElementById("decryptInput").value;
    const key = document.getElementById("decryptKey").value;
    if (!text || !key) {
        alert("Please enter encrypted text and key.");
        return;
    }

    try {
        const decrypted = atob(text).split("").map((char, i) => 
            String.fromCharCode(char.charCodeAt(0) - key.length)
        ).join("");

        document.getElementById("outputText").value = decrypted;
    } catch {
        alert("Invalid decryption key or text.");
    }
}

function copyToClipboard() {
    const output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
