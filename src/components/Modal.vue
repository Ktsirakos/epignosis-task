<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)

</script>

<template>
  <div v-if="props.isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="w-1/4 h-50 bg-stone-700 border-stone-200 border-2 rounded-xl" ref="target">
        <div class="modal-body h-full w-full p-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 50px;
}

</style>