export default {
    methods: {
        filterGarages(text) {
            text = text.toLowerCase();
            this.filteredCities = this.getCities.content.filter((e) =>
              e.name.toLowerCase().includes(text)
            );
          },
    }
}