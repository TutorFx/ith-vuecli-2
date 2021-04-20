<template>
    <layout>
        <div class="page-building primary">
            Ops... Essa página está em construção
        </div>
    </layout>
</template>

<script>
import layout from "@/components/Layout"
export default {
    components: {
        layout
    }
}
</script>

<style lang="scss">
    .page-building{
        min-height: 65vh;
        align-items: center;
        justify-content: center;
        color: white;
        display: flex;
    }
</style>