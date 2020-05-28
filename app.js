new Vue({
  el: "#root",
  data: {
    event: {
      eventTitle: "A Guest List App",
      eventDate: "25th May, 2020",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique rerum, blanditiis sit eveniet obcaecati quos quae a vel corporis.",
      signUpText:
        "Add your <strong>name</strong> to the guest list for the <em>exclusive</em> offer",
    },
    nameText: "",
    guestName: [],
    formSubmitClass: "",
    appStyles: {
      marginTop: "2px",
      background: "steelblue",
      color: "white",
      padding: "20px",
    },
  },
  methods: {
    handleSubmit: function () {
      if ((this.nameText.length > 0) && (this.nameText.trim() !== ""))  {
        this.guestName.push(this.nameText);
        this.nameText = "";
        this.formSubmitClass = "submitted";
      }
    },
  },
});
