<template>
  <v-card class="app-card" :elevation="0" border="sm">
    <v-card-text class="app-card__text">
      <div class="app-card__prepend">
        <slot name="prepend" />
      </div>

      <slot />
    </v-card-text>
    <v-card-actions>
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" src="./AppCard.scss"></style>
