document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById('image-upload');
    const imagePreview = document.getElementById('image-preview');
    const result = document.getElementById('result');

    let model;

    // Cargar el modelo MobileNet
    async function loadModel() {
        model = await mobilenet.load();
        console.log('Modelo MobileNet cargado');
    }

    // Clasificar la imagen cargada
    async function classifyImage(image) {
        const predictions = await model.classify(image);
        result.textContent = `Predicción: ${predictions[0].className} - Probabilidad: ${(predictions[0].probability * 100).toFixed(2)}%`;
        console.log(predictions[0].className, predictions[0].probability)
    }

    // Manejar el evento de cambio de archivo
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.onload = () => classifyImage(imagePreview);
            };
            reader.readAsDataURL(file);
        }
    });

    // Cargar el modelo al cargar la página
    loadModel();
    
});
