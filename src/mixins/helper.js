export default {
  methods: {
    filterGarages(text) {
      text = text.toLowerCase();
      this.filteredCities = this.getCities.content.filter((e) =>
        e.name.toLowerCase().includes(text)
      );
    },
    dateFormat(date, onlydate) {
      var d = new Date(date);
      var dateToDisplay = '';
      if (onlydate) {
        dateToDisplay = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
      } else {
        dateToDisplay = d.toLocaleString();
      }

      return dateToDisplay;
    }
  },
  computed: {
    bookingStatus() {
      var recentDate;
      if (
        Array.isArray(this.booking.status) &&
        this.booking.status.length > 0
      ) {
        recentDate = this.booking.status.reduce((a, b) =>
          a.createdAt > b.createdAt ? a : b
        );
      }
      return recentDate;
    },
  },
}