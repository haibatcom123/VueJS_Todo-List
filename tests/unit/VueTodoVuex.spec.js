import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import { expect } from "chai";
import * as todos from "@/store/modules/todos.js";
import TodoNew from "@/components/TodoNew.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("vue-todo-vuex", () => {
  let actions = todos.actions;
  let mutations = todos.mutations;
  let getters = todos.getters;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state: { todos: [] }
    });
  });

  describe("Mutations", () => {
    let newId = 0;

    it("directly commits ADD_TODO", () => {
      let new_task = "Bake Cake";
      store.commit("ADD_TODO", { newId: newId, task: new_task });

      newId++;

      const actual = getters.getTodos(store.state);
      const expected = [{ id: 0, task: "Bake Cake", completed: false }];

      expect(actual).to.deep.equal(expected);
    });

    it("directly commits TOGGLE_TODO", () => {
      store.state.todos = [{ id: 0, task: "Bake Cake", completed: false }];
      let task_id = 0;
      store.commit("TOGGLE_TODO", task_id);

      const actual = getters.getTodos(store.state);
      const expected = [{ id: 0, task: "Bake Cake", completed: true }];

      expect(actual).to.deep.equal(expected);
    });

    it("directly commits DELETE_TODO", () => {
      store.state.todos = [{ id: 0, task: "Bake Cake", completed: false }];
      let task_id = 0;
      store.commit("DELETE_TODO", task_id);

      const actual = getters.getTodos(store.state);
      const expected = [];

      expect(actual).to.deep.equal(expected);
    });
  });

  describe("Actions", () => {
    it("dispatches the addTodo action which commits the ADD_TODO mutation", () => {
      let newId = 0;
      let new_task = "Bake Cake";
      store.dispatch("addTodo", { newId: newId, task: new_task });

      const actual = getters.getTodos(store.state);
      const expected = [{ id: 0, task: "Bake Cake", completed: false }];

      expect(actual).to.deep.equal(expected);
    });

    it("dispatches the toggleTodo action which commits the TOGGLE_TODO mutation", () => {
      store.state.todos = [{ id: 0, task: "Bake Cake", completed: false }];
      let task_id = 0;

      store.dispatch("toggleTodo", task_id);

      const actual = getters.getTodos(store.state);
      const expected = [{ id: 0, task: "Bake Cake", completed: true }];

      expect(actual).to.deep.equal(expected);
    });

    it("dispatches the deleteTodo action which commits the DELETE_TODO mutation", () => {
      store.state.todos = [{ id: 0, task: "Bake Cake", completed: false }];
      let task_id = 0;

      store.dispatch("deleteTodo", task_id);

      const actual = getters.getTodos(store.state);
      const expected = [];

      expect(actual).to.deep.equal(expected);
    });
  });

  describe("User Actions", () => {
    it("triggers a submit behavior when Enter is pressed within text box", () => {
      const TodoNewWrapper = shallowMount(TodoNew, {
        store,
        localVue
      });
      TodoNewWrapper.find("input").setValue("Bake Cake");
      TodoNewWrapper.find("input").trigger("keydown.enter");

      expect(TodoNewWrapper.emitted("submitEventTriggered"));
    });
  });
});
