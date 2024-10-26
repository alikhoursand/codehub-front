<template>
  <div>
    <div class="text-h6 font-weight-bold">اطلاعات حساب کاربری شما</div>
    <v-divider color="orange" :opacity="50" class="my-4"></v-divider>
    <div class="mt-5">
      <div v-if="loading">
        <v-card class="shadow-base address border mt-5" rounded="lg">
          <template v-slot:text>
            <v-row class="ma-0">
              <v-col cols="12">
                <div class="text-medium-emphasis text-body-1">آدرس:</div>
                <v-skeleton-loader type="text@3"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">تحویل گیرنده:</div>
                <v-skeleton-loader width="150" type="text"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">شماره تماس گیرنده:</div>
                <v-skeleton-loader width="150" type="text"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">استان:</div>
                <v-skeleton-loader width="150" type="text"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">شهر:</div>
                <v-skeleton-loader width="150" type="text"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">کدپستی:</div>
                <v-skeleton-loader width="150" type="text"></v-skeleton-loader>
              </v-col>
            </v-row>
          </template>
        </v-card>
      </div>
      <div v-else>
        <v-card
          v-for="address in addresses"
          :key="address.id"
          class="shadow-base border mt-5"
          rounded="lg"
        >
          <template v-slot:append>
            <v-icon
              icon="mdi-pencil"
              color="orange"
              @click="editAddress(address)"
            ></v-icon>
          </template>
          <template v-slot:text>
            <v-row class="ma-0">
              <v-col cols="12">
                <div class="text-medium-emphasis text-body-1">آدرس:</div>
                <div class="text-body-1 mt-2">{{ address.address }}</div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">تحویل گیرنده:</div>
                <div class="text-body-1 mt-2">
                  {{ address.fname + " " + address.lname }}
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">شماره تماس گیرنده:</div>
                <div class="text-body-1 mt-2">{{ address.mobile }}</div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">استان:</div>
                <div class="text-body-1 mt-2">{{ address.province.name }}</div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">شهر:</div>
                <div class="text-body-1 mt-2">{{ address.city.name }}</div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-medium-emphasis text-body-1">کدپستی:</div>
                <div class="text-body-1 mt-2">{{ address.postal_code }}</div>
              </v-col>
            </v-row>
          </template>
        </v-card>
      </div>

      <v-card
        v-if="addresses.length < 3"
        class="shadow-base border-md border-warning mt-5"
        @click="addAddressPop()"
        rounded="lg"
        variant="tonal"
        color="orange"
      >
        <template v-slot:text>
          <div class="d-flex justify-center align-center">
            <div class="text-center">
              <v-icon icon="mdi-map-marker-plus" color="orange" size="x-large"></v-icon>
              <div class="mt-3 font-weight-bold text-orange text-body-1">افزودن آدرس</div>
            </div>
          </div>
        </template>
      </v-card>
    </div>

    <v-dialog v-model="updateAddressDialog">
      <v-card rounded="lg" width="600" class="mx-auto">
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <div class="pl-2">
                <v-icon icon="mdi-pencil" color="orange"></v-icon>
              </div>
              <div>ویرایش آدرس</div>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                color="red-accent-4"
                @click="updateAddressDialog = false"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام"
                v-model="edit.fname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام خانوادگی"
                v-model="edit.lname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="شماره موبایل"
                rounded="lg"
                v-model="edit.phone"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="استان"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                v-model="edit.province"
                :items="provinces"
                :loading="provinceLoading"
                :disabled="provinceLoading"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="شهر"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                :loading="cityLoading"
                :disabled="cityLoading || provinceLoading || edit.province == null"
                :items="cities"
                v-model="edit.city"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="کد پستی"
                rounded="lg"
                v-model="edit.postalCode"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-1">
              <v-text-field
                label="آدرس"
                rounded="lg"
                v-model="edit.address"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-btn
                block
                color="success"
                text="ویرایش آدرس"
                :loading="updating"
                rounded="lg"
                flat
                size="x-large"
                @click="updateAddress()"
              ></v-btn>
            </v-col>
          </v-row>
        </template>
      </v-card>
    </v-dialog>
    <v-bottom-sheet fullscreen v-model="updateAddressSheet">
      <v-card>
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <div class="pl-2">
                <v-icon icon="mdi-map-marker-plus" color="orange"></v-icon>
              </div>
              <div>ویرایش آدرس</div>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                color="red-accent-4"
                @click="updateAddressSheet = false"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام"
                v-model="edit.fname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام خانوادگی"
                v-model="edit.lname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="شماره موبایل"
                rounded="lg"
                v-model="edit.phone"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="استان"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                v-model="edit.province"
                :items="provinces"
                :loading="provinceLoading"
                :disabled="provinceLoading"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="شهر"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                :loading="cityLoading"
                :disabled="cityLoading || provinceLoading || edit.province == null"
                :items="cities"
                v-model="edit.city"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="کد پستی"
                rounded="lg"
                v-model="edit.postalCode"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-1">
              <v-text-field
                label="آدرس"
                rounded="lg"
                v-model="edit.address"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-btn
                block
                color="success"
                text="ویرایش آدرس"
                :loading="updating"
                rounded="lg"
                flat
                size="x-large"
                @click="updateAddress()"
              ></v-btn>
            </v-col>
          </v-row>
        </template>
      </v-card>
    </v-bottom-sheet>

    <v-dialog v-model="addressDialog">
      <v-card rounded="lg" width="600" class="mx-auto">
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <div class="pl-2">
                <v-icon icon="mdi-map-marker-plus" color="orange"></v-icon>
              </div>
              <div>افزودن آدرس</div>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                color="red-accent-4"
                @click="addressDialog = false"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام"
                v-model="fname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام خانوادگی"
                v-model="lname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="شماره موبایل"
                rounded="lg"
                v-model="phone"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="استان"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                v-model="province"
                :items="provinces"
                :loading="provinceLoading"
                :disabled="provinceLoading"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="شهر"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                :loading="cityLoading"
                :disabled="cityLoading || provinceLoading || province == null"
                :items="cities"
                v-model="city"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="کد پستی"
                rounded="lg"
                v-model="postalCode"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-1">
              <v-text-field
                label="آدرس"
                rounded="lg"
                v-model="address"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-btn
                block
                color="success"
                text="ثبت آدرس"
                :loading="adding"
                rounded="lg"
                flat
                size="x-large"
                @click="submitAddress()"
              ></v-btn>
            </v-col>
          </v-row>
        </template>
      </v-card>
    </v-dialog>
    <v-bottom-sheet fullscreen v-model="addressSheet">
      <v-card>
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <div class="pl-2">
                <v-icon icon="mdi-map-marker-plus" color="orange"></v-icon>
              </div>
              <div>افزودن آدرس</div>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                color="red-accent-4"
                @click="addressSheet = false"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام"
                v-model="fname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="نام خانوادگی"
                v-model="lname"
                rounded="lg"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="شماره موبایل"
                rounded="lg"
                v-model="phone"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="استان"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                v-model="province"
                :items="provinces"
                :loading="provinceLoading"
                :disabled="provinceLoading"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-select
                label="شهر"
                :eager="true"
                :menu-props="{ eager: true }"
                rounded="lg"
                :loading="cityLoading"
                :disabled="cityLoading || provinceLoading || province == null"
                :items="cities"
                v-model="city"
                item-title="name"
                item-value="id"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                label="کد پستی"
                rounded="lg"
                v-model="postalCode"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-1">
              <v-text-field
                label="آدرس"
                rounded="lg"
                v-model="address"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-btn
                block
                color="success"
                text="ثبت آدرس"
                :loading="adding"
                rounded="lg"
                flat
                size="x-large"
                @click="submitAddress()"
              ></v-btn>
            </v-col>
          </v-row>
        </template>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const toast = useToast();
    return { toast, runtimeConfig };
  },
  watch: {
    province() {
      this.getCities();
      this.city = null;
    },
    "edit.province": {
      handler: function (after, before) {
        this.getCities(true);
        this.edit.city = null;
      },
      deep: true,
    },
    // edit: {
    //     province() {
    //         this.getCities(true);
    //         this.edit.city = null;
    //     }, deep: true, immediate: true
    // }
  },
  data() {
    return {
      loading: true,
      addresses: [],
      updateAddressDialog: false,
      updateAddressSheet: false,
      updating: false,
      addressDialog: false,
      addressSheet: false,
      city: null,
      province: null,
      provinceLoading: true,
      cityLoading: false,
      provinces: [],
      cities: [],
      fname: null,
      lname: null,
      phone: null,
      postalCode: null,
      address: null,
      adding: false,
      edit: {
        id: null,
        fname: null,
        lname: null,
        phone: null,
        postalCode: null,
        address: null,
        city: null,
        province: null,
      },
    };
  },
  mounted() {
    this.$router.push({
      path: "/profile",
      query: { page: "addresses" },
    });

    this.getProvinces();
    this.getAddresses();
  },
  methods: {
    editAddress(address) {
      if (this.provinceLoading == true) {
        return;
      }
      if (window.innerWidth >= 960) {
        this.updateAddressDialog = true;
      } else {
        this.updateAddressSheet = true;
      }

      this.edit.id = address.id;
      this.edit.fname = address.fname;
      this.edit.lname = address.lname;
      this.edit.phone = address.mobile;
      this.edit.postalCode = address.postal_code;
      this.edit.address = address.address;
      this.edit.province = address.province_id;
    },
    updateAddress() {
      if (this.updating) {
        return;
      }

      if (
        this.edit.fname == "" ||
        this.edit.fname == null ||
        this.edit.lname == "" ||
        this.edit.lname == null ||
        this.edit.phone == "" ||
        this.edit.phone == null ||
        this.edit.province == "" ||
        this.edit.province == null ||
        this.edit.city == "" ||
        this.edit.city == null ||
        this.edit.address == "" ||
        this.edit.address == null ||
        this.edit.postalCode == "" ||
        this.edit.postalCode == null
      ) {
        this.toast.error("لطفا اطلاعات را کامل وارد کنید");
        return;
      }

      this.updating = true;

      $fetch(`${this.runtimeConfig.public.apiUrl}/user/update-address`, {
        method: "POST",
        body: {
          id: this.edit.id,
          fname: this.edit.fname,
          lname: this.edit.lname,
          mobile: this.edit.phone,
          province_id: this.edit.province,
          city_id: this.edit.city,
          address: this.edit.address,
          postal_code: this.edit.postalCode,
        },
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          this.updateAddressDialog = false;
          this.updateAddressSheet = false;
          this.toast.success(response.message);
          this.updating = false;
          this.loading = true;
          this.getAddresses();
        })
        .catch((error) => {
          console.log(error.response._data.message);
          this.toast.error(error.response._data.message);
          this.updating = false;
        });
    },
    submitAddress() {
      if (this.adding) {
        return;
      }

      if (
        this.fname == "" ||
        this.fname == null ||
        this.lname == "" ||
        this.lname == null ||
        this.phone == "" ||
        this.phone == null ||
        this.province == "" ||
        this.province == null ||
        this.city == "" ||
        this.city == null ||
        this.address == "" ||
        this.address == null ||
        this.postalCode == "" ||
        this.postalCode == null
      ) {
        this.toast.error("لطفا اطلاعات را کامل وارد کنید");
        return;
      }

      this.adding = true;

      $fetch(`${this.runtimeConfig.public.apiUrl}/user/add-address`, {
        method: "POST",
        body: {
          fname: this.fname,
          lname: this.lname,
          mobile: this.phone,
          province_id: this.province,
          city_id: this.city,
          address: this.address,
          postal_code: this.postalCode,
        },
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          this.addressDialog = false;
          this.addressSheet = false;
          this.toast.success(response.message);
          this.adding = false;
          this.loading = true;
          this.getAddresses();
        })
        .catch((error) => {
          console.log(error.response._data.message);
          this.toast.error(error.response._data.message);
          this.adding = false;
        });
    },
    addAddressPop() {
      if (this.provinceLoading == true) {
        return;
      }
      if (window.innerWidth >= 960) {
        this.addressDialog = true;
      } else {
        this.addressSheet = true;
      }

      this.fname = null;
      this.lname = null;
      this.phone = null;
      this.postalCode = null;
      this.address = null;
      this.city = null;
      this.province = null;
    },
    getAddresses() {
      $fetch(`${this.runtimeConfig.public.apiUrl}/user/my-addresses`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          this.addresses = response;

          this.loading = false;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getCities(isEdit) {
      this.cityLoading = true;
      $fetch(
        `${this.runtimeConfig.public.apiUrl}/provinces/${
          isEdit ? this.edit.province : this.province
        }`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          this.cityLoading = false;

          this.cities = response;
        })
        .catch((error) => {
          if (error.response._data == "UnAuthenticated") {
            this.toast.error(
              "برای مشاهده سبد خرید باید ابتدا وارد شوید. در حال انتقال..."
            );
            setTimeout(() => {
              navigateTo("/auth");
            }, 3000);
          } else {
            this.cityLoading = false;

            this.toast.error("خطا در ارتباط با سرور، لطفا با پشتیبانی تماس بگیرید");
            console.log(error.response);
          }
        });
    },
    getProvinces() {
      $fetch(`${this.runtimeConfig.public.apiUrl}/provinces`, {
        method: "GET",
      })
        .then((response) => {
          this.provinces = response;
          this.provinceLoading = false;
        })
        .catch((error) => {
          if (error.response._data == "UnAuthenticated") {
            this.toast.error(
              "برای مشاهده سبد خرید باید ابتدا وارد شوید. در حال انتقال..."
            );
            setTimeout(() => {
              navigateTo("/auth");
            }, 3000);
          } else {
            this.toast.error("خطا در ارتباط با سرور، لطفا با پشتیبانی تماس بگیرید");
            console.log(error.response);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
