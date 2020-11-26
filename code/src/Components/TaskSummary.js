import React from "react"
import { useSelector } from "react-redux"

export const TaskSummary = () => {
  const items = useSelector((state) => state.todo.items)
  const completedTasks = items.filter((item) => item.isComplete).length
console.log(items)
console.log(completedTasks)
  return (
    <>
      {" "}
      
        <span className="task-quantity">
          {completedTasks}/{items.length} Done
        </span>
      
    </>
  )
}