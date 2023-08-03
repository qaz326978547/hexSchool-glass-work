<template>
    <div class=" bg-primary-light  text-white">
        <div class="container py-6">
            <div class=" hidden md:flex md:mb-8 md:justify-between">
                <ul class="flex space-x-12 items-center">
                    <li>
                        <router-link to="/">
                            首頁
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            系列鏡框
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            門市據點
                        </router-link>
                    </li>
                    <li>

                        <router-link to="/">
                            部落格
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            常見問題
                        </router-link>
                    </li>
                </ul>
                <ul class="flex space-x-4">
                    <li>
                        <a href="#" target="_blank">
                            <i class="icon icon_facebook w-10 h-10"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="icon icon_instagram w-10 h-10"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="icon icon_line w-10 h-10"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <ul class="md:mb-8 mb-6">
                <li class="flex items-center  justify-between mb-2">
                    <div class="flex">
                        <i class="md:w-12 md:h-12 icon icon_phone mr-2 w-6 h-6"></i>
                        <a class="md:text-4xl" href="tel:0800-000-000">0800-000-000</a>
                    </div>
                    <ul class=" md:hidden flex space-x-2">
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon icon_facebook w-6 h-6"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon icon_instagram w-6 h-6"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon icon_line w-6 h-6"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="flex items-center">
                    <i class="md:w-12 md:h-12 icon icon_mail mr-2 w-6 h-6"></i>
                    <a class="md:text-4xl " href="mailto:glasses@business.com">glasses@business.com</a>
                </li>
            </ul>
            <div class="md:mb-8  border border-white mb-4"></div>
            <div class="md:flex justify-between">
                <span class=" mb-2 block ">Coayright © 2020 Glasses.All rights reserved.</span>
                <div class="md:flex-row md:space-x-12 flex  flex-col ">
                    <a href="#" class=" mb-2 block">隱私權政策</a>
                    <a href="#" class=" mb-2 block">服務條款</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>

</script>
