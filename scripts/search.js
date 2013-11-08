function SearchData(fieldId, url){
  this.fieldId = fieldId;
  this.url = url;
}

var github = new SearchData('search-github', "https://github.com/search?q=");
var rails = new SearchData('search-rails', "http://api.rubyonrails.org/?q=");
var ruby = new SearchData('search-ruby', "http://ruby-doc.com/search.html?&q=");
var gems = new SearchData('search-gems', "http://rubygems.org/search?&query=");

window.onload = function() {
  var searchGitHub = document.getElementById('search-github');
  var searchRails = document.getElementById('search-rails');
  var searchRuby = document.getElementById('search-ruby');
  var searchGems = document.getElementById('search-gems');

  searchBox.onkeypress = function(e){
    var searchURL = "https://github.com/search?q=" + this.value;

    if (e.keyCode == 13) {
      chrome.tabs.update({ url: searchURL }, function(){
        window.close();
      });
    }
  }
}
