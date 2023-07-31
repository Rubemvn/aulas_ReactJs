import styles from './Cars.module.css'

const Cars = ({modelo, marca, placa, ano}) => {
  return (
    <div className={styles.contentCard}>
      <h2>{modelo}</h2>
      <h3>{marca}</h3>
      <h3>{placa}</h3>
      <h3>{ano}</h3>
    </div>
  )
}

export default Cars