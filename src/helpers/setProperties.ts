import { onMounted, Ref } from 'vue';

export default function setProperties(properties: Record<string, string>, ref: Ref<HTMLElement>) {
  onMounted(() => {
    Object.keys(properties)
      .forEach((key) => {
        ref.value.style.setProperty(key, properties[key]);
      });
  });
}
