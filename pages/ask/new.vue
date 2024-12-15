<template>
    <div>
        <v-row class="ma-0 mt-9">
            <v-col cols="12" lg="3" class="d-none d-lg-block">
                <v-sheet :class="[
                    useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                    'px-4 py-6 sidebar',
                ]">
                    <nuxt-link to="/ask/new">
                        <v-btn block size="x-large" flat color="light-blue-lighten-2 categories-btn" class=""
                            text="ثبت پرسش">
                            <template v-slot:append>
                                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
                            </template>
                        </v-btn>
                    </nuxt-link>
                    <div class="mt-8">
                        <span class="text-high-emphasis" style="font-size: 18px">دسته بندی پرسش ها</span>
                    </div>
                    <div class="text-medium-emphasis">
                        <v-list lines="one">
                            <v-list-item title="وردپرس" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="بوت استرپ" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="لاراول" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="ری اکت" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="جنگو" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="HTML" class="text-medium-emphasis"></v-list-item>
                            <v-list-item title="ویو" class="text-medium-emphasis"></v-list-item>
                        </v-list>
                    </div>
                    <v-btn text="موارد بیشتر" variant="plain" style="opacity: 1" :ripple="false"
                        color="light-blue-lighten-2">
                        <template v-slot:append>
                            <img src="/icons/arrow-down-blue.svg" height="12" width="12" alt="" />
                        </template>
                    </v-btn>
                </v-sheet>
            </v-col>

            <v-col cols="12" lg="9">
                <div class="d-flex align-center">
                    <div>
                        <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                        </v-avatar>
                    </div>
                    <div class="mr-4" style="word-break: break-all; white-space: normal">
                        <div class="d-block d-md-flex" style="font-size: 1.2rem">
                            <div>نام و نام کاربری</div>
                        </div>
                    </div>
                </div>

                <v-sheet :class="[
                    useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                    'rounding',
                    'px-5 py-10 mt-5',
                    'ans',
                ]">
                    <v-row>
                        <v-col cols="12" md="6">
                            <label for="">عنوان پرسش</label>
                            <v-text-field flat hide-details class="rounding mt-2" v-model="question.title"
                                spellcheck="false" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <label for="">دسته بندی پرسش</label>
                            <v-select flat class="rounding mt-2" placeholder="دسته بندی" v-model="question.category"
                                :items="categories" item-title="name" item-value="id" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" class="mt-5">
                            <label for="">متن پاسخ شما</label>
                            <TitapEditor v-model="question.body" />
                        </v-col>
                    </v-row>

                    <v-row class="align-center justify-end mt-4 px-3">
                        <v-col class="pa-0 text-lg-left text-right" cols="12" lg="2">
                            <v-btn variant="text" flat text="قرار دادن کد"
                                :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'rounding']">
                                <template v-slot:prepend>
                                    <img src="/public/icons/document-code.svg" alt="">
                                </template>
                            </v-btn>
                        </v-col>
                        <v-col class="pa-0 text-lg-left text-right" cols="12" lg="2">
                            <v-btn variant="text" flat text="آپلود تصویر"
                                :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'rounding']">
                                <template v-slot:prepend>
                                    <img src="/public/icons/gallery-add.svg" alt="">
                                </template>
                            </v-btn>
                        </v-col>
                        <v-col class="pa-0 text-lg-left text-right" cols="12" lg="2">
                            <v-btn variant="text" flat text="افزودن لینک"
                                :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'rounding']">
                                <template v-slot:prepend>
                                    <img src="/public/icons/link-square-blue.svg" alt="">
                                </template>
                            </v-btn>
                        </v-col>
                    </v-row>

                    <div class="text-left mt-10">
                        <v-btn @click=submitQuestion() variant="flat" size="x-large" text="ثبت پرسش"
                            :loading="submittingQuestion" color="light-blue-lighten-2" flat class="rounding">
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>


<script setup>
import TitapEditor from '~/components/TitapEditor.vue';
const runtimeConfig = useRuntimeConfig();

definePageMeta({
    middleware: "auth",
});


let submittingQuestion = ref(false)
let question = ref({
    title: null,
    body: null,
    category: null,
})

const { data: categories } = await useFetch(
    `${runtimeConfig.public.apiUrl}/categories`
);
// console.log(categories);


function submitQuestion() {


    console.log(question.value);



    if (submittingQuestion.value == true) return;
    submittingQuestion.value = true;

    $fetch(`${runtimeConfig.public.apiUrl}/categories`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${useCookie('token')}`
        },
        data: {
            title: question.value.title,
            body: question.value.body,
            category: question.value.category,
        }
    }).then((response) => {
        console.log(response);
        submittingQuestion.value = false;
    }).catch((error) => {
        console.log(error.response)
        submittingQuestion.value = false;
    });
}
</script>