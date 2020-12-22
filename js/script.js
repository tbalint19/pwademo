var app = new Vue({
  el: '#app',
  data: {
    allMatches: [],
    matches: [],
    dates: [],
    dayIndex: 0,
    selectedMatch: null,
    eventIndex: 0,
    msg: "swipe it",
    counter: 0
  },
  methods: {
    swipeHandler: function(dir, e) {
      this.counter = this.counter + 1
      this.msg = "swiped" + this.counter
    },
    selectDay: function() {
      const date = this.dates[this.dayIndex]
      this.matches = matches.filter(m => m.date.split("T")[0] === date)
    },
    toPreviousDay: function() {
      if (this.dayIndex > 0) {
        this.dayIndex--
        this.selectDay()
      }
    },
    toNextDay: function() {
      if (this.dayIndex+1 < this.dates.length) {
        this.dayIndex++
        this.selectDay()
      }
    },
    selectMatch: function(match) {
      if (!match)
        return this.selectedMatch = null
      this.eventIndex = 0
      let editedMatch = deepCopy(match)
      editedMatch.events.forEach(event => {
        event["oddses"] = {
          "out": null, "1": 0, "X": 0, "2": 0
        }
      })
      this.selectedMatch = deepCopy(editedMatch)
    },
    toPreviousEvent: function() {
      if (!this.selectMatch)
        return
      if (this.eventIndex > 0)
        this.eventIndex--
    },
    toNextEvent: function() {
      if (!this.selectMatch)
        return
      if (this.eventIndex < this.selectedMatch.events.length-1)
        this.eventIndex++
    },
    isSelected: function(i) {
      return i == this.eventIndex
    },
    hasOddses: function(i) {
      if (!this.selectedMatch.events[i].oddses) return false
      return this.selectedMatch.events[i].oddses.out !== null
    },
    allHasOddses: function() {

    },
    selectOut: function(out) {
      this.selectedEvent["oddses"]["out"] = out
      this.selectedEvent["oddses"]["1"] = 0
      this.selectedEvent["oddses"]["X"] = 0
      this.selectedEvent["oddses"]["2"] = 0
      this.selectedEvent["oddses"][out] = 100
    },
    calculateNext: function(out, value) {
      const currentState = deepCopy(this.selectedEvent)
      const nextState = deepCopy(calculate(currentState, out, value))
      this.selectedMatch.events[this.eventIndex].oddses["1"] = nextState.oddses["1"]
      this.selectedMatch.events[this.eventIndex].oddses["X"] = nextState.oddses["X"]
      this.selectedMatch.events[this.eventIndex].oddses["2"] = nextState.oddses["2"]
    },
  },
  computed: {
    selectedEvent: function() {
      return this.selectedMatch.events[this.eventIndex]
    },
    selectedDay: function() {
      return this.dates[this.dayIndex]
    }
  },
  created() {
    this.allMatches = deepCopy(matches)
    this.dates = Array.from(
      new Set(
        this.allMatches.map(m => m.date.split("T")[0])
      )
    ).sort()
    this.dayIndex = 0
    this.selectDay()
  }
})
