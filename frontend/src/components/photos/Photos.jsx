import PropTypes from 'prop-types';
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

function Photos({ task, id }) {
 
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='touch-none z-10'>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-900 dark:text-white">
      <img src={task.url} alt="images" className=""/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task.title}</div>
          <p className="text-gray-700 text-base">
            {task.description}
          </p>
        </div>
        
      </div>
    </div>
  )
}

Photos.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired
};


export default Photos