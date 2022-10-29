<template>
  <div class="greetings">
    <p>
      Привет. Не знаю как ты попал(а) в мой ПК.
      Похоже, тебя интересует информация о мне. Давай расскажу о себe.
    </p>

    <RouterLink
      to="/about"
      class="greetings__link"
    >
      Вперёд
    </RouterLink>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss" src="./GreetingsPage.scss"></style>
