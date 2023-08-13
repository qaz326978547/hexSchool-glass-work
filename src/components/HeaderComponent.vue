<template>
    <nav
        class=" md:fixed md:flex-nowrap md:px-9  absolute flex w-full flex-wrap  items-center justify-between bg-primary-light text-primary-white  z-10">
        <div class="md:container md:flex md:justify-between w-full">
            <div class="flex w-full md:w-auto  p-4 ">
                <router-link to="/" class="">
                    <img class="w-20" src="@/assets/images/logo-white.png" alt="Logo" />
                </router-link>
            </div>
            <ul class=" md:w-auto md:space-x-16 text-white text-center flex flex-wrap w-full">
                <li class="md:w-auto md:border-none md:py-6  w-1/2 py-3 border border-white">
                    <router-link :to="{ name: 'Products' }"
                        class="text-white md:py-6  hover:border-b-[3px] hover:border-white ">系列鏡框</router-link>
                </li>
                <li class=" md:w-auto md:border-none md:py-6  w-1/2 py-3 border border-white">
                    <router-link :to="{ name: 'Store' }"
                        class="text-white md:py-6  hover:border-b-[3px] hover:border-white ">門市據點</router-link>
                </li>
                <li class=" md:w-auto md:border-none md:py-6  w-1/2 py-3 border border-white">
                    <router-link :to="{ name: 'Blog' }"
                        class="text-white md:py-6  hover:border-b-[3px] hover:border-white ">部落格</router-link>
                </li>
                <li class=" md:w-auto md:border-none md:py-6  w-1/2 py-3 border border-white">
                    <router-link :to="{ name: 'QA' }"
                        class="text-white md:py-6  hover:border-b-[3px] hover:border-white ">常見問題</router-link>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script setup lang="ts">

</script>