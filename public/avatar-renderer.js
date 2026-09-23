window.onload = () => {

    const avatar = document.createElement("img");

    avatar.src = "/assets/avatar.jpg";

    avatar.style.position = "fixed";
    avatar.style.top = "20px";
    avatar.style.right = "20px";

    avatar.style.width = "200px";
    avatar.style.border = "3px solid red";
    avatar.style.zIndex = "9999";

    document.body.appendChild(avatar);

};