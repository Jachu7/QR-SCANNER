let camOutput = document.querySelector(".camera-stream");
let camBtn = document.querySelector("#run-stream");
let canvas = document.querySelector(".canvas");
let canvasBtn = document.querySelector("#canvasBtn");

camBtn.addEventListener("click", async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    });
    camOutput.srcObject = stream;
});

canvasBtn.addEventListener("click", () => {
    canvas
        .getContext("2d")
        .drawImage(camOutput, 0, 0, canvas.width, canvas.height);
    let img_data = canvas.toDataURL("image/jpeg");
    console.log(img_data);
});
