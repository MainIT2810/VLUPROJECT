const buttonScroll = document.getElementById("scroll-button");

// When the user scrolls down 770px from the top of the document, show the button
window.onscroll = ()=> {
  scrollFunction();
};

const scrollFunction = ()=> {
  if (
    document.body.scrollTop > 770 ||
    document.documentElement.scrollTop > 770
  ) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.documentElement.scrollTop = 0;
}

