<template>
  <div>
    <div class="listingItem shadow">
      <p class="listingItem__title">Zlecenie nr.: {{ booking.id }}</p>
      <div class="listingItem__wrap">
        <div class="listingItem__col">
          <table class="listingItem__table">
            <th>Dane zgłoszenia:</th>
            <tr>
              <td>
                <strong> Data wizyty: </strong>
              </td>
              <td>
                {{ booking.date }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Marka i model: </strong>
              </td>
              <td>
                {{ booking.car.model.make.name }}
                {{ booking.car.model.name }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Rok produkcji: </strong>
              </td>
              <td>
                {{ booking.car.year }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Rodzaj paliwa: </strong>
              </td>
              <td>
                {{ booking.car.engine }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Skrzynia biegów: </strong>
              </td>
              <td>
                {{ booking.car.gearbox }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Typ nadwozia: </strong>
              </td>
              <td>
                {{ booking.car.bodyType }}
              </td>
            </tr>
          </table>
        </div>
        <div class="listingItem__col">
          <table class="listingItem__table">
            <th>Dane klienta:</th>
            <tr>
              <td>
                <strong> Imię i nazwisko: </strong>
              </td>
              <td>
                {{ booking.car.owner.firstName }}
                {{ booking.car.owner.lastName }}
              </td>
            </tr>
            <tr>
              <td>
                <strong> Nr. telefonu: </strong>
              </td>
              <td>
                <a :href="'tel:+48' + booking.car.owner.phone">
                  {{ booking.car.owner.phone }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong> Adres e-mail: </strong>
              </td>
              <td>
                <a :href="'mailto:' + booking.car.owner.email">
                  {{ booking.car.owner.email }}
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="" v-if="booking.message != ''">
        <br />
        <h3>Wiadomość od klienta:</h3>
        <p class="listingItem__clientmsg">
          {{ booking.message }}
        </p>
      </div>
      <div class="">
        <br />
        <h3>Status zlecenia:</h3>
        <p>
          <strong>
            {{ bookingStatus.label }}
          </strong>
          ->
          {{ dateFormat(bookingStatus.date) }}
        </p>
      </div>
      <div class="" v-if="bookingStatus.status != 'COMPLETED'">
        <br />
        <h3>Zmiana statusu:</h3>
        <div class="listingItem__statusselect">
          <CustomSelect
            :options="statusSelect"
            :default="'wybierz'"
            class="select"
            @input="selectedStatus = $event.status"
          >
          </CustomSelect>
        </div>
        <p class="listingItem__error" v-if="selectedError">Wybierz status!</p>
        <br />

        <Button :green="true" @click.native.prevent="changeStatus(booking.id)">
          Zapisz
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Button from "@/components/Inputs/Button.vue";
import search from "@/mixins/search";
import helper from "@/mixins/helper";
import { mapActions } from "vuex";

export default {
  name: "BookingService",
  props: ["booking"],
  mixins: [search, helper],
  data() {
    return {
      selectedStatus: "",
      selectedError: false,
      statusSelect: [
        {
          status: "WAITING_FOR_ACCEPT",
          name: "Oczekuje na rozpatrzenie",
        },
        {
          status: "ACCEPTED",
          name: "Zaakceptowano zlecenie",
        },
        {
          status: "REPAIRING",
          name: "Zlecenie w trakcie realizacji",
        },
        {
          status: "WAITING_FOR_PICKUP",
          name: "Oczekuje na odbiór",
        },
        {
          status: "COMPLETED",
          name: "Zakończono",
        },
        {
          status: "CANCELED",
          name: "Odrzucone",
        },
      ],
    };
  },
  components: {
    Button,
    CustomSelect,
  },
  

  methods: {
    changeStatus(id) {
      if (this.selectedStatus != "") {
        this.selectedError = false;

        this.changeBookingStatus({
          id: id,
          name: this.selectedStatus,
        });

        this.fetchServiceBookings(this.booking.garage.id);
      } else {
        this.selectedError = true;
      }
    },
    ...mapActions({
      changeBookingStatus: "changeBookingStatus",
    }),
  },
};
</script>
<style lang="scss">
.listingItem {
  padding: 20px;
  margin: 20px 0;

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

  &__col {
    flex: 1;
  }

  &__table {
    th {
      font-size: 1.3rem;
      padding-bottom: 20px;
    }
  }

  &__statusselect {
    width: 300px;
    max-width: 100%;
  }

  &__error {
    color: $redError;
    font-weight: 600;
  }

  &__clientmsg{
    word-break: break-all;
  }
}
</style>