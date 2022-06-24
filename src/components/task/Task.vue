<script setup lang="ts">
import { openLink } from '@/utils/'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    url: {
        type: String,
        default: '',
    },
    range: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <section class="bg-gray-200 text-gray-800 mb-10">
        <div class="container mx-auto flex flex-col items-center py-12 px-4 text-center md:px-10 xl:max-w-3xl">
            <h1 class="text-2xl font-bold leading-none sm:text-3xl">
                <span class="text-violet-600">{{ props.title }}</span>
            </h1>
            <div class="mt-1 text-violet-600">{{ props.range }}</div>
            <p class="px-8 mt-4 mb-12 text-lg">{{ props.description }}</p>
            <!-- https://galaxy.eco/arbitrum/campaign/GCCNzUtQiW -->
            <button
                type="button"
                class="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-gray-50"
                @click="openLink(props.url)"
            >
                Galaxy 领取 NFT
                <span
                    class="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600"
                >
                    热
                </span>
            </button>
        </div>
    </section>
</template>
