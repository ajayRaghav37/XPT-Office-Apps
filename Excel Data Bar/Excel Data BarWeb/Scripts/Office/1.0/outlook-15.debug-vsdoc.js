
Office._context_mailbox_item_to_emailaddress = function () {
  ///<field name="email" type='String'>Gets the recipients of an email message.</field>
  this.email = {};
};


Office._$MailboxAppointment = function () {
  ///<field name="attachments" type='AttachmentDetails[]'>Gets a list of attachments to the appointment.</field>
  ///<field name="dateTimeCreated" type='Date'>Gets the date and time that an appointment was created.</field>
  ///<field name="dateTimeModified" type='Date'>Gets the date and time that the appointment was last modified.</field>
  ///<field name="itemClass" type='String'>Gets the item class of an item.</field>
  ///<field name="itemId" type="String">Gets the Exchange Web Services (EWS) item identifier for an item.</field>
  ///<field name="itemType" type='Office.MailboxEnums.ItemType'>Gets the type of item that an instance represents.</field>

  ///<field name="normalizedSubject" type='String'>Gets the subject of the appointment, with standard prefixes removed.</field>
  ///<field name="subject" type='String'>Gets the subject of the appointment.</field>

  ///<field name="end" type='Date'>Gets the date and time that the appointment is to end.</field>
  ///<field name="location" type='String'>Gets the location of an appointment.</field>
  ///<field name="optionalAttendees" type='EmailAddressDetails[]'>Gets a list of email addresses for optional attendees.</field>
  ///<field name="organizer" type="EmailAddressDetails">Gets the email address of the meeting organizer for the specified meeting.</field>
  ///<field name="requiredAttendees" type='EmailAddressDetails[]'>Gets a list of email addresses for required attendees.</field>
  ///<field name="resources" type='EmailAddressDetails[]'>Gets the resources required for an appointment.</field>
  ///<field name="start" type='Date'>Gets the date and time that the appointment is to begin.</field>

  this.loadCustomPropertiesAsync = function (callback, userContext) {
    ///<summary>Asynchronously loads custom properties that are specific to the item and a mail app for Outlook.</summary>
    ///<param name="callback" type="Function">The method to call when the asynchronous load is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>

    var result = new Office._Mailbox_AsyncResult("loadCustomPropertiesAsync");
    callback(result);
  };

  this.displayReplyAllForm = function (htmlBody) {
    ///<summary>Display a form for creating an email reply to all recipients.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.displayReplyForm = function (htmlBody) {
    ///<summary>Display a form for creating an email reply to the sender.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.getEntities = function () {
    ///<summary>Gets an array of entities found in an item.</summary>
    return (new Office._context_mailbox_item_entities());
  };

  this.getEntitiesByType = function (entityType) {
    ///<summary>Gets an array of entities of the specified entity type found in an item.</summary>
    ///<param name="entityType" type="Office.MailboxEnums.EntityType">One of the EntityType enumeration values.</param>
    if (entityType == Office.MailboxEnums.EntityType.Address) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.Contact) {
      return (new Array(new Office._context_mailbox_item_contact()));
    }

    if (entityType == Office.MailboxEnums.EntityType.EmailAddress) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.MeetingSuggestion) {
      return (new Array(new Office._context_mailbox_item_meetingSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.PhoneNumber) {
      return (new Array(new Office._context_mailbox_item_phoneNumber()));
    }

    if (entityType == Office.MailboxEnums.EntityType.TaskSuggestion) {
      return (new Array(new Office._context_mailbox_item_taskSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.Url) {
      return (new Array(""));
    }
  };

  this.getFilteredEntitiesByName = function (name) {
    ///<summary>Returns well-known enitities that pass the named filter defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the filter defined in the manifest XML file.</param>
    return (new Array(Office._context_mailbox_item_entities()));
  };

  this.getRegExMatches = function () {
    ///<summary>Returns string values that match the regular expressions defined in the manifest XML file.</summary>
    return (new Array(""));
  };

  this.getRegExMatchesByName = function (name) {
    ///<summary>Returns string values that match the named regular expression defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the regular expression defined in the manifest XML file.</param>
    return (new Array(""));
  };

  this.attachments = new Array(new Office._context_mailbox_item_attachmentDetails());

  this.dateTimeCreated = {};
  this.dateTimeModified = {};
  this.itemClass = {};
  this.itemId = {};
  this.itemType = new Office._MailboxEnums_ItemType();

  this.normalizedSubject = {};
  this.subject = {};

  this.end = {};
  this.location = {};
  this.optionalAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.requiredAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.organizer = new Office._context_mailbox_item_emailAddressDetails();
  this.resources = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.start = {};
};

Office._context_mailbox_item_attachmentDetails = function () {
  ///<field name="id" type='String'>Gets the EWS attachment identifier.</field>
  ///<field name="name" type='String'>Get the name of the attachment.</field>
  ///<field name="contentType" type='String'>Gets the MIME content type of the attachment.</field>
  ///<field name="size" type='int'>The size of the attachment in bytes.</field>
  ///<field name="attachmentType" type='Office.MailboxEnums.AttachmentType'>One of the AttachmentType enumeration values.</field>
  ///<field name="isInline" type='bool'>true if the attachment is inline in the body of the item; otherwise, false.</field>
  this.id = new {};
  this.name = new {};
  this.contentType = new {};
  this.size = new {};
  this.attachmentType = new {};
  this.isInline = new {};
}

Office._context_mailbox_item_contact = function () {
  ///<field name="addresses" type='String[]'>Gets the mailing and street addresses associated with a contact.</field>
  ///<field name="businessName" type='String'>Gets the name of the business associated with a contact.</field>
  ///<field name="emailAddresses" type='String[]'>Gets the SMTP email addresses associated with a contact.</field>
  ///<field name="personName" type='String'>Gets the name of the person associated with a contact.</field>
  ///<field name="phoneNumbers" type='PhoneNumber[]'>Gets the phone numbers associated with a contact.</field>
  ///<field name="urls" type='String[]'>Get the list of Internet URLs associated with a contact.</field>
  this.addresses = new Array("");
  this.businessName = {};
  this.emailAddresses = new Array("");
  this.personName = {};
  this.phoneNumbers = new Array(new Office._context_mailbox_item_phoneNumber());
  this.urls = new Array("");
};

Office._context_mailbox_item_customProperties = function () {
  this.get = function (name) {
    ///<summary>Gets the value of the specicifed custom property.</summary>
    ///<param name="name" type="String">The name of the custom property to be returned.</param>
  }

  this.remove = function (name) {
    ///<summary>Removes the specicifed custom property.</summary>
    ///<param name="name" type="String">The name of the custom property to be removed.</param>
  }

  this.saveAsync = function (callback, userContext) {
    ///<summary>Saves item-specific custom properties to the Exchange server.</summary>
    ///<param name="callback" type="String">The method to call when an asynchronous call is complete.</param>
    ///<param name="userContext" type="Object">Any state data that is passed to the callback method.</param>
  }

  this.set = function (name, value) {
    ///<summary>Sets the value of the specicifed custom property.</summary>
    ///<param name="name" type="String">The name of the custom property to be set.</param>
    ///<param name="value" type="Object">The value of the custom property to be set.
  }
}

Office._context_mailbox_item_emailAddressDetails = function () {
  ///<field name="appointmentResponse" type="Office.MailboxEnums.ResponseType">One of the ResponseType enumeration values.</field>
  this.appointmentResponse = {};
  ///<field name="displayName" type="String">Gets the display name associated with the email address.</field>
  this.displayName = {};
  ///<field name="emailAddress" type="String">Gets the SMTP email address.</field>
  this.emailAddress = {};
  ///<field name="recipientType" type="Office.MailboxEnums.RecipientType">One of the RecipientType enumeration values.</field>
  this.recipientType = {};
};

Office._context_mailbox_item_emailUser = function () {
  ///<field name="name" type="String">Gets the name associated with an email account.</field>
  this.name = {};
  ///<field name="userId" type="String">Gets the SMTP email address of the email account.</field>
  this.userId = {};
};

Office._context_mailbox_item_entities = function () {
  ///<field name="addresses" type='Array'>Gets the physical addresses (street or mailing address) found in an email message or appointment.</field>
  ///<field name="contacts" type='Array'>Gets the contacts found in an email message or appointment.</field>
  ///<field name="emailAddresses" type='Array'>Gets the email addresses found in an email message or appointment.</field>
  ///<field name="meetingSuggestions" type='Array'>Gets the meeting suggestions found in an email message or appointment.</field>
  ///<field name="phoneNumbers" type='Array'>Gets the phone numbers found in an email message or appointment.</field>
  ///<field name="taskSuggestions" type='Array'>Gets the task suggestions found in an email message or appointment.</field>
  ///<field name="urls" type='Array'>Gets the Internet URLs found in an email message or appointment.</field>
  this.addresses = new Array("");
  this.contacts = new Array(new Office._context_mailbox_item_contact());
  this.emailAddresses = new Array("");
  this.meetingSuggestions = new Array(new Office._context_mailbox_item_meetingSuggestion());
  this.phoneNumbers = new Array(new Office._context_mailbox_item_phoneNumber());
  this.taskSuggestions = new Array(new Office._context_mailbox_item_taskSuggestion());
  this.urls = new Array("");
};

Office._context_mailbox_item = function () {
  ///<field name="attachments" type='AttachmentDetails[]'>(Message and Appointment) Gets a list of attachments to the item.</field>
  ///<field name="dateTimeCreated" type='Date'>(Message and Appointment) Gets the date and time that an item was created.</field>
  ///<field name="dateTimeModified" type='Date'>(Message and Appointment) Gets the date and time that the item was last modified.</field>
  ///<field name="itemClass" type='String'>(Message and Appointment) Gets the item class of an item.</field>
  ///<field name="itemId" type="String">(Message and Appointment) Gets the Exchange Web Services (EWS) item identifier for an item.</field>
  ///<field name="itemType" type='Office.MailboxEnums.ItemType'>(Message and Appointment) Gets the type of item that an instance represents.</field>

  ///<field name="normalizedSubject" type='String'>(Message and Appointment) Gets the subject of the item, with standard prefixes removed.</field>
  ///<field name="subject" type='String'>(Message and Appointment) Gets the subject of the item.</field>

  ///<field name="end" type='Date'>(Appointment Item) Gets the date and time that the appointment is to end.</field>
  ///<field name="location" type='String'>(Appointment Item) Gets the location of an appointment.</field>
  ///<field name="optionalAttendees" type='EmailAddressDetails[]'>(Appointment Item) Gets a list of email addresses for optional attendees.</field>
  ///<field name="organizer" type="EmailAddressDetails">(Appointment Item) Gets the email address of the meeting organizer for the specified meeting.</field>
  ///<field name="requiredAttendees" type='EmailAddressDetails[]'>(Appointment Item) Gets a list of email addresses for required attendees.</field>
  ///<field name="resources" type='EmailAddressDetails[]'>(Appointment Item) Gets the resources required for an appointment.</field>
  ///<field name="start" type='Date'>(Appointment Item) Gets the date and time that the appointment is to begin.</field>

  ///<field name="cc" type='EmailAddressDetails[]'>(Message Item) Gets the carbon-copy (Cc) recipients of a message.</field>
  ///<field name="conversationId" type='String'>(Message Item) Gets an identifier for the email conversation that contains a particular message.</field>
  ///<field name="from" type='EmailAddressDetails'>(Message Item) Gets the email address of the sender of a message.</field>
  ///<field name="internetMessageId" type='String'>(Message Item) Gets the Internet message identifier for an email message.</field>
  ///<field name="sender" type='EmailAddressDetails'>(Message) Gets the email address of the sender of an email message.</field>
  ///<field name="to" type='EmailAddressDetails[]'>(Message Item) Gets the list of recipients of an email message.</field>


  this.loadCustomPropertiesAsync = function (callback, userContext) {
    ///<summary>(Message and Appointment) Asynchronously loads custom properties that are specific to the item and a mail app for Outlook.</summary>
    ///<param name="callback" type="Function">The method to call when the asynchronous load is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>

    var result = new Office._Mailbox_AsyncResult("loadCustomPropertiesAsync");
    callback(result);
  };

  this.displayReplyAllForm = function (htmlBody) {
    ///<summary>(Message and Appointment) Display a form for creating an email reply to all recipients.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.displayReplyForm = function (htmlBody) {
    ///<summary>(Message and Appointment) Display a form for creating an email reply to the sender.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.getEntities = function () {
    ///<summary>(Message and Appointment) Gets an array of entities found in an item.</summary>
    return (new Office._context_mailbox_item_entities());
  };

  this.getEntitiesByType = function (entityType) {
    ///<summary>(Message and Appointment) Gets an array of entities of the specified entity type found in an item.</summary>
    ///<param name="entityType" type="Office.MailboxEnums.EntityType">One of the EntityType enumeration values.</param>
    if (entityType == Office.MailboxEnums.EntityType.Address) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.Contact) {
      return (new Array(new Office._context_mailbox_item_contact()));
    }

    if (entityType == Office.MailboxEnums.EntityType.EmailAddress) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.MeetingSuggestion) {
      return (new Array(new Office._context_mailbox_item_meetingSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.PhoneNumber) {
      return (new Array(new Office._context_mailbox_item_phoneNumber()));
    }

    if (entityType == Office.MailboxEnums.EntityType.TaskSuggestion) {
      return (new Array(new Office._context_mailbox_item_taskSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.Url) {
      return (new Array(""));
    }
  };

  this.getFilteredEntitiesByName = function (name) {
    ///<summary>(Message and Appointment) Returns well-known enitities that pass the named filter defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the filter defined in the manifest XML file.</param>
    return (new Array(Office._context_mailbox_item_entities()));
  };

  this.getRegExMatches = function () {
    ///<summary>(Message and Appointment) Returns string values that match the regular expressions defined in the manifest XML file.</summary>
    return (new Array(""));
  };

  this.getRegExMatchesByName = function (name) {
    ///<summary>(Message and Appointment) Returns string values that match the named regular expression defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the regular expression defined in the manifest XML file.</param>
    return (new Array(""));
  };

  this.attachments = new Array(new Office._context_mailbox_item_attachmentDetails());

  this.dateTimeCreated = {};
  this.dateTimeModified = {};
  this.itemClass = {};
  this.itemId = {};
  this.itemType = new Office._MailboxEnums_ItemType();

  this.normalizedSubject = {};
  this.subject = {};

  this.end = {};
  this.location = {};
  this.optionalAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.requiredAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.organizer = new Office._context_mailbox_item_emailAddressDetails();
  this.resources = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.start = {};

  this.cc = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.conversationId = {};
  this.from = new Office._context_mailbox_item_emailAddressDetails();
  this.internetMessageId = {};
  this.sender = new Office._context_mailbox_item_emailAddressDetails();
  this.to = new Array(new Office._context_mailbox_item_emailAddressDetails());
}

Office._context_mailbox_item_meetingRequest = function () {
  ///<field name="end" type='Date'>Gets the date and time that a meeting is to end.</field>
  ///<field name="location" type='String'>Gets the location of the proposed meeting.</field>
  ///<field name="optionalAttendees" type='EmailAddressDetails[]'>Gets a list of the optional attendees for the meeting.</field>
  ///<field name="requiredAttendees" type='EmailAddressDetails[]'>Gets the required attendees for the meeting.</field>
  ///<field name="resources" type='String'>Gets a list of the resources required for the meeting.</field>
  ///<field name="start" type='Date'>Gets the date and time that the meeting is to begin.</field>
  this.end = new Date;
  this.location = {};
  this.optionalAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.requiredAttendees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.resources = new Array("");
  this.start = new Date();
}

Office._context_mailbox_item_meetingSuggestion = function () {
  ///<field name="attendees" type='EmailAddressDetails[]'>Gets the attendees for a suggested meeting.</field>
  ///<field name="end" type='Date'>Gets the date and time that a suggested meeting is to end.</field>
  ///<field name="location" type='String'>Gets the location of a suggested meeting.</field>
  ///<field name="meetingString" type='String'>Gets a string that was identified as a meeting suggestion.</field>
  ///<field name="start" type='Date'>Gets the date and time that a suggested meeting is to begin.</field>
  ///<field name="subject" type='String'>Gets the subject of a suggested meeting.</field>
  this.attendees = new Array(new Office._Context_mailbox_item_emailAddressDetails());
  this.end = new Date();
  this.location = {};
  this.meetingString = {};
  this.start = new Date();
  this.subject = {};
};


Office._$MailboxMessage = function () {
  ///<field name="attachments" type='AttachmentDetails[]'>Gets a list of attachments to the message.</field>
  ///<field name="dateTimeCreated" type='Date'>Gets the date and time that an message was created.</field>
  ///<field name="dateTimeModified" type='Date'>Gets the date and time that the message was last modified.</field>
  ///<field name="itemClass" type='String'>Gets the item class of an item.</field>
  ///<field name="itemId" type="String">Gets the Exchange Web Services (EWS) item identifier for an item.</field>
  ///<field name="itemType" type='Office.MailboxEnums.ItemType'>Gets the type of item that an instance represents.</field>

  ///<field name="normalizedSubject" type='String'>Gets the subject of the message, with standard prefixes removed.</field>
  ///<field name="subject" type='String'>Gets the subject of the message.</field>

  ///<field name="cc" type='EmailAddressDetails[]'>Gets the carbon-copy (Cc) recipients of a message.</field>
  ///<field name="conversationId" type='String'>Gets an identifier for the email conversation that contains a particular message.</field>
  ///<field name="from" type='EmailAddressDetails'>Gets the email address of the sender of a message.</field>
  ///<field name="internetMessageId" type='String'>Gets the Internet message identifier for an email message.</field>
  ///<field name="sender" type='EmailAddressDetails'>Gets the email address of the sender of an email message.</field>
  ///<field name="to" type='EmailAddressDetails[]'>Gets the list of recipients of an email message.</field>


  this.loadCustomPropertiesAsync = function (callback, userContext) {
    ///<summary>Asynchronously loads custom properties that are specific to the item and a mail app for Outlook.</summary>
    ///<param name="callback" type="Function">The method to call when the asynchronous load is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>

    var result = new Office._Mailbox_AsyncResult("loadCustomPropertiesAsync");
    callback(result);
  };

  this.displayReplyAllForm = function (htmlBody) {
    ///<summary>Display a form for creating an email reply to all recipients.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.displayReplyForm = function (htmlBody) {
    ///<summary>Display a form for creating an email reply to the sender.</summary>
    ///<param> name="htmlBody" type="String">The HTML contents of the email reply.</param>
  };

  this.getEntities = function () {
    ///<summary>Gets an array of entities found in an item.</summary>
    return (new Office._context_mailbox_item_entities());
  };

  this.getEntitiesByType = function (entityType) {
    ///<summary>Gets an array of entities of the specified entity type found in an item.</summary>
    ///<param name="entityType" type="Office.MailboxEnums.EntityType">One of the EntityType enumeration values.</param>
    if (entityType == Office.MailboxEnums.EntityType.Address) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.Contact) {
      return (new Array(new Office._context_mailbox_item_contact()));
    }

    if (entityType == Office.MailboxEnums.EntityType.EmailAddress) {
      return (new Array(""));
    }

    if (entityType == Office.MailboxEnums.EntityType.MeetingSuggestion) {
      return (new Array(new Office._context_mailbox_item_meetingSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.PhoneNumber) {
      return (new Array(new Office._context_mailbox_item_phoneNumber()));
    }

    if (entityType == Office.MailboxEnums.EntityType.TaskSuggestion) {
      return (new Array(new Office._context_mailbox_item_taskSuggestion()));
    }

    if (entityType == Office.MailboxEnums.EntityType.Url) {
      return (new Array(""));
    }
  };

  this.getFilteredEntitiesByName = function (name) {
    ///<summary>Returns well-known enitities that pass the named filter defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the filter defined in the manifest XML file.</param>
    return (new Array(Office._context_mailbox_item_entities()));
  };

  this.getRegExMatches = function () {
    ///<summary>Returns string values that match the regular expressions defined in the manifest XML file.</summary>
    return (new Array(""));
  };

  this.getRegExMatchesByName = function (name) {
    ///<summary>Returns string values that match the named regular expression defined in the manifest XML file.</summary>
    ///<param name="name" type="String">The name of the regular expression defined in the manifest XML file.</param>
    return (new Array(""));
  };

  this.attachments = new Array(new Office._context_mailbox_item_attachmentDetails());

  this.dateTimeCreated = {};
  this.dateTimeModified = {};
  this.itemClass = {};
  this.itemId = {};
  this.itemType = new Office._MailboxEnums_ItemType();

  this.normalizedSubject = {};
  this.subject = {};

  this.cc = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.conversationId = {};
  this.from = new Office._context_mailbox_item_emailAddressDetails();
  this.internetMessageId = {};
  this.sender = new Office._context_mailbox_item_emailAddressDetails();
  this.to = new Array(new Office._context_mailbox_item_emailAddressDetails());

};

Office._context_mailbox_item_phoneNumber = function () {
  ///<field name="originalPhoneString" type='String'>Gets the text that was identified in an item as a phone number.</field>
  ///<field name="phoneString" type='String'>Gets a text string identified as a phone number.</field>
  ///<field name="type" type='String'>Gets the type of a phone number.</field>
  this.originalPhoneString = {};
  this.phoneString = {};
  this.type = {};
};

Office._context_mailbox_item_taskSuggestion = function () {
  ///<field name="assignees" type='EmailAddressDetails[]'>Gets the users that should be assigned a suggested task.</field>
  ///<field name="taskString" type='String'>Gets the text of an item that was identified as a task suggestion.</field>
  this.assignees = new Array(new Office._context_mailbox_item_emailAddressDetails());
  this.taskString = {};
};

Office._context_mailbox_userProfile = function () {
  ///<field name="displayName" type='String'>Gets the user's display name.</field>
  ///<field name="emailAddress" type='String'>Gets the user's SMTP email address.</field>
  ///<field name="timeZone" type='String'>Gets the user's local time zone.</field>
  this.displayName = {};
  this.emailAddress = {};
  this.timeZone = {};
};

Office._context_mailbox = function () {
  ///<field name="ewsUrl" type='String'>Gets the URL of the Exchange Web Services (EWS) endpoint for this email account.</field>
  ///<field name="item" type="Item">Represents the current item (message or appointment).</field>
  ///<field name="userProfile" type="UserProfile">Represents the host application's user profile information.</field>
  ///<field name="diagnostics" type="Diagnostics">Provides troubleshooting capabilities for a mail app.</field>
  var instance = new Office._context_mailbox_item();

  this.diagnostics = new Office._context_mailbox_diagnostics();
  this.ewsUrl = {};
  this.item = intellisense.nullWithCompletionsOf(instance);
  this.userProfile = new Office._context_mailbox_userProfile();

  this.displayAppointmentForm = function (itemId) {
    ///<summary>Displays an existing calendar appointment.</summary>
    ///<param name="itemId" type="String">The Exchange Web Services (EWS) identifier for an existing calendar appointment.</param>
  };
  this.displayMessageForm = function (itemId) {
    ///<summary>Displays an existing message.</summary>
    ///<param name="itemId" type="String">The Exchange Web Services (EWS) identifier for an existing message.</param>
  };
  this.displayNewAppointmentForm = function (meetingRequest) {
    ///<summary>Display a form for creating a new calendar appointment.</summary>
    ///<param name="meetingRequest" type="Object">
    ///    Syntax example: {requiredAttendees:, optionalAttendees:, start:, end:, location:, resources:, subject:, body:, customProps:}
    /// &#10;      requiredAttendees: An array of strings containing the SMTP email addresses of the required attendees for the meeting. The array is limited to 100 entries.
    /// &#10;      optionalAttendees: An array of strings containing the SMTP email addresses of the optional attendees for the meeting. The array is limited to 100 entries.
    /// &#10;      start: The start date and time of the appointment.
    /// &#10;      end: The end date and time of the appointment.
    /// &#10;      location: A string containing the location of the appointment. Limited to 255 characters.
    /// &#10;      resources: An array of strings containing the resources required for the appointment. The array is limited to 100 entries.
    /// &#10;      subject: A string containing the subject of the appointment. Limited to 255 characters.
    /// &#10;      body: The body of the appointment message. Limited to 32 Kb.
    /// &#10;      customProps: A dictionary containing key/value pairs that will be stored with the appointment. Limited to 32 Kb.
    /// </param>
  };

  this.getCallbackTokenAsync = function (callback, userContext) {
    ///<summary>Gets a token that can be used to retrieve attachments for the current item.</summary>
    ///<param name="callback" type="function">The method to call when the asynchronous method is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>
    var result = new Office._Mailbox_AsyncResult("getCallbackTokenAsync");
    callback(result);
  }
  this.getUserIdentityTokenAsync = function (callback, userContext) {
    ///<summary>Gets a token identifying the user and the mail app for Outlook.</summary>
    ///<param name="callback" type="function">The method to call when the asynchronous load method is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>

    var result = new Office._Mailbox_AsyncResult("getUserIdentityTokenAsync");
    callback(result);
  };
  this.makeEwsRequestAsync = function (data, callback, userContext) {
    ///<summary>Gets a token identifying the user and the mail app for Outlook.</summary>
    ///<param name="data" type="String">Makes an asynchronous request to an Exchange Web Services (EWS) service on the Microsoft Exchange Server 2013 Preview that hosts the mail app for Outlook.</param>
    ///<param name="callback" type="function">The method to call when the asynchronous load method is complete.</param>
    ///<param name="userContext" type="Object" optional="true">Any state data that is passed to the asynchronous method.</param>

    var result = new Office._Mailbox_AsyncResult("makeEwsRequestAsync");
    callback(result);
  };
}

Office._context_mailbox_diagnostics = function () {
  ///<field name="hostName" type='String'>Gets a string containing the name of the host application for the mail app.</field>
  ///<field name="hostVersion" type='String'>Gets a string containing the version of either the host application or the Exchange server.</field>
  ///<field name="OWAView" type='String'>Gets a string containing the current view of the Outlook Web App.</field>
  this.hostName = {};
  this.hostVersion = {};
  this.OWAView = {};
}

Office._Mailbox_AsyncResult = function (method) {
  ///<field name="asyncContext" type='Object'>The userContext parameter passed to the callback function.</field>
  ///<field name="error" type='Object'>Any error that occured while processing the asynchronous request.</field>
  ///<field name="status" type='Object'>The status of the asynchronous request.</field>
  this.asyncContext = {};
  this.error = {};
  this.status = {};

  if (method == "getCallbackTokenAsync") {
    this.value = {};
    intellisense.annotate(this, {
      ///<field name="value" type='String'>The EWS callback token.</field>
      value: null
    });
  }

  if (method == "getUserIdentityTokenAsync") {
    this.value = {}
    intellisense.annotate(this, {
      ///<field name="value" type='String'>A JSON Web token that identifies the current user.</field>
      value: null
    });
  }

  if (method == "makeEwsRequestAsync") {
    this.value = {};
    intellisense.annotate(this, {
      ///<field name="value" type='String'>The XML response from the EWS operation.</field>
      value: null
    });
  }

  if (method == "loadCustomPropertiesAsync") {
    this.value = new Office._context_mailbox_item_customProperties();
    intellisense.annotate(this, {
      ///<field name="value" type='CustomProperties'>The custom properties</field>
      value: null
    });
  }
}

Office._MailboxEnums = function () {
  this.AttachmentType = {
    ///<field type="String">Specifies that the attachment is a file.</field>
    File: "file",
    ///<field type="String">Specifies that the attachment is an email message, appointment, or task.</field>
    Item: "item"
  };
  this.EntityType = {
    ///<field type="String">Specifies that the entity is a meeting suggestion.</field>
    MeetingSuggestion: "meetingSuggestion",
    ///<field type="String">Specifies that the entity is a task suggestion.</field>
    TaskSuggestion: "taskSuggestion",
    ///<field type="String">Specifies that the entity is a postal address.</field>
    Address: "address",
    ///<field type="String">Specifies that the entity is SMTP email address.</field>
    EmailAddress: "emailAddress",
    ///<field type="String">Specifies that the entity is an Internet URL.</field>
    Url: "url",
    ///<field type="String">Specifies that the entity is US phone number.</field>
    PhoneNumber: "phoneNumber",
    ///<field type="String">Specifies that the entity is a contact.</field>
    Contact: "contact"
  };
  this.ItemType = {
    ///<field type="String">Specifies a message item. This is an IPM.Note type.</field>
    Message: 'message',
    ///<field type="String">Specifies an appointment item. This is an IPM.Appointment type.</field>
    Appointment: 'appointment'
  };
  this.RecipientType = {
    ///<field type="String">Specifies that the recipient is not one of the other recipient types.</field>
    Other: "other",
    ///<field type="String">Specifies that the recipient is a distribution list containing a list of email addresses.</field>
    DistributionList: "distributionList",
    ///<field type="String">Specifies that the recipient is an SMTP email address that is on the Exchange server.</field>
    User: "user",
    ///<field type="String">Specifies that the recipient is an SMTP email address that is not on the Exchange server.</field>
    ExternalUser: "externalUser"
  };
  this.ResponseType = {
    ///<field type="String">Specifies that no response has been received.</field>
    None: "none",
    ///<field type="String">Specifies that you are the meeting organizer.</field>
    Organizer: "organizer",
    ///<field type="String">Specifies that the attendee is tentatively attending.</field>
    Tentative: "tentative",
    ///<field type="String">Specifies that the attendee is attending.</field>
    Accepted: "accepted",
    ///<field type="String">Specifies that the attendee is not attending.</field>
    Declined: "declined"
  };
};




