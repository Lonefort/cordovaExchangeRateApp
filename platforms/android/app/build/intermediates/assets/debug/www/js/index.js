var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('rateready');
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.apilayer.net/api/live?access_key=bfdfc7ada34b4e24b5f71bbe41a98cfe');
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        localStorage.setItem('rate', data.quotes.USDUAH);
      } else {
        alert(request.status)
      }
    }

    request.send();
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log(id, 'asd');
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listen');
    var receivedElement = parentElement.querySelector('.receive');

    listeningElement.setAttribute('style', 'display:none;');
    listeningElement.innerHTML = 0
    receivedElement.setAttribute('style', 'display:block;');
    var receivedData = localStorage.getItem('rate')
    receivedElement.innerHTML = receivedData 

    console.log('Received Event: ' + id);
  }
};

app.initialize();
