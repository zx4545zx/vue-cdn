export default {
  data() {
    return {
      count: 0,
      users: [
        {
          "id": 1,
          "name": "Hello",
          "age": 19
        },
        {
          "id": 2,
          "name": "Bunny",
          "age": 21
        },
        {
          "id": 3,
          "name": "Natto",
          "age": 23
        },
      ]
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
  template: ``,
};
