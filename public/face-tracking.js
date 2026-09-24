const avatar = () => document.querySelector("img");

document.addEventListener("mousemove", (event) => {

    const img = avatar();

    if (!img) return;

    const moveX = (event.clientX - window.innerWidth / 2) / 50;
    const moveY = (event.clientY - window.innerHeight / 2) / 50;

    img.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});