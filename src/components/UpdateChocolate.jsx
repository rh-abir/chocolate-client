import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {

const {id} = useParams();
// console.log(id)

  const handleUpdateChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.select.value;

    const updateChocolate = {
      name,
      country,
      category,
    };

    fetch(`http://localhost:5000/updatechoco/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Done!",
            text: "updaloade Your chocolate",
            icon: "success",
            confirmButtonText: "Done !",
          });
        }
      });

    // console.log(updateChocolate);
  };

  return (
    <div className="lg:mx-60">
      <div className="bg-[#1414140d] px-28 py-12">
        <h2 className="text-center text-[#141414] font-semibold text-2xl">
          Update Chocolates
        </h2>
        <p className="text-center text-[#141414]">
          Use the below form to create a new product
        </p>

        {/* add porduct form */}
        <form onSubmit={handleUpdateChocolate}>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here chocolate name"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">Country</span>
              </label>
              <input
                type="text"
                placeholder="Type here Country name"
                name="country"
                className="input input-bordered w-full "
              />
            </div>

            {/* input select */}
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text text-lg">Category</span>
              </label>
              <select name="select" className="select select-bordered">
                <option disabled>Premium</option>
                <option value="premium">Premium</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
            </div>
            <input
              type="submit"
              value="Update"
              className="btn btn-block bg-[#91572B]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
