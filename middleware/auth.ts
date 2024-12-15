export default defineNuxtRouteMiddleware((to, from) => {

    const cookie = useCookie('token')


    console.log('auth middleware -> token: ' + cookie.value);

    if (!cookie.value) {
        return navigateTo('/auth')
    }
})