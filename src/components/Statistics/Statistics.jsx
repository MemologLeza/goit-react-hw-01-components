import PropTypes from "prop-types";
import styled from './Statistics.module.css';

const randomColor =()=> Math.floor(Math.random()*16777215).toString(16);
const Statistics = ({stats, title}) => {
    return <section className={styled.statistics}>
      {title ? <h2 className={styled.title}>{title}</h2>:""}
      <ul className={styled.statList}>
{stats.map((elem)=>(
  <li className={styled.item} key={elem.id} style={{ backgroundColor:"#"+ randomColor() }} >
    <span className={styled.label}>{elem.label}</span>
    <span className={styled.percentage}>{elem.percentage}%</span>
  </li>
))}
</ul>
</section>
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}
export default Statistics

