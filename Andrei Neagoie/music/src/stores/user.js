import { defineStore } from 'pinia'
import { auth, userCollection } from '@/includes/firebase.js'

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      await userCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        job: values.job
      })

      await userCred.user.updateProfile({
        displayName: values.name,
      })

      this.userLoggedIn = true

    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await auth.signOut()

      this.userLoggedIn = false
    }
  }
})