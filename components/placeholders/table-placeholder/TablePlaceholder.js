import Placeholder from 'react-bootstrap/Placeholder';

const TablePlaceholder = ({ rowsCount, columnsCount }) => {
  return (
    <>
      {Array(rowsCount)
        .fill()
        .map((_, rindex) => (
          <tr key={rindex}>
            {Array(columnsCount)
              .fill()
              .map((_, cindex) => (
                <td key={cindex}>
                  <Placeholder animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                </td>
              ))}
          </tr>
        ))}
    </>
  );
};

TablePlaceholder.defaultProps = {
  rowsCount: 12,
  columnsCount: 3,
};

export default TablePlaceholder;
