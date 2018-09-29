 var MessageView = {

  render: _.template(`
    <div class="chat <%-roomname%>">
      <div class="username" onclick="Friends.addFriend('<%-username%>')"><%-username%></div>
      <div class="text"><%-text%></div>
    </div>
  `)

};