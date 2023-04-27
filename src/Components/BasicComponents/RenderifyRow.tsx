import React from "react"
import { Row, Col } from "reactstrap"

export interface IRow {
  className: string
}

export interface ICol {
  className?: string
  xs?: number
  xm?: number
  md?: number
  sm?: number
  lg?: number
  xl?: number
}

export type IRenderifyRowProps = {
  row?: IRow
  col?: ICol,
}

export const RenderifyRow: React.FC<React.PropsWithChildren<IRenderifyRowProps>> = function ({ row, col, children }) {
  return <Row {...row}><Col {...col}>{children}</Col></Row>
}

// export function RenderifyRow({ row, col, children }: IRenderifyRowProps): React.ReactNode {
//   // const { row, col } = this.props
//   return <Row {...row}><Col {...col}>{children}</Col></Row>
// }

// export class RenderifyRow extends React.Component<IRenderifyRow> {
//   render(): React.ReactChild {
//     const { row, col } = this.props
//     return <Row {...row}><Col {...col}>{this.props.children}</Col></Row>
//   }
// }
