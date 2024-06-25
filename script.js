const memeBtn = document.querySelector(".generate-meme-btn");
const memeImg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");
const downloadMemeBtn = document.querySelector("#download-meme");

// CREATE THE GENERATE  FUNCTION TO UPDATE THE DETAILS OF EACH MEME
const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
  // memeImg.src = url;
  downloadMemeBtn.href = url;
};

// CREATE THE GENERATE MEME FUNCTION
const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => updateDetails(data.url, data.title, data.author));
};

memeBtn.addEventListener("click", generateMeme);
generateMeme();

// downloadMemeBtn.addEventListener("click", (memeImageUrl) => {
//   // event.preventDefault();
//   // const memeImageUrl = memeImg.src; // Get the current image URL

//   // link.href = memeImageUrl;
//   // link.download = "meme.jpg"; // Customize the desired filename
//   // link.click();
//   // link.remove();

//   // fetch(memeImageUrl)
//   //   .then((response) => response.blob()) // Get the image data as Blob
//   //   .then((blob) => {
//   //     const link = document.createElement("a");
//   //     link.href = URL.createObjectURL(blob); // Create a temporary URL for the Blob
//   //     link.download = "meme.jpg";
//   //     link.click();
//   //     URL.revokeObjectURL(link.href); // Revoke the temporary URL after download
//   //   });

//   const downloadedImg = document.createElement("img"); // Create a new image element

//   fetch(memeImageUrl)
//     .then((response) => response.blob())
//     .then((blob) => {
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "meme.jpg";
//       link.click();

//       downloadedImg.src = link.href; // Set the downloaded image URL as the source
//       document.body.appendChild(downloadedImg); // Add the downloaded image to the page
//       URL.revokeObjectURL(link.href);
//     });
// });
