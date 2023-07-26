<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row class="ion-text-center">
                    <ion-col size="12">
                        <h1>Logo</h1>
                    </ion-col>
                    <ion-col size="12">
                        <h2>Finish up to get a ride...</h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque at quod cumque,
                        dolores excepturi odio, iusto animi, exercitationem nostrum adipisci? Atque odit harum eligendi
                        sint porro? Nobis, laudantium ut.
                        </p>
                    </ion-col>
                    <ion-col size="12">
                        <span>Input 1</span>
                    </ion-col>
                    <ion-col size="12">
                        <span>Input 2</span>
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
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';

export default {
    name: "UserInfo",
    components: {
        IonContent, IonPage, IonGrid, IonRow, IonCol
    }
}
</script>

<style scoped></style>