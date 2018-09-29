var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function(message) {
    var html = "";
    
    html += MessageView.render(message);
    
    MessagesView.$chats.append(html);
  },

  renderMessageByRoom: function(option = 'lobby') {
    this.$chats.html('');

    Messages.messages.forEach(m => {
      if (m.roomname === option) {
        MessagesView.renderMessage(m)
        console.log(m);
      }
    });
    
  // when the room is changed, the messagesview should display the relevant messages
  // val of room select and get the right messages
  }
};