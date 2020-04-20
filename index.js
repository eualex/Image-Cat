const catImg = document.querySelector(".cat-img");

const getImage = async () => {
  document.querySelector(".cat-box").style.display = "none";
  document.querySelector(".loader").style.display = "block";
  await fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      catImg.setAttribute("src", `${data[0].url}`);
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".cat-box").style.display = "flex";
    });
};

document.querySelector(".button-cat").addEventListener("click", () => {
  getImage();
});
