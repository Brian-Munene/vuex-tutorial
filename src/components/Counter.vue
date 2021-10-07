<template>
    <div
      :style="{ color: $store.state.colorCode}"
      class="counter"
    >
      {{ $store.state.counter }}
    </div>
</template>