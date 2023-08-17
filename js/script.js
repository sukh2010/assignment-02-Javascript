document.addEventListener("DOMContentLoaded", function () {
    const featuredImage = document.querySelector("#gallery figure img");
    const thumbnails = document.querySelectorAll("#gallery ul li img");
    const figcaption = document.querySelector("#gallery figure figcaption");
  
    // Array of gallery items with your image data
    const galleryItems = [
      {
        title: "Pink Flowers",
        source: "Your Source Here",
        featured: "images/flowers-pink-large.jpg",
        thumbnail: "images/flowers-pink-small.jpg",
      },
      {
        title: "Purple Flowers",
        source: "Your Source Here",
        featured: "images/flowers-purple-large.jpg",
        thumbnail: "images/flowers-purple-small.jpg",
      },
      {
        title: "Red Flowers",
        source: "Your Source Here",
        featured: "images/flowers-red-large.jpg",
        thumbnail: "images/flowers-red-small.jpg",
      },
      {
        title: "White Flowers",
        source: "Your Source Here",
        featured: "images/flowers-white-large.jpg",
        thumbnail: "images/flowers-white-small.jpg",
      },
      {
        title: "Yellow Flowers",
        source: "Your Source Here",
        featured: "images/flowers-yellow-large.jpg",
        thumbnail: "images/flowers-yellow-small.jpg",
      },
      // Add more gallery items if needed
    ];
  
    // Load the featured image and first figcaption
    featuredImage.src = galleryItems[0].featured;
    figcaption.textContent = galleryItems[0].title;
  
    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        featuredImage.src = galleryItems[index].featured;
        figcaption.textContent = galleryItems[index].title;
      });
    });
  });
  