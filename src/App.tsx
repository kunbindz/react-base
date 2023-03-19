import { useState } from 'react'
import { Stage, Layer, Circle, Line } from 'react-konva'
import './App.css'

interface CirclePos {
  x: number
  y: number
}

function App() {
  const [points, setPoints] = useState([600, 500, 1000, 500])
  const [circlePos, setCirclePos] = useState<CirclePos>()

  const handleLineClick = (event: any) => {
    const point = event.target.getRelativePointerPosition()
    setCirclePos(point)
  }

  const handleCircleDrag = (event: any) => {
    const { x, y } = event.target.position()

    // const index = points.indexOf(circlePos.x)

    const newPoints = [...points]
    // newPoints[index] = x
    // newPoints[index + 1] = y
    const array = [600, 500, x, y, 1000, 500]
    setPoints(array)
    setCirclePos({ x, y })
    console.log(newPoints)
  }

  const anchors = points.map((point, i) => {
    if (i % 2 === 0) {
      return (
        <Circle
          key={i}
          x={point}
          y={points[i + 1]}
          radius={6}
          fill='white'
          stroke='black'
          strokeWidth={2}
          draggable
          onDragMove={(e) => {
            const newPoints = [...points]
            newPoints[i] = e.target.x()
            newPoints[i + 1] = e.target.y()
            setPoints(newPoints)
            console.log(newPoints)
          }}
        />
      )
    }
  })
  return (
    <>
      <div className='bg-red-300 flex justify-center align-center '>
        <h2 className=' font-poppins text-[52px] font-medium mt-5 text-cyan-700 '>
          {' '}
          Demo modify line with react-konva
        </h2>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight} className=' bg-red-300 '>
        <Layer>
          <Line points={points} stroke='#1298f6' strokeWidth={8} onClick={handleLineClick} />
          {anchors}
          {circlePos && (
            <Circle
              x={circlePos.x}
              y={circlePos.y}
              radius={6}
              fill='white'
              stroke='black'
              strokeWidth={2}
              draggable={true}
              onDragMove={handleCircleDrag}
            />
          )}
        </Layer>
      </Stage>
    </>
  )
}

export default App
