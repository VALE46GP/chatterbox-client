var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function(message) {
    var html = "";
    
    html += MessageView.render(message);
    
    MessagesView.$chats.append(html);
  }
    
  // when the room is changed, the messagesview should display the relevant messages
  // val of room select and get the right messages
};