/*import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminJobs() {

  const [jobs, setJobs] = useState([]);

  const [editId, setEditId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });



  // Fetch Jobs
  const fetchJobs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(res.data.jobs);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchJobs();

  }, []);




  // Delete Job
  const deleteJob = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:5000/api/jobs/delete/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        res.data.message
      );

      fetchJobs();

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }

  };




  // Edit Button
  const editJob = (job) => {

    setEditId(job._id);

    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      description: job.description,
    });

  };




  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };




  // Update Job
  const updateJob = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/jobs/update/${editId}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        res.data.message
      );

      setEditId(null);

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

      fetchJobs();

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }

  };




  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Heading *//*}
      <h1 className="text-4xl font-bold mb-10">
        Admin Jobs Management
      </h1>



      {/* Edit Form *//*}
      {editId && (

        <form
          onSubmit={updateJob}
          className="bg-white p-8 rounded-lg shadow-lg mb-10"
        >

          <h2 className="text-3xl font-bold mb-5">
            Edit Job
          </h2>


          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />


          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded h-[120px]"
          />


          <button
            className="bg-black text-white px-5 py-3 rounded"
          >
            Update Job
          </button>

        </form>

      )}




      {/* Jobs List *//*}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-white p-6 rounded-lg shadow-lg"
          >

            <h2 className="text-2xl font-bold mb-2">
              {job.title}
            </h2>

            <p className="mb-2">
              Company : {job.company}
            </p>

            <p className="mb-2">
              Location : {job.location}
            </p>

            <p className="mb-2 text-green-500 font-bold">
              ₹ {job.salary}
            </p>

            <p className="mb-4">
              {job.description}
            </p>


            <div className="flex gap-3">

              {/* Edit *//*}
              <button
                onClick={() =>
                  editJob(job)
                }
                className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>


              {/* Delete *//*}
              <button
                onClick={() =>
                  deleteJob(job._id)
                }
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminJobs;*/






import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminJobs() {

  const [jobs, setJobs] = useState([]);

  const [editId, setEditId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });



  // Fetch Jobs
  const fetchJobs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(res.data.jobs);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchJobs();

  }, []);




  // Delete Job
  const deleteJob = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:5000/api/jobs/delete/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        res.data.message
      );

      fetchJobs();

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }

  };




  // Edit Button
  const editJob = (job) => {

    setEditId(job._id);

    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      description: job.description,
    });

  };




  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };




  // Update Job
  const updateJob = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/jobs/update/${editId}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        res.data.message
      );

      setEditId(null);

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

      fetchJobs();

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }

  };


return (
  <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
      Admin Jobs Management
    </h1>

    {/* Edit Form */}
    {editId && (

      <form
        onSubmit={updateJob}
        className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mb-10"
      >

        <h2 className="text-2xl sm:text-3xl font-bold mb-5">
          Edit Job
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded h-[120px]"
        />

        <button
          className="
          bg-black
          text-white
          px-5
          py-3
          rounded
          w-full
          sm:w-auto
          "
        >
          Update Job
        </button>

      </form>

    )}

    {/* Jobs List */}
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-6
      "
    >

      {jobs.map((job) => (

        <div
          key={job._id}
          className="
          bg-white
          p-5
          sm:p-6
          rounded-lg
          shadow-lg
          hover:shadow-xl
          transition
          "
        >

          <h2
            className="
            text-xl
            sm:text-2xl
            font-bold
            mb-2
            "
          >
            {job.title}
          </h2>

          <p className="mb-2 break-words">
            Company : {job.company}
          </p>

          <p className="mb-2 break-words">
            Location : {job.location}
          </p>

          <p className="mb-2 text-green-500 font-bold">
            ₹ {job.salary}
          </p>

          <p
            className="
            mb-4
            text-gray-700
            break-words
            "
          >
            {job.description}
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-3
            "
          >

            <button
              onClick={() =>
                editJob(job)
              }
              className="
              bg-blue-500
              text-white
              px-5
              py-2
              rounded
              hover:bg-blue-600
              w-full
              sm:w-auto
              "
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteJob(job._id)
              }
              className="
              bg-red-500
              text-white
              px-5
              py-2
              rounded
              hover:bg-red-600
              w-full
              sm:w-auto
              "
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>
);
}

export default AdminJobs;


