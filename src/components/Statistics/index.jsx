import { SectionStatistics, Item } from './statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <SectionStatistics>
      {title ? <h2 className="title">{title}</h2> : false}

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
            </Item>
          );
        })}
      </ul>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
