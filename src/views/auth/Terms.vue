<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-text-center">
          <ion-col size="12">
            <h1>Image</h1>
          </ion-col>
          <ion-col size="12">
            <h2>Terms and Conditions</h2>
            <p>Read through our terms and conditions, check to agree and press Continue</p>
          </ion-col>
          <ion-col size="12">
            <ion-card>
              <p>Terms and conditions text...</p>
            </ion-card>
          </ion-col>
          <ion-col size="12">
            <span>I agree to the terms and conditions</span>
          </ion-col>
          <ion-col size="12">
            <span>Button</span>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard } from '@ionic/vue';

export default {
  name: "Terms",
  components: {
    IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard
  }
}
</script>

<style scoped></style>
