window.onload = () => {

    const avatar = document.createElement("img");

    avatar.src = "/assets/avatar.jpg";

    avatar.style.position = "fixed";
    avatar.style.bottom = "20px";
    avatar.style.right = "20px";

    avatar.style.width = "220px";

    avatar.style.borderRadius = "50%";
    avatar.style.border = "4px solid #00ff88";

    avatar.style.boxShadow =
        "0 0 30px rgba(0,255,136,0.7)";

    avatar.style.zIndex = "9999";

    document.body.appendChild(avatar);

};