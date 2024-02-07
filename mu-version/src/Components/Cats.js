import { useEffect } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { selectCat } from '../Components/redux/slices/catsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats, toggleFavorite } from '../Components/redux/slices/catsSlice'
import styles from './Cats.module.css'

function Cats() {
  const cats = useSelector(selectCat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchCats(
        'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15'
      )
    )
  }, [dispatch])
  const handleToggleIsFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        {cats.map((el, id) => {
          return (
            <div
              key={id}
              className={styles.item_container}
              style={{
                backgroundImage: `url(${el.url})`,
              }}
            >
              <div
                onClick={() => {
                  handleToggleIsFavorite(el.id)
                  // localStorage.setItem(
                  //   'cats',
                  //   JSON.stringify(cats.filter((el) => !!el.isFavorite))
                  // )
                  // const a = JSON.parse(localStorage.getItem('cats'))
                  // console.log(a)
                  // console.log(cats)
                }}
                className={
                  el.isFavorite
                    ? styles.cats_item_btn_like
                    : styles.cats_item_btn
                }
              >
                {el.isFavorite ? (
                  <FaHeart style={{ width: '40px', height: '40px' }} />
                ) : (
                  <FaRegHeart style={{ width: '40px', height: '40px' }} />
                )}
              </div>
            </div>
          )
        })}
      </div>
      <span
        className={styles.cats_btn}
        onClick={() =>
          dispatch(
            fetchCats(
              'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=6'
            )
          )
        }
      >
        ...загружаем ещё котиков...
      </span>
    </div>
  )
}

export default Cats
