<template>
    <div>
        <v-sheet class="mt-2 ">
            <div v-if="editor" class="border-sm rounding-top pa-2 editor">

                <button @click="editor.chain().focus().toggleBold().run()"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    :class="[{ 'is-active': editor.isActive('bold') }, ' font-weight-bold']">B</button>
                <!-- <v-icon>
                    <img v-if="useCookie('theme').value == 'myLight'" src="/icons/editor/text-bold-light.svg" alt="">
                    <img v-else src="/icons/editor/text-bold-dark.svg" alt="">
                </v-icon> -->

                <button @click="editor.chain().focus().toggleItalic().run()"
                    :disabled="!editor.can().chain().focus().toggleItalic().run()"
                    :class="[{ 'is-active': editor.isActive('italic') }, ' arial-font font-italic']">I</button>
                <!-- <v-icon >
                    <img v-if="useCookie('theme').value == 'myLight'" src="/icons/editor/text-italic-light.svg" alt="">
                    <img v-else src="/icons/editor/text-italic-dark.svg" alt="">
                </v-icon> -->

                <button @click="editor.chain().focus().toggleStrike().run()"
                    :disabled="!editor.can().chain().focus().toggleStrike().run()"
                    :class="[{ 'is-active': editor.isActive('strike') }, ' text-decoration-line-through']">
                    text
                </button>
                <button @click="editor.chain().focus().toggleCode().run()"
                    :disabled="!editor.can().chain().focus().toggleCode().run()"
                    :class="[{ 'is-active': editor.isActive('code') }, ' ']">
                    کد
                </button>
                <button @click="editor.chain().focus().unsetAllMarks().run()" class="">
                    حذف تغییرات
                </button>
                <button @click="editor.chain().focus().clearNodes().run()" class="">
                    حذف نودها
                </button>
                <button @click="editor.chain().focus().setParagraph().run()"
                    :class="[{ 'is-active': editor.isActive('paragraph') }, '']">
                    پاراگراف
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 1 }) }, '']">
                    H1
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 2 }) }, '']">
                    H2
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 3 }) }, '']">
                    H3
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 4 }) }, '']">
                    H4
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 5 }) }, '']">
                    H5
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                    :class="[{ 'is-active': editor.isActive('heading', { level: 6 }) }, '']">
                    H6
                </button>
                <button @click="editor.chain().focus().toggleBulletList().run()"
                    :class="[{ 'is-active': editor.isActive('bulletList') }, '']">
                    لیست
                </button>
                <button @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="[{ 'is-active': editor.isActive('orderedList') }, '']">
                    لیست شماره دار
                </button>

                <button @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="[{ 'is-active': editor.isActive('blockquote') }, '']">
                    نقل قول
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()" class="">
                    خط افقی
                </button>
            </div>
            <TiptapEditorContent :editor="editor" spellcheck="false" class="border-sm border-t-0 rounding-bottom" />
        </v-sheet>
    </div>
</template>

<script setup>
const editor = useEditor({
    content: "",
    extensions: [TiptapStarterKit],
});
onMounted(() => {
});
onBeforeUnmount(() => {
    unref(editor).destroy();
});
</script>



<style>
.bold {
    color: red !important;
}
</style>