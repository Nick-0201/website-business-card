// -----footer__top-content-pages-list-----
const footerListPages = [
  {
    linkText: "Start"
  },
  {
    linkText: "Contact"
  },
  {
    linkText: "Our history"
  },
  {
    linkText: "Licenses"
  },
  {
    linkText: "Instructions"
  },
  {
    linkText: "Style guide"
  },
]

const footerContentList = document.querySelector(".footer__top-content-pages-list")

footerListPages.map(item => {
  footerContentList.innerHTML += `
  <li class="footer__top-content-pages-item">
  <a href="#" class="footer__top-content-pages-link">${item.linkText}</a>
  </li>
  `
})

// ------------------------------------

// ----footer__top-content-social-sedia-list----
const footerSocialMediaList = [
  {
    linkIcon: "./image/footerSvgImg/Aba.svg"
  },
  {
    linkIcon: "./image/footerSvgImg/FBook.svg"
  },
  {
    linkIcon: "./image/footerSvgImg/Igram.svg"
  },
]
const footerContentSocialMediaList = document.querySelector(".footer__top-content-social-sedia-list")

footerSocialMediaList.map(item => {
  footerContentSocialMediaList.innerHTML += `
  <li class="footer__top-content-social-sedia-item">
  <a href="#" class="footer__top-content-social-sedia-link">
    <img src="${item.linkIcon}" alt="#">
  </a>
</li>
  `
})


// ---------- export ----------
export let footer = 0;
// ----------------------------