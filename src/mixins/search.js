import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getGarages: 'getGarages'
        })
    },
    methods: {
        ...mapActions({
            fetchGarages: 'fetchGarages',
        })
    },
}