import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getGarages: 'getGarages',
            getChosenGarage: 'getChosenGarage'
        })
    },
    methods: {
        ...mapActions({
            fetchGarages: 'fetchGarages',
         
        })
    },
}