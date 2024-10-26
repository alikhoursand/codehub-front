import { defineNuxtPlugin } from '#app'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css" // if needed

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        position: "top-center",
        timeout: 3000,
        closeOnClick: false,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: true
    })
})