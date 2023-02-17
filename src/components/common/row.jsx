import styled from '@emotion/styled'
import { mq } from './config';
  
export const Row = styled.div`
  ${mq["sm"]} {
    width: ${props => props.sm/12*100}%
  }
  ${mq["md"]} {
      width: ${props => props.md/12*100}%
  }
  ${mq["lg"]} {
      width: ${props => props.lg/12*100}%
  }
  width: ${props => props.xs/12*100}%
`;