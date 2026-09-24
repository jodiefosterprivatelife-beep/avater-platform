document.addEventListener("mousemove", (event) => {

    const avatar = window.avatarImage;

    if (!avatar) return;

    const x =
        (event.clientX - window.innerWidth / 2) / 40;

    const y =
        (event.clientY - window.innerHeight / 2) / 40;

    avatar.style.transform =
        `translate(${x}px, ${y}px)`;
});