console.log("Face Tracking Loaded");

window.addEventListener("load", () => {

    if (!window.avatarImage) return;

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX - window.innerWidth / 2) / 40;

        const y =
            (event.clientY - window.innerHeight / 2) / 40;

        window.avatarImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});