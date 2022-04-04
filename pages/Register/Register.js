export default {
  data() {
    return {
      register: "Register",
      email: null,
      password: null,
    };
  },
  methods: {
    handleSubmit() {
      alert(`email: ${this.email} and password: ${this.password}`)
    }
  }
};
