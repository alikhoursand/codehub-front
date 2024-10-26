<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div class="text-h6 font-weight-bold">جزییات سفارش {{ orderDetails.id }}#</div>
      <div>
        <v-btn
          rounded="lg"
          flat
          text="برگشت"
          append-icon="mdi-chevron-left"
          color="blue"
          @click="returnToList()"
        ></v-btn>
      </div>
    </div>
    <v-divider color="orange" :opacity="50" class="my-4"></v-divider>
    <div class="mt-10">
      <v-card class="shadow-base border" rounded="lg">
        <template v-slot:title>
          <v-icon color="success" icon="mdi-check-circle-outline" size="small"></v-icon>
          <span class="text-success mr-2 section-title font-weight-bold">پرداخت شده</span>
        </template>
        <div class="pa-5 pt-0">
          <v-row class="ma-0">
            <v-col cols="12" lg="4">
              <div>
                <span class="text-medium-emphasis">شماره سفارش : </span>
                <span>{{ orderDetails.id }}</span
                >#
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
                  }).format(new Date(orderDetails.created_at))
                }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4">
              <div>
                <span class="text-medium-emphasis">مبلغ کل : </span>
                <span class="ml-1 text-orange font-weight-bold section-title">
                  {{ orderDetails.cost.toLocaleString("fa-IR") }}
                </span>
                <span class="text-orange">تومان</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>

    <div class="mt-5">
      <v-card class="shadow-base border pa-2" rounded="lg">
        <v-row class="ma-0">
          <v-col cols="12" lg="4">
            <div>
              <span class="text-medium-emphasis">مبلغ مرسوله : </span>
              <span class="ml-1 text-orange font-weight-bold section-title">
                {{ orderDetails.cost.toLocaleString("fa-IR") }}
              </span>
              <span class="text-orange">تومان</span>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <div>
              <span class="text-medium-emphasis">مبلغ تخفیف : </span>
              <span class="ml-1 text-red-accent-4 font-weight-bold section-title">
                {{ orderDetails.discount.toLocaleString("fa-IR") }}
              </span>
              <span class="text-red-accent-4">تومان</span>
            </div>
          </v-col>
          <v-col cols="12" lg="4" class="pa-0"></v-col>
          <v-col cols="12" lg="4">
            <div>
              <span class="text-medium-emphasis">روش ارسال : </span>
              <span>پست</span>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <div>
              <span class="text-medium-emphasis">هزینه ارسال : </span>
              <span class="ml-1 text-orange font-weight-bold section-title">
                {{ orderDetails.post.toLocaleString("fa-IR") }}
              </span>
              <span class="text-orange">تومان</span>
            </div>
          </v-col>
          <v-col cols="12">
            <div>
              <span class="text-medium-emphasis">کد پیگیری مرسوله : </span>
              <span>{{
                orderDetails.tracking_code ? orderDetails.tracking_code : "ثبت نشده"
              }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="mt-5">
      <div class="d-flex align-center mt-10">
        <div class="dot"></div>
        <div class="mr-5 section-title">آدرس تحویل سفارش</div>
      </div>
      <v-card class="mt-5 shadow-base border pa-2" rounded="lg">
        <v-row class="ma-0">
          <v-col cols="12">
            <div class="text-body-2">
              {{ JSON.parse(orderDetails.address).address }}
            </div>
            <div class="text-body-1 mt-5">
              {{
                JSON.parse(orderDetails.address).fname +
                " " +
                JSON.parse(orderDetails.address).lname
              }}
            </div>
            <div class="text-body-1 mt-5">
              {{ JSON.parse(orderDetails.address).phone }}
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="mt-5">
      <div class="d-flex align-center mt-10">
        <div class="dot"></div>
        <div class="mr-5 section-title">
          <span>اقلام سفارش</span>
          &nbsp;
          <span class="txt-medium-emphasis"
            >({{ orderDetails.order_items.length }} کالا)</span
          >
        </div>
      </div>
      <div v-for="orderItem in orderDetails.order_items" :key="orderItem.id">
        <v-card :class="['pa-4 cart-item rounded-0']" elevation="0">
          <div class="d-sm-flex d-block">
            <div class="pr-5 order-2 d-flex flex-column justify-space-between">
              <div class="font-weight-bold mt-2 text-center text-sm-right">
                {{ orderItem.detail.product.title }}
              </div>
              <div class="text-right d-none d-sm-block">
                <div>
                  <v-btn
                    rounded="lg"
                    flat
                    class="border mt-3"
                    :text="orderItem.detail.color"
                  >
                    <template v-slot:prepend>
                      <div
                        :style="`
                          border-radius: 50%;
                          width: 20px;
                          height: 20px;
                          background: ${orderItem.detail.color_code};
                        `"
                      ></div>
                    </template>
                  </v-btn>
                </div>
                <div>
                  <v-btn
                    rounded="circle"
                    size="small"
                    flat
                    class="border mr-3 mt-3"
                    icon=""
                    :text="orderItem.detail.size"
                  ></v-btn>
                </div>
              </div>
              <div class="mt-5">
                <div
                  class="text-right font-weight-bold d-none text-orange d-sm-block"
                  style="font-size: 1.1rem"
                >
                  <span>{{ orderItem.price.toLocaleString("fa-IR") }} </span>
                  <span class="text-body-1"> تومان</span>
                </div>
              </div>
            </div>
            <div class="order-1 d-flex flex-column justify-space-between">
              <v-img
                class="mx-auto"
                rounded="lg"
                width="200"
                :aspect-ratio="1 / 1"
                :src="`${runtimeConfig.public.backendUrl}${orderItem.detail.product.image.image}`"
                cover
              >
              </v-img>
              <div class="text-center d-block d-sm-none mt-3">
                <v-btn rounded="lg" flat class="border" :text="orderItem.detail.color">
                  <template v-slot:prepend>
                    <div
                      :style="`
                        border-radius: 50%;
                        width: 20px;
                        height: 20px;
                        background: ${orderItem.detail.color_code};
                      `"
                    ></div>
                  </template>
                </v-btn>
                <v-btn
                  rounded="circle"
                  size="small"
                  flat
                  class="border mr-3"
                  icon=""
                  :text="orderItem.detail.size"
                ></v-btn>
              </div>
              <div
                class="text-center mt-3 text-h6 text-orange mt-5 font-weight-bold d-block d-sm-none"
                style="font-size: 1.1rem"
              >
                <span>{{ orderItem.price.toLocaleString("fa-IR") }}</span>
                <span class="text-body-1"> تومان </span>
              </div>
            </div>
          </div>
        </v-card>
        <!-- hide for last one -->
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnToList() {
      this.$emit("viewOrders");
    },
  },
  setup() {
    const runtimeConfig = useRuntimeConfig();
    return { runtimeConfig };
  },
  data() {
    return {
      products: [],
      orderDetail: null,
    };
  },
  mounted() {
    this.detail = this.orderDetails;
  },
  props: ["orderDetails"],
};
</script>

<style scoped>
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
