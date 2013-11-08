(function(){
  function SearchData(fieldId, url){
    this.fieldId = fieldId;
    this.url = url;
  }

  var setSearchEvent = function(data){
    var searchBox = document.getElementById(data.fieldId);
    searchBox.onkeypress = function(e){
      var searchURL = data.url + this.value;
      if (e.keyCode == 13) {
        chrome.tabs.update({ url: searchURL }, function(){
          window.close();
        });
      }
    }
  }

  var github = new SearchData('search-github', "https://github.com/search?q=");
  var rails = new SearchData('search-rails', "http://api.rubyonrails.org/?q=");
  var ruby = new SearchData('search-ruby', "http://ruby-doc.com/search.html?&q=");
  var gems = new SearchData('search-gems', "http://rubygems.org/search?&query=");

  var searchObjects = [github, rails, ruby, gems];

  for(var i = 0; i < searchObjects.length; i=i+1){
    setSearchEvent(searchObjects[i])
  }
})();
