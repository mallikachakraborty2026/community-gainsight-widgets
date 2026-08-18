import { useState, useCallback } from 'react'
import type { WidgetSDK } from './types'

interface TaskListProps {
  sdk: WidgetSDK
}

interface WidgetProps {
  title?: string
}

export function TaskList({ sdk }: TaskListProps) {
  const props = sdk.getProps<WidgetProps>()

  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState('')

  const addTask = useCallback(() => {
    if (!input.trim()) return
    setTasks((prev) => [...prev, input.trim()])
    sdk.emit('taskAdded', { task: input.trim() })
    setInput('')
  }, [input, sdk])

  return (
    <div>
      <h2>{props.title || 'Tasks'}</h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="New task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  )
}