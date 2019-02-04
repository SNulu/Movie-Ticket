// Business Logic for AddressBook ---------
function MovieTicket() {
  this.name = "",
  this.time = "",
  this.age= 0
}

MovieTicket.prototype.addName = function (name) {
  //contact.id = this.assignId();
  this.name = name;
}

MovieTicket.prototype.addTime = function (time) {
  //contactAddress.id = this.assignId();
  this.time = time;
}

$(document).ready(function () {
  attachContactListeners();
  $("form#movie-Tickets").submit(function (event) {
    event.preventDefault();

    var inpuOption = [ "",
                        "new-last-name",
                        "new-phone-number",
                        "new-address",
                        "new-email",
                        "new-work-email",
                        "new-personal-email",
                        "new-other-email",]
    var incomingVars = {}

    inputFields.forEach(function(inputField){
      var fieldValue = $("input#" + inputField).val();
      $("input#" + inputField).val();
      incomingVars[inputField] = fieldValue;
    });

    var newContact = new Contact(incomingVars["new-first-name"],
                                 incomingVars["new-last-name"],
                                 incomingVars["new-phone-number"],
                                 incomingVars["new-email"],
                                 incomingVars["new-address"]);
    var newContactAdresses = new contactAddresses(incomingVars["new-work-email"],
                                                  incomingVars["new-personal-email"],
                                                  incomingVars["new-other-email"])
    newContact.emails = newContactAdresses
    addressBook.addContact(newContact);
    addressBook.addEmail(newContactAdresses);
    displayContactDetails(addressBook);
  });
});
