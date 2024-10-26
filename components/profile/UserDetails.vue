<template>
  <div>
    <div class="text-h6 font-weight-bold">اطلاعات حساب کاربری شما</div>
    <v-divider color="orange" :opacity="50" class="my-4"></v-divider>
    <div class="mt-10">
      <v-row class="ma-0">
        <v-col cols="12" lg="6">
          <v-card class="shadow-base border profile" rounded="lg">
            <template v-slot:title>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-icon color="orange" icon="mdi-account-outline" size="small"></v-icon>
                  <span class="mr-2 text-body-1">نام و نام خانوادگی</span>
                </div>
              </div>
            </template>
            <template v-slot:text>
              <v-skeleton-loader
                v-if="loading"
                height="24"
                type="text"
              ></v-skeleton-loader>
              <div class="text-medium-emphasis text-body-1" v-else>
                {{ fName && lName ? fName + " " + lName : "ثبت نشده" }}
              </div>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="shadow-base border profile" rounded="lg">
            <template v-slot:title>
              <div class="d-flex align-center">
                <div>
                  <v-icon color="orange" icon="mdi-phone-outline" size="small"></v-icon>
                  <span class="mr-2 text-body-1">شماره موبایل</span>
                </div>
              </div>
            </template>
            <template v-slot:text>
              <v-skeleton-loader
                v-if="loading"
                height="24"
                type="text"
              ></v-skeleton-loader>
              <div class="text-medium-emphasis text-body-1" v-else>{{ mobile }}</div>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="shadow-base border profile" rounded="lg">
            <template v-slot:title>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-icon color="orange" icon="mdi-calendar-range" size="small"></v-icon>
                  <span class="mr-2 text-body-1">تاریخ تولد</span>
                </div>
              </div>
            </template>
            <template v-slot:text>
              <v-skeleton-loader
                v-if="loading"
                height="24"
                type="text"
              ></v-skeleton-loader>
              <!-- <div class="text-medium-emphasis text-body-1" v-else>{{ day != null ? day + ' ' +
                monthsList[month -
                  1].title : 'ثبت نشده' }}
              </div> -->
              <div class="text-medium-emphasis text-body-1 birth-holder" v-else>
                {{ birth ? birth : "ثبت نشده" }}
                <!-- <span v-if="birth">{{ birth }}</span>
                <span v-else>ثبت نشده</span> -->
              </div>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="!loading && !complete">
          <v-btn
            @click="openEdit()"
            class="text-white"
            flat
            rounded="lg"
            prepend-icon="mdi-pencil"
            text="تکمیل اطلاعات"
            color="orange"
          ></v-btn>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="editDialog">
      <v-card width="500" class="mx-auto" rounded="lg" flat>
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div>
              <v-icon color="orange" class="ml-3" icon="mdi-pencil"></v-icon>
              <span>تکمیل اطلاعات</span>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                @click="editDialog = false"
                color="red-accent-4"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="نام"
                v-model="fName"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="نام خانوادگی"
                v-model="lName"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="شماره موبایل"
                disabled
                v-model="mobile"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                label="ماه تولد"
                rounded="lg"
                hide-details
                item-title="title"
                item-value="id"
                v-model="month"
                :items="monthsList"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                label="روز تولد"
                rounded="lg"
                hide-details
                :items="daysList"
                v-model="day"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
          </v-row>
          <v-btn
            color="success"
            class="mt-10"
            text="ثبت تغییرات"
            size="x-large"
            flat
            rounded="lg"
            block
            @click="submitChanges()"
            :loading="updating"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>

    <v-bottom-sheet v-model="editSheet" fullscreen>
      <v-card flat>
        <template v-slot:title>
          <div class="d-flex align-center justify-space-between">
            <div>
              <v-icon color="orange" class="ml-3" icon="mdi-pencil"></v-icon>
              <span>تکمیل اطلاعات</span>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                @click="editSheet = false"
                color="red-accent-4"
              ></v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="نام"
                v-model="fName"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="نام خانوادگی"
                v-model="lName"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                rounded="lg"
                hide-details
                label="شماره موبایل"
                disabled
                v-model="mobile"
                variant="solo-filled"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                label="ماه تولد"
                rounded="lg"
                hide-details
                item-title="title"
                item-value="id"
                v-model="month"
                :items="monthsList"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                label="روز تولد"
                rounded="lg"
                hide-details
                :items="daysList"
                v-model="day"
                variant="solo-filled"
                flat
              ></v-select>
            </v-col>
          </v-row>
          <v-btn
            color="success"
            class="mt-10"
            text="ثبت تغییرات"
            size="x-large"
            flat
            rounded="lg"
            block
            @click="submitChanges()"
            :loading="updating"
          ></v-btn>
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
    month() {
      this.daysList = [];
      this.day = null;

      if (this.month <= 6) {
        for (let i = 1; i <= 31; i++) {
          this.daysList.push(i);
        }
      } else {
        if (this.month == 12) {
          for (let i = 1; i <= 29; i++) {
            this.daysList.push(i);
          }
        } else {
          for (let i = 1; i <= 30; i++) {
            this.daysList.push(i);
          }
        }
      }
    },
  },
  data() {
    return {
      monthsList: [
        {
          id: 1,
          title: "فروردین",
        },
        {
          id: 2,
          title: "اردیبهشت",
        },
        {
          id: 3,
          title: "خرداد",
        },
        {
          id: 4,
          title: "تیر",
        },
        {
          id: 5,
          title: "مرداد",
        },
        {
          id: 6,
          title: "شهریور",
        },
        {
          id: 7,
          title: "مهر",
        },
        {
          id: 8,
          title: "آبان",
        },
        {
          id: 9,
          title: "آذر",
        },
        {
          id: 10,
          title: "دی",
        },
        {
          id: 11,
          title: "بهمن",
        },
        {
          id: 12,
          title: "اسفند",
        },
      ],
      daysList: [],
      loading: true,
      birth: null,
      editDialog: false,
      editSheet: false,
      fName: null,
      lName: null,
      mobile: null,
      day: null,
      month: null,
      updating: false,
      complete: false,
    };
  },
  methods: {
    getDetails() {
      $fetch(`${this.runtimeConfig.public.apiUrl}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          this.fName = response.user.fname;
          this.lName = response.user.lname;
          this.mobile = response.user.mobile;

          if (response.user.birth) {
            let date = response.user.birth.split("/");
            this.birth = date[1] + " " + this.monthsList[date[0] - 1].title;
            this.month = date[0];
            this.day = date[1];
          }

          this.complete = response.complete;
          this.loading = false;
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
            this.toast.error("خطا در ارتباط با سرور");
          }
          this.loading = false;
        });
    },
    openEdit() {
      if (this.loading) {
        return;
      }

      if (window.innerWidth >= 960) {
        this.editDialog = true;
      } else {
        this.editSheet = true;
      }
    },
    submitChanges() {
      if (this.updating) {
        return;
      }

      if (
        this.fName == null ||
        this.fName == "" ||
        this.lName == null ||
        this.lName == "" ||
        this.month == null ||
        this.month == "" ||
        this.day == null ||
        this.day == ""
      ) {
        this.toast.error("لطفا همه اطلاعات را وارد کنید");
        return;
      }

      this.updating = true;

      $fetch(`${this.runtimeConfig.public.apiUrl}/user/update-profile`, {
        method: "POST",
        body: {
          fname: this.fName,
          lname: this.lName,
          day: this.day,
          month: this.month,
        },
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          this.toast.success("اطلاعات شما ثبت شد");

          this.loading = true;
          this.getDetails();
          this.updating = false;
          this.editDialog = false;
          this.editSheet = false;
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
            this.toast.error("خطا در ارتباط با سرور");
          }

          this.updating = false;
        });
    },
  },
  mounted() {
    this.$router.push({
      path: "/profile",
      query: { page: "profile" },
    });

    this.getDetails();
  },
};
</script>

<style scoped></style>
