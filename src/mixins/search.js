import { mapGetters, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['garages','register','login', 'user']),
        ...mapGetters({
            getGarages: 'getGarages',
            getChosenGarage: 'getChosenGarage',
            getToken: 'getToken',
            getUserToken: 'getUserToken',
            getUserInfo: 'getUserInfo'
        })
    },
    methods: {
        ...mapActions({
            fetchGarages: 'fetchGarages',
            userRegister: 'userRegister',
            userLogin: 'userLogin',
            fetchUserInfo: 'fetchUserInfo',
            resetUserInfo: 'resetUserInfo'
         
        })
    },
}