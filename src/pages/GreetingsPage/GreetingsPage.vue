<template>
  <div class="greetings">
    <p>
      Привет. Не знаю как ты попал(а) в мой ПК.
      Похоже, тебя интересует информация обо мне. Давай расскажу
    </p>

    <RouterLink
      to="/about"
      class="greetings__link"
    >
      <strong> Вперёд </strong>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss" src="./GreetingsPage.scss"></style>
