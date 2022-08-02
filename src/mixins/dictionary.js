import { mapGetters, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['dictionary']),
        ...mapGetters({
            getGearbox: 'getGearbox',
            getBodyType: 'getBodyType',
            getBrands: 'getBrands',
            getModels: 'getModels'
         
        })
    },
    methods: {
        ...mapActions({
            fetchBrands: 'fetchBrands',
            fetchModels: 'fetchModels'
            
        })
    },
}