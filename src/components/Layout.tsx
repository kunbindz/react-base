import { useState } from 'react'
import { Stage, Layer, Circle, Line } from 'react-konva'

interface CirclePos {
  x: number
  y: number
}

const Layout = () => {
  const [points, setPoints] = useState([600, 500, 1000, 500])
  const [circlePos, setCirclePos] = useState<CirclePos>()

  const handleLineClick = (event: any) => {
    const point = event.target.getRelativePointerPosition()
    setCirclePos(point)
  }

  const handleCircleDrag = (event: any) => {
    const { x, y } = event.target.position()
    const newPoints = [...points]
    let final = newPoints.splice(0)
    setPoints([final[0], final[1],x,y, final[final.length - 2], final[final.length - 1] ])
    setCirclePos({ x, y })
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
          }}
        />
      )
    }
  })

  return (
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
  )
}

export default Layout
