import { Map, Marker } from "pigeon-maps"
export function MyMap({height}:{height?:number}) {
  return (
    <Map height={height||150} defaultCenter={[28.626690, 77.385849]} defaultZoom={11}>
      <Marker width={50} anchor={[28.626690, 77.385849]} />
    </Map>
  )
}