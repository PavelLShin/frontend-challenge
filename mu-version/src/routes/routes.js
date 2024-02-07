import { LIKE_CATS, ALL_CATS } from './consts'
import LikeCats from '../Components/LikeCats'
import Cats from '../Components/Cats'

export const routes = [
  {
    path: LIKE_CATS,
    Component: LikeCats,
  },
  {
    path: ALL_CATS,
    Component: Cats,
  },
]
