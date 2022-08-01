import { mapGetters, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['garages','register','login', 'user', 'cities']),
        ...mapGetters({
            getGarages: 'getGarages',
            getChosenGarage: 'getChosenGarage',
            getToken: 'getToken',
            // getUserToken: 'getUserToken',
            getUserInfo: 'getUserInfo',
            getCities: 'getCities'
        })
    },
    methods: {
        ...mapActions({
            fetchGarages: 'fetchGarages',
            userRegister: 'userRegister',
            userLogin: 'userLogin',
            fetchUserInfo: 'fetchUserInfo',
            resetUserInfo: 'resetUserInfo',
            fetchCities: 'fetchCities'
         
        })
    },
}