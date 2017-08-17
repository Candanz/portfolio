var pageManager = new PageManager();

var portfolio = new Page("portfolio", "Portfolio", "#portfolio");
var blog = new Page("blog", "Blog", "#blog");
var about = new Page("about", "About", "#about");
var contact = new Page("contact", "Contact", "#contact");

pageManager.addPages(portfolio, blog, about, contact);

window.onload = pageManager.hashChanged.bind(pageManager);
window.onhashchange = pageManager.hashChanged.bind(pageManager);

document.addEventListener('pageChanged', pageManager.pageChanged.bind(pageManager));