import { mapGetters, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['garages','register','login', 'user', 'cities','userCars','userBookings']),
        ...mapGetters({
            getGarages: 'getGarages',
            getChosenGarage: 'getChosenGarage',
            getToken: 'getToken',
            getUserInfo: 'getUserInfo',
            getCities: 'getCities',
            getUserCars: 'getUserCars',
            getUserBookings: 'getUserBookings',
            getGarageAdded: 'getGarageAdded',
            getOwnedGarages: 'getOwnedGarages',
            getEmployees: 'getEmployees',
            getServiceBookings: 'getServiceBookings',
            getLoginError: 'getLoginError'
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
            fetchUserCars: 'fetchUserCars',
            fetchUserBookings: 'fetchUserBookings',
            addOwnedGarage: 'addOwnedGarage',
            garageAdded: 'garageAdded',
            fetchOwnedGarages: 'fetchOwnedGarages',
            fetchEmployees: 'fetchEmployees',
            fetchServiceBookings: 'fetchServiceBookings',
            changeBookingStatus: 'changeBookingStatus'
         
        })
    },
}