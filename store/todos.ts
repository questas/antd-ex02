import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface ToDo {
  text: string
  done: boolean
}
type TodoList = Array<ToDo>

@Module({
  name: 'toDoModule',
  stateFactory: true,
  namespaced: true
})
export default class TodoModule extends VuexModule {
  list: TodoList = []

  @Mutation
  add(text: string) {
    this.list.push({
      text,
      done: false
    })
  }

  @Mutation
  remove(todo: ToDo) {
    this.list.splice(this.list.indexOf(todo), 1)
  }

  // get toggle(todo: ToDo) {
  //   todo.done = !todo.done
  //   return todo.done
  // }

}
