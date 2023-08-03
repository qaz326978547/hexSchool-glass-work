<template>
    <nav
        class="md:fixed md:flex-nowrap md:px-9 md:py-4 absolute flex w-full flex-wrap  items-center justify-between bg-primary-light text-primary-white  z-10">
        <div class="flex w-full md:w-auto">
            <router-link to="/" class=" md:p-0 p-4">
                <img class="w-20" src="@/assets/images/logo-white.png" alt="Logo" />
            </router-link>
        </div>
        <ul class=" md:w-auto md:space-x-16 text-white text-center flex flex-wrap w-full">
            <li class=" md:w-auto md:border-none md:py-0 w-1/2 py-3 border border-white">
                <router-link to="/" class="text-white">系列鏡框</router-link>
            </li>
            <li class=" md:w-auto md:border-none md:py-0 w-1/2 py-3 border border-white">
                <router-link to="/" class="text-white">門市據點</router-link>
            </li>
            <li class=" md:w-auto md:border-none md:py-0 w-1/2 py-3 border border-white">
                <router-link to="/" class="text-white">部落格</router-link>
            </li>
            <li class=" md:w-auto md:border-none md:py-0 w-1/2 py-3 border border-white">
                <router-link to="/" class="text-white">常見問題</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

</script>