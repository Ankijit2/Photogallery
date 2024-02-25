import {  useEffect, useState } from 'react';
import React from 'react'
import Photos from '../../components/photos/Photos';
import useGallerydata from '../../hooks/useGallerydata';
import { DndContext, PointerSensor, TouchSensor, closestCorners, useSensors, useSensor } from "@dnd-kit/core"
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable"



function Gallery() {
    const [data, loading, error] = useGallerydata();


    const [tasks, setTasks] = useState('');
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('sortedTasks'));

        if (storedTasks && storedTasks.length === data.length) {
            setTasks(storedTasks);
        } else {
            setTasks(data);
            localStorage.setItem('sortedTasks', JSON.stringify(data));
        }
    }, [data]);



    const getPos = id => tasks.findIndex(task => task.id === id)


    const handleDragEnd = (event) => {
        const { active, over } = event
        if (active.id === over.id) return;
        setTasks(tasks => {
            const oldIndex = getPos(active.id)
            const newIndex = getPos(over.id)

            const updatedTasks = arrayMove(tasks, oldIndex, newIndex);
            console.log(updatedTasks)
            localStorage.setItem('sortedTasks', JSON.stringify(updatedTasks));
            return updatedTasks


        })
    }
    const Sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),

    )
    if (loading) return <h1>Loading...</h1>
    else if (error) return <h1>Error</h1>
    else {
        return (
            <div className=' overflow-y-scroll md:basis-3/4 basis-8/12 h-full w-full'>
                <div>
                    <h1 className='text-2xl mb-6 dark:text-white'>Your Photos</h1>
                </div>
                <DndContext sensors={Sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-4  '>
                        <SortableContext items={tasks} strategy={rectSortingStrategy}>
                            {tasks.map((task) => (
                                <Photos key={task.id} id={task.id} task={task} />
                            ))}
                        </SortableContext>
                    </div>
                </DndContext>
            </div>
        )
    }
}

export default Gallery