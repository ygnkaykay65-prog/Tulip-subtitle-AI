let lastSRT = "";

async function uploadFile() {
    const file = document.getElementById("file").files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://YOUR-RENDER-URL/transcribe", {
        method: "POST",
        body: formData
    });

    const data = await res.json();

    document.getElementById("output").innerText = data.srt;
    lastSRT = data.srt;
}

function downloadSRT() {
    const blob = new Blob([lastSRT], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "subtitle.srt";
    a.click();
}
