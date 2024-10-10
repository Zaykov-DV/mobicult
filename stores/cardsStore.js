import { defineStore } from 'pinia'

export const useCards = defineStore('cards', {
  state: () => ({
      cards: []
  }),
  getters: {

  },
  actions: {
    saveCard (title)  {
      this.cards.push({
        id: Date.now(),
        title
      })

      const jsonData = JSON.stringify(this.cards)
      localStorage.setItem('cards', jsonData)
    },
    getCardsFromStorage() {
        try {
          const storage = localStorage.getItem('cards')
          if (storage) {
            this.cards = JSON.parse(storage)
          } else {
            this.cards = []
          }
        } catch (error) {
          console.log(error)
        }
    },
    removeCard(id) {
      this.cards = this.cards?.filter((element) => element.id !== id)

      const jsonData = JSON.stringify(this.cards)
      localStorage.setItem('cards', jsonData)
    },
    changeCard(id, text) {
      console.log(id)
      console.log(text)
      this.cards.map((card) => card.id === id).title = text

      const jsonData = JSON.stringify(this.cards)
      localStorage.setItem('cards', jsonData)
    },
  },
})
