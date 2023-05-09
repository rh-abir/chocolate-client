const ChocolatesTables = ({ chocolate }) => {

  const { name, country, photo, category } = chocolate;

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td>{country}</td>
        <td>{category}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default ChocolatesTables;
