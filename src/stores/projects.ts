import { defineStore } from "pinia";

export const projectsStore = defineStore("projects", {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    currentTag: "",
    projects: [
      {
        tags: ["traefik"],
        title: "Minimal Traefik Configuration",
        icon: "traefik",
        description:
          "Hi! This is my minimal Traefik Configuration I want to share with you. You can use it for you local development as well on production server.",
        link: "https://github.com/robertspektor/minimal-traefik-configuration"
      },
      {
        tags: ["laravel", "php"],
        title: "Test 2",
        icon: "laravel",
        description: "",
        link: "https://github.com/robertspektor/minimal-traefik-configuration",
      },
      {
        tags: ["laravel", "php"],
        title: "Test 3",
        icon: "laravel",
        description: "",
        link: "https://github.com/robertspektor/minimal-traefik-configuration",
      },
    ],
    /** @type {'all' | 'laravel' | 'php' | 'traefik'} */
    filter: "all",
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    getByRoute(state) {
      if (this.currentTag == "") {
        return state.projects;
      } else {
        return state.projects.filter((project) =>
          project.tags.includes(this.currentTag)
        );
      }
    },
  },
  actions: {
    setTag(tag: string): void {
      this.currentTag = tag;
    },
  },
});
