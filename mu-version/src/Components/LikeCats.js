import { useDispatch, useSelector } from 'react-redux'
import { selectCat } from '../Components/redux/slices/catsSlice'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import styles from './Cats.module.css'
import { toggleFavorite } from '../Components/redux/slices/catsSlice'

function LikeCats() {
  const dispatch = useDispatch()
  const cats = useSelector(selectCat)

  const likeCats = cats.filter((el) => !!el.isFavorite)

  return (
    <div className={styles.content_container}>
      {!!likeCats.length ? (
        likeCats.map((el, id) => {
          return (
            <div
              key={id}
              className={styles.item_container}
              style={{
                backgroundImage: `url(${el.url})`,
              }}
            >
              <div
                onClick={() => dispatch(toggleFavorite(el.id))}
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
        })
      ) : (
        <h2>Get kitty</h2>
      )}
    </div>
  )
}

export default LikeCats
