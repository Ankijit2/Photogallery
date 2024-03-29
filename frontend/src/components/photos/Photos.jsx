/* eslint-disable react/prop-types */


import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

// eslint-disable-next-line react/prop-types
function Photos({ task, id }) {





 

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='touch-none z-10'>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-900 dark:text-white">
        <img src={task.url} alt="images" className="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task.title}</div>
          <p className="text-gray-700 text-base">
            {task.description}
          </p>
          <button className='bg-gray-900 py-1 rounded-lg text-white mt-5 dark:bg-white dark:text-gray-900  px-3'>Delete</button>
        </div>

      </div>
    </div>
  )
}


export default Photos