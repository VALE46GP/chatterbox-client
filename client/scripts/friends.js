var Friends = {
  myFriends: {},

  addFriend: function(username) {
    console.log(username);
    MessagesView.renderMessageByUser(username);
  }

};