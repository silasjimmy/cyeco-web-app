<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-avatar slot="start">
          <img
            alt="Silhouette of a person's head"
            src="../../assets/cyeco-logo.jpg"
          />
        </ion-avatar>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Cyeco</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="example-content">Bikes</div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonAvatar,
  IonIcon,
  IonButton,
  IonButtons,
} from "@ionic/vue";
import { heartOutline } from "ionicons/icons";

export default {
  data() {
    return { heartOutline };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonAvatar,
    IonIcon,
    IonButton,
    IonButtons,
  },
};
</script>
