var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.selectButton();
    //this.populateSelect();
  },

  renderRoom: function(room) {
    this.$select.append(room);  
  },

  selectButton: function() {
    this.$button.click(function() {
      var room = prompt('Room Name: ');
      RoomsView.renderRoom(`<option value="<%-room%>">${room}</option>`);
      Rooms.roomNames.push(room);
      console.log('Rooms.roomNames = ', Rooms.roomNames);
    });
  },

  populateSelect: function() {
    console.log(Rooms.roomNames);
    Rooms.roomNames.forEach(r => {
      RoomsView.renderRoom(`<option value="<%-r%>">${r}</option>`)
      console.log(r);
    });
    
  }

};


// populate select with room names
// populate Messages with server messages
// modify message view to display only messages from specific rooms