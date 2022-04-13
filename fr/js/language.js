// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (lang === 'fr') {
      window.location.href = '../fr/'+ page 
      
    } else if (lang === 'en') {
      window.location.href = '../en/'+ page 
      
    }
  }
  