import { defineStore } from "pinia";

export const useGithub = defineStore("github-store", {
  state: () => {
    return {
      repositories: [],
      fetching: false,
    };
  },

  getters: {
    results(state) {
      return state.repositories;
    },

    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async fetchRepositories() {
      this.fetching = true;
      const response = await fetch(
        "https://api.github.com/users/robertspektor/repos"
      );
      try {
        this.repositories = await response.json();
      } catch (err) {
        this.repositories = [];
        console.error("Error loading new repositories:", err);
        return err;
      }

      this.fetching = false;
    },
  },
});
