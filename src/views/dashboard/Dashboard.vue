<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/dashboard/home">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="radio" href="/dashboard/docks">
            <ion-icon :icon="location" />
            <ion-label>Docks</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="library" href="/dashboard/account">
            <ion-icon :icon="personCircle" />
            <ion-label>Account</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script>
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { personCircle, location, home } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          location,
          personCircle,
          home,
        };
      },
    };
  </script>