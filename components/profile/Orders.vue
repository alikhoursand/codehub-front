<template>
  <div>
    <div class="text-h6 font-weight-bold">سفارشات شما</div>
    <v-divider color="orange" :opacity="50" class="my-4"></v-divider>
    <div>
      <div class="d-flex align-center mt-10">
        <div class="dot"></div>
        <div class="mr-5 section-title">سفارش فعال</div>
      </div>

      <v-card v-if="loading" class="shadow-base loading-order border mt-5" rounded="lg">
        <template v-slot:title>
          <div class="d-flex align-center pb-2">
            <v-skeleton-loader type="avatar" width="50" height="50"></v-skeleton-loader>
            <v-skeleton-loader type="heading" width="150"></v-skeleton-loader>
          </div>
        </template>
        <div class="pa-5 pt-0">
          <v-row class="ma-0 align-center">
            <v-col cols="12" lg="4">
              <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" lg="4">
              <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" lg="4">
              <div>
                <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-empty-state v-if="!loading && order == null" class="mt-5" title="سفارش فعالی وجود ندارد"
        text="از صفحه فروشگاه میتوانید محصولات مورد نظر خود را به سبد خرید اضافه کنید و ثبت سفارش انجام دهید">
        <template v-slot:actions>
          <nuxt-link to="/shop">
            <v-btn color="orange" rounded="lg" flat class="text-white">برو به فروشگاه</v-btn>
          </nuxt-link>
        </template>
      </v-empty-state>

      <v-card v-if="order != null && !loading" class="shadow-base border mt-5" rounded="lg">
        <template v-slot:append>
          <nuxt-link v-if="order.status == 1" to="/cart">
            <v-icon icon="mdi-chevron-left"></v-icon>
          </nuxt-link>
        </template>
        <template v-slot:title>
          <v-icon :color="order.status == 1 ? 'primary' : 'success'" icon="mdi-check-circle-outline"
            size="small"></v-icon>
          <span :class="[
            order.status == 1 ? 'text-primary' : 'text-success',
            ' mr-2 section-title font-weight-bold',
          ]">
            {{ order.status == 1 ? "در انتظار پرداخت" : "پرداخت شده" }}
          </span>
        </template>
        <div class="pa-5 pt-0">
          <v-row class="ma-0 align-center">
            <v-col cols="12" lg="4">
              <div>
                <span class="text-medium-emphasis">شماره سفارش : </span>
                <span>{{ order.id }}</span>#
              </div>
            </v-col>
            <v-col cols="12" lg="4">
              <div>
                <span class="text-medium-emphasis">تاریخ : </span>
                <span>{{
                  new Intl.DateTimeFormat("fa-IR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(order.created_at))
                }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4">
              <div>
                <span class="text-medium-emphasis">مبلغ کل : </span>
                <span class="ml-1 text-orange font-weight-bold section-title">
                  {{ order.cost.toLocaleString("fa-IR") }}
                </span>
                <span class="text-orange">تومان</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
    <div>
      <div class="d-flex align-center mt-15">
        <div class="dot"></div>
        <div class="mr-5 section-title">سفارشات</div>
      </div>

      <v-row class="ma-0 mt-5 align-center justify-space-between">
        <v-col cols="12" lg="3" sm="6">
          <v-btn rounded="lg" size="large" flat block :ripple="false">
            <template v-slot:prepend>
              <v-icon icon="mdi-shopping" color="blue"></v-icon>
            </template>
            <div style="width: 100px">فعلی</div>
            <template v-slot:append>
              <div class="rounded-lg bg-blue py-1 text-white px-3">
                <div v-if="loading">
                  <v-progress-circular color="white" :width="4" indeterminate :size="20"></v-progress-circular>
                </div>
                <div v-else>{{ orders.active }}</div>
              </div>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-btn rounded="lg" size="large" flat block :ripple="false">
            <template v-slot:prepend>
              <v-icon icon="mdi-hand-heart" color="success"></v-icon>
            </template>
            <div style="width: 100px">تحویل شده</div>
            <template v-slot:append>
              <div class="rounded-lg bg-success py-1 text-white px-3">
                <div v-if="loading">
                  <v-progress-circular color="white" :width="4" indeterminate :size="20"></v-progress-circular>
                </div>
                <div v-else>{{ orders.done }}</div>
              </div>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-btn rounded="lg" size="large" flat block :ripple="false">
            <template v-slot:prepend>
              <v-icon icon="mdi-alert-circle-outline" color="red-accent-4"></v-icon>
            </template>
            <div style="width: 100px">لغو شده</div>
            <template v-slot:append>
              <div class="rounded-lg bg-red-accent-4 py-1 text-white px-3">
                <div v-if="loading">
                  <v-progress-circular color="white" :width="4" indeterminate :size="20"></v-progress-circular>
                </div>
                <div v-else>{{ orders.failed }}</div>
              </div>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-btn rounded="lg" size="large" flat block :ripple="false">
            <template v-slot:prepend>
              <v-icon icon="mdi-arrow-u-left-top" color="warning"></v-icon>
            </template>
            <div style="width: 100px">مرجوع شده</div>
            <template v-slot:append>
              <div class="rounded-lg bg-warning py-1 text-white px-3">
                <div v-if="loading">
                  <v-progress-circular color="white" :width="4" indeterminate :size="20"></v-progress-circular>
                </div>
                <div v-else>{{ orders.returned }}</div>
              </div>
            </template>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="mt-10">
      <div v-if="loading">
        <v-card v-for="o in 3" :key="o" class="shadow-base loading-order border mt-5" rounded="lg">
          <template v-slot:title>
            <div class="d-flex align-center pb-2">
              <v-skeleton-loader type="avatar" width="50" height="50"></v-skeleton-loader>
              <v-skeleton-loader type="heading" width="150"></v-skeleton-loader>
            </div>
          </template>
          <div class="pa-5 pt-0">
            <v-row class="ma-0 align-center">
              <v-col cols="12" lg="4">
                <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" lg="4">
                <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
              </v-col>
              <v-col cols="12" lg="4">
                <div>
                  <v-skeleton-loader type="heading" height="28px"></v-skeleton-loader>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
      <div v-else>
        <v-card v-for="order in ordersList" :key="order" class="shadow-base border mt-5" rounded="lg">
          <template v-slot:append>
            <v-icon icon="mdi-chevron-left" v-if="order.status != 1" @click="viewOrder(order)"></v-icon>
          </template>

          <template v-slot:title>
            <v-icon v-if="order.status == 1" color="primary" icon="mdi-check-circle-outline" size="small"></v-icon>
            <v-icon v-if="order.status == 2 || order.status == 3" color="success" icon="mdi-check-circle-outline"
              size="small"></v-icon>
            <v-icon v-if="order.status == 4" color="red-accent-4" icon="mdi-check-circle-outline" size="small"></v-icon>
            <v-icon v-if="order.status == 5" color="warning" icon="mdi-check-circle-outline" size="small"></v-icon>
            <span v-if="order.status == 1" class="text-primary mr-2 section-title font-weight-bold">در انتظار
              پرداخت</span>
            <span v-if="order.status == 2" class="text-success mr-2 section-title font-weight-bold">پرداخت شده</span>
            <span v-if="order.status == 3" class="text-success mr-2 section-title font-weight-bold">تحویل شده</span>
            <span v-if="order.status == 4" class="text-red-accent-4 mr-2 section-title font-weight-bold">لغو شده</span>
            <span v-if="order.status == 5" class="text-warning mr-2 section-title font-weight-bold">مرجوع شده</span>
          </template>
          <div class="pa-5 pt-0">
            <v-row class="ma-0 align-center">
              <v-col cols="12" lg="4">
                <div>
                  <span class="text-medium-emphasis">شماره سفارش : </span>
                  <span>{{ order.id }}</span>#
                </div>
              </v-col>
              <v-col cols="12" lg="4">
                <div>
                  <span class="text-medium-emphasis">تاریخ : </span>
                  <span>{{
                    new Intl.DateTimeFormat("fa-IR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(order.created_at))
                  }}</span>
                </div>
              </v-col>
              <v-col cols="12" lg="4">
                <div>
                  <span class="text-medium-emphasis">مبلغ کل : </span>
                  <span class="ml-1 text-orange font-weight-bold section-title">
                    {{ order.cost.toLocaleString("fa-IR") }}
                  </span>
                  <span class="text-orange">تومان</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
    </div>
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
  data() {
    return {
      loading: true,
      order: null,
      hasOrder: false,
      orders: {
        active: 0,
        paid: 0,
        done: 0,
        failed: 0,
        returned: 0,
      },
      ordersList: [],
    };
  },
  mounted() {
    this.getOrders();
    this.$router.push({
      path: "/profile",
      query: { page: "orders" },
    });
  },
  methods: {
    // test() {
    //     this.$router.push({
    //         path: '/profile',
    //         query: { streamer: 'asd' },
    //     })
    // },
    viewOrder(order) {
      this.$emit("viewOrderDetails", order);
    },
    getOrders() {
      $fetch(`${this.runtimeConfig.public.apiUrl}/user/dashboard-orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${useCookie("token").value}`,
        },
      })
        .then((response) => {
          if (response.status != "empty") {
            this.order = response.order;
          }

          this.orders = response.orders;
          this.ordersList = response.orders_list;

          this.loading = false;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped>
.number-holder {
  width: 40px;
  height: 40px;
}

.section-title {
  font-size: 1.1rem;
}

.dot {
  background: orange;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
