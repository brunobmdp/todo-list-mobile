import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { Checkbox } from '../Checkbox'

type Props = {
  content: string
  isCompleted: boolean
  id: string
  changeTodoStatus: (id: string) => void
  deleteTodoFromList: (id: string) => void
}

export function Todo({
  content,
  isCompleted,
  id,
  changeTodoStatus,
  deleteTodoFromList,
}: Props) {
  const todoContainerStyle = isCompleted ? 'border-gray500' : 'border-gray400'
  const todoTextStyle = isCompleted
    ? 'text-gray300 line-through'
    : 'text-gray100'

  function handleToggleCheckbox() {
    changeTodoStatus(id)
  }

  function handleDeleteTodo() {
    deleteTodoFromList(id)
  }

  return (
    <View
      className={`mb-2 p-3 flex-row justify-center items-center bg-gray500 border rounded-lg ${todoContainerStyle} `}
    >
      <Checkbox checked={isCompleted} onPress={handleToggleCheckbox} />
      <Text className={`${todoTextStyle} flex-1`}>{content}</Text>
      <TouchableOpacity
        onPress={handleDeleteTodo}
        className="h-8 w-8 justify-center items-center"
      >
        <EvilIcons name="trash" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
