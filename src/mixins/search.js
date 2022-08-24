import { mapGetters, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['garages','register','login', 'user', 'cities','userCars']),
        ...mapGetters({
            getGarages: 'getGarages',
            getChosenGarage: 'getChosenGarage',
            getToken: 'getToken',
            // getUserToken: 'getUserToken',
            getUserInfo: 'getUserInfo',
            getCities: 'getCities',
            getUserCars: 'getUserCars'
        })
    },
    methods: {
        ...mapActions({
            fetchGarages: 'fetchGarages',
            userRegister: 'userRegister',
            userLogin: 'userLogin',
            fetchUserInfo: 'fetchUserInfo',
            resetUserInfo: 'resetUserInfo',
            fetchCities: 'fetchCities',
            setParam: 'setParam',
            resetParams: 'resetParams',
            fetchUserCars: 'fetchUserCars'
         
        })
    },
}