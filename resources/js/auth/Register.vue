<template>
<v-app>
  <div class="registration">
    <div class="registration__left-panel">
      <div class="registration__title">
        Register for free
      </div>

      <div class="registration__subtitle">
        Join SFC Canada's biggest event in 2022
      </div>
      
      <div class="registration__form mt-5">
        <ValidationObserver ref="observer">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|max:40|min:3"
          >
            <div>Name*</div>
            <v-text-field
              v-model="name"
              type="text"
              placeholder="Enter your name"
              outlined
              dense
              color="#344054"
              :error-messages="errors"
              class="registration__form--greyed mt-3"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
          >
            <div>Email*</div>
            <v-text-field
              v-model="email"
              type="email"
              placeholder="Enter your email"
              outlined
              dense
              color="#344054"
              :error-messages="errors"
              class="registration__form--greyed mt-3"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            rules="required|max:40|min:8"
          >
            <div>Password*</div>
            <v-text-field
              v-model="password"
              type="password"
              placeholder="Enter your password"
              outlined
              dense
              color="#344054"
              :error-messages="errors"
              class="registration__form--greyed mt-3"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            rules="required|max:40|min:3"
          >
            <div>Region*</div>
            <v-select
              v-model="region"
              :items="regions"
              placeholder="Choose your region"
              outlined
              dense
              color="#344054"
              :error-messages="errors"
              class="registration__form--greyed registration__form--selected mt-3"
            />
          </ValidationProvider>
        </ValidationObserver>

        <v-btn
          class="registration__submit-btn mt-3"
          color="#444CE7"
          height="60px"
          width="366px"
          depressed
          @click="onRegistrationSubmit"
        >
          Register
        </v-btn>
      </div>

      <div class="mt-5 text-center">
        Already registered for TNC 2022? Log in
      </div>
    </div>

    <div class="registration__right-panel">
      <div class="registration__right-panel-background"></div>
    </div>
  </div>
</v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider, validate } from 'vee-validate'

export default {
  name: 'Register',

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      regions: [
        'Atlantic',
        'Capital',
        'Central',
        'Mountain',
        'Pacific',
        'International'
      ]
    }
  },

  computed: {
    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('setName', value)
      }
    },

    email: {
      get () {
        return this.$store.state.email
      },
      set (value) {
        this.$store.commit('setEmail', value)
      }
    },

    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        this.$store.commit('setPassword', value)
      }
    },

    region: {
      get () {
        return this.$store.state.region
      },
      set (value) {
        this.$store.commit('setRegion', value)
      }
    }
  },

  methods: {
    onRegistrationSubmit () {
      console.log('Registration submitted')
    }
  }
}
</script>

<style scoped lang="scss">
.registration {
  line-height: 44px;
  display: flex;
  font-family: "Outfit", sans-serif;

  &__left-panel {
    margin: 20px auto;
  }

  &__title {
    font-size: 36px;
    font-weight: 500;
    color: #101828;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 400;
    color: #667085;
  }

  &__form {
    font-size: 18px;
    line-height: 28px;

    &--greyed {
      color: #667085;
    }

    ::v-deep .v-list-item__title {
      font-size: 18px;
    }

    ::v-deep .v-input {
      font-size: 18px;
    }
  }

  &__submit-btn {
    font-size: 18px !important;
    text-transform: none;
    color: #fff !important;
  }
}
</style>