<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-text-center">
          <ion-col size="12">
            <h1>Cyeco</h1>
          </ion-col>
          <ion-col size="12">
            <img src="../../assets/cyeco-logo.jpg" alt="Cyeco logo" />
          </ion-col>
          <ion-col size="12">
            <h1>Buttons</h1>
          </ion-col>
          <ion-col size="12">
            <span>Link</span>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';

export default {
  name: "Home",
  components: {
    IonContent, IonPage, IonGrid, IonRow, IonCol, IonImg
  }
}
</script>

<style scoped></style>
