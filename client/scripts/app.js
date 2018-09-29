var App = {

  $spinner: $('.spinner img'),

  username: 'PootyTang',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Messages.initialize();

    // Fetch initial batch of messages
    App.send();
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.messages = data.results;
      for (var i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
      
      callback();
    });
  },

  send: function() {
    Parse.create({
      username: 'PootyTang',
      text: 'Sada tay',
      roomname: 'lobby' 
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
