console.log("Face Tracking Loaded");

window.addEventListener("load", () => {

    document.addEventListener("mousemove", (event) => {

        if (!window.avatarImage) {
            return;
        }

        const x = (event.clientX - window.innerWidth / 2) / 40;
        const y = (event.clientY - window.innerHeight / 2) / 40;

        window.avatarImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});