let vm1 = new Vue({
  el: "#root",
  data: {
    event: {
      eventTitle: "Summer Festival!",
      eventDate: "25th May, 2020",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique rerum, blanditiis sit eveniet obcaecati quos quae a vel corporis.",
      signUpText:
        "Add your <strong>name</strong> to the guest list for the <em>exclusive</em> offer",
    },
    nameText: "",
    guestName: [],
    formSubmitClass: "",
    eventCapacity: 25,
    eventCapacityPercentage: 0,
    appStyles: {
      marginTop: "2px",
      background: "steelblue",
      color: "white",
      padding: "20px",
    },
  },
  methods: {
    handleSubmit: function () {
      if (
        this.nameText.length > 0 &&
        this.nameText.trim() !== "" &&
        this.eventCapacityPercentage < 100
      ) {
        this.guestName.push(this.nameText);
        this.nameText = "";
        this.formSubmitClass = "submitted";
        this.eventCapacityPercentage =
          (this.guestName.length * 100) / this.eventCapacity;
      }
    },
    changeName: function () {
      this.$refs.name.hidden = true;
      console.log(this.$refs);
    },
  },
  computed: {
    sortName: function () {
      return this.guestName.sort();
    },
  },
  filters: {
    toUpper: function (val) {
      return val.toUpperCase();
    },
    formatName: function (val) {
      return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase();
    },
  },
  beforeCreate: function () {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
  },
  beforeMount: function () {
    console.log("beforeMount");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate");
  },
  updated: function () {
    console.log("updated");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy");
  },
  destroyed: function () {
    console.log("destroyed");
  },
});

let vm2 = new Vue({
  el: "#navigation",
  data: {
    appTitle: "A Guest List App By Vue.js",
    navLinks: [
      { name: "Home", id: 1, url: "https://www.google.com" },
      { name: "Upcoming Events", id: 2, url: "https://www.amazon.com" },
      { name: "Guests Benefits", id: 3, url: "https://www.ebay.com" },
      { name: "Latest News", id: 4, url: "https://www.facebook.com" },
    ],
  },
  methods: {
    capacityChanged: function () {
      vm1.eventCapacity = 15;
    },
  },
});

// let vm3 = new Vue({
//   template: "<div class='col-sm-12 text-center'>" +
//               "<h2>New Title for VM3</h2>" +
//             "</div>"
// });

// vm3.$mount("#navigation");
// console.log(vm1.$el);
