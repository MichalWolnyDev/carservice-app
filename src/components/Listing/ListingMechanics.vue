<template>
  <div class="listingMechanics shadow" v-if="employee">
    <p class="listingMechanics__title">
      {{ employee.firstName }} {{ employee.lastName }}
    </p>
    <div class="listingMechanics__wrap">
      <div class="listingMechanics__col">
        <table class="listingMechanics__table">
          <tr>
            <th>Imię:</th>
            <td>{{ employee.firstName }}</td>
          </tr>
          <tr>
            <th>Nazwisko:</th>
            <td>{{ employee.lastName }}</td>
          </tr>
          <tr>
            <th>Numer telefonu:</th>
            <td>{{ employee.phone }}</td>
          </tr>
          <tr>
            <th>Adres e-mail:</th>
            <td>{{ employee.email }}</td>
          </tr>
        </table>
        <br />
        <p>Pracuje w:</p>
        <ul>
          <li v-for="job in employee.garages" :key="job.id">
            {{ job.name }} - {{ job.address }}, {{ job.postCode }}
            {{ job.city.name }}
          </li>
        </ul>
        <br />
        <Button
          @click.native="
            layoff = !layoff;
            layoffData.mechanicEmail = employee.email;
          "
        >
          Zwolnij mechanika</Button
        >
        <br>
        <transition name="fade">
          <p class="listingMechanics__layoff-successmsg" v-if="success">
            Mechanik został zwolniony
          </p>
        </transition>
        <div class="listingMechanics__layoff" v-if="layoff">
          <CustomSelect
            :options="employee.garages"
            :default="'wybierz'"
            class="select"
            @input="layoffData.garageId = $event.id"
          >
            <template> Wybierz warsztat </template>
          </CustomSelect>
          <div
            class="listingMechanics__layoff-confirm"
            v-if="layoffData.garageId != null"
          >
            <Button :red="true" @click.native.prevent="deleteMechanic">
              Zwolnij!</Button
            >
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Inputs/Button.vue";
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import search from "@/mixins/search";

export default {
  name: "ListingMechanics",
  props: ["employee"],
  mixins: [search],
  components: {
    Button,
    CustomSelect,
  },
  data() {
    return {
      layoff: false,
      success: false,
      layoffData: {
        garageId: null,
        mechanicEmail: "",
      },
    };
  },
  methods: {
    async deleteMechanic() {
      const BASE_URL = process.env.VUE_APP_BASEURL;
      let token = localStorage.getItem("token");

      if (
        this.layoffData.garageId != null &&
        this.layoffData.mechanicEmail != ""
      ) {
        await this.$axios
          .delete(BASE_URL + "/mechanic", {
            headers: { Authorization: `Bearer ${token}` },
            data: {
              mechanicEmail: this.layoffData.mechanicEmail,
              garageId: this.layoffData.garageId,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.success = true;
              this.fetchEmployees();
              this.layoff = false;
            }

            var _this = this;
            setTimeout(function(){
              _this.success = false;
            }, 2000)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style lang="scss">
.listingMechanics {
  padding: 20px;
  margin: 20px 0;
  &__table {
    text-align: left;
  }
  th {
    font-weight: bold;
    padding-right: 10px;
  }

  &.shadow {
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
  }

  &__title {
    font-weight: 700;
    font-size: 1.3em;
    padding-bottom: 15px;
  }

  &__wrap {
    display: flex;

    @media (max-width: 960px) {
      display: block;
    }
  }

  &__layoff{
    &-successmsg {
      color: $green;
    }
  }

  &__col {
    flex: 1;
  }
}

.confirm {
  &__title {
    margin-bottom: 15px;
  }
  &__row {
    display: flex;
  }
  &__col {
    padding-right: 15px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>