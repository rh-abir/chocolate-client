import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolatesTables = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, photo, category } = chocolate;

  const handleDeleteChocolate = (id) => {
    // console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const resChocolates = chocolates.filter(cho => cho._id !== _id)
            setChocolates(resChocolates)
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{country}</td>
        <td>{category}</td>
        <th>
          <Link to={`updatechocolate/${_id}`}>
            <button className="btn btn-ghost btn-xs">Edite</button>
          </Link>
          <button
            onClick={() => handleDeleteChocolate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default ChocolatesTables;
