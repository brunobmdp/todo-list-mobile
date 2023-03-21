import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'
import emptyList from '../../../assets/Clipboard.png'
import { Todo } from '../../components/Todo'

// type Props = {}

interface TodoType {
  content: string
  isCompleted: boolean
  id: string
}

export default function Home() {
  const [focus, setFocus] = useState(false)
  const onFocusInputStyle = focus ? 'border-purple-dark' : 'border - gray700'

  const [todoContent, setTodoContent] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([])

  const totalAmountOfTodos = todos.length
  const amountOfCompletedTodos = todos.reduce(
    (total, todo) => (todo.isCompleted ? total + 1 : total),
    0,
  )

  function handleTodoInput() {
    const newTodo: TodoType = {
      content: todoContent,
      id: String(uuid.v4()),
      isCompleted: false,
    }
    setTodos((state) => [...state, newTodo])
    setTodoContent('')
  }

  function changeTodoStatus(id: string) {
    const newTodosList = todos.map((todo) =>
      todo.id !== id
        ? todo
        : { id, content: todo.content, isCompleted: !todo.isCompleted },
    )
    setTodos(newTodosList)
  }

  function deleteTodoFromList(id: string) {
    setTodos((state) => state.filter((todo) => todo.id !== id))
  }

  return (
    <View className="bg-gray600 flex-1 px-6 mb-6">
      <View className="flex-row -mt-6 items-center justify-center ">
        <TextInput
          className={`bg-gray500 flex-1 h-[54px] font-regular border rounded-md p-4 text-gray100 ${onFocusInputStyle}`}
          cursorColor="#F2F2F2"
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={todoContent}
          onChangeText={setTodoContent}
        />
        <TouchableOpacity
          onPress={handleTodoInput}
          className="ml-1 bg-blue-dark h-[52px] w-[52px] items-center justify-center rounded-md"
        >
          <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View className="mt-8 mb-5 flex-row justify-between">
        <View className="flex-row gap-2 items-center justify-center">
          <Text className="text-blue-light font-bold">Criadas</Text>
          <Text className="bg-gray400 rounded-full text-gray200 px-2 py-0.5">
            {totalAmountOfTodos}
          </Text>
        </View>
        <View className="flex-row gap-2 items-center justify-center">
          <Text className="text-purple-light font-bold">Concluídas</Text>
          <Text className="bg-gray400 rounded-full text-gray200 px-2 py-0.5">
            {amountOfCompletedTodos}
          </Text>
        </View>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item }) => (
          <Todo
            content={item.content}
            isCompleted={item.isCompleted}
            id={item.id}
            changeTodoStatus={changeTodoStatus}
            deleteTodoFromList={deleteTodoFromList}
          />
        )}
        ListEmptyComponent={() => (
          <View className="mt-5 justify-center items-center">
            <Image className="mb-4" source={emptyList} alt="" />
            <Text className="text-gray300 text-sm font-bold">
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-gray300 text-sm font-regular">
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
