import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function CreateJob() {

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
    category: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const res =
        await axios.post(
          "http://localhost:5000/api/jobs/create",
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

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        experience: "",
        category: "",
        skills: "",
        description: "",
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    }

  };

  return (

    <div
      className="
      min-h-screen
      bg-gray-100
      flex
      justify-center
      items-center
      px-4
      sm:px-6
      lg:px-8
      py-8
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
        bg-white
        w-full
        max-w-2xl
        p-5
        sm:p-8
        lg:p-10
        rounded-xl
        shadow-xl
        "
      >

        <h2
          className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          mb-8
          text-center
          "
        >
          Create Job
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience Required"
          value={formData.experience}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        {/* CATEGORY */}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        >

          <option value="">
            Select Category
          </option>

          <option>MERN Stack</option>
          <option>Full Stack</option>
          <option>WordPress</option>
          <option>UI/UX Design</option>
          <option>AI/ML</option>
          <option>Data Science</option>
          <option>Python Developer</option>
          <option>Java Developer</option>
          <option>React Developer</option>
          <option>Node Developer</option>
          <option>DevOps Engineer</option>

        </select>

        <input
          type="text"
          name="skills"
          placeholder="Required Skills"
          value={formData.skills}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          mb-4
          "
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="
          w-full
          border
          p-3
          rounded
          h-32
          mb-4
          resize-none
          "
        />

        <button
          type="submit"
          className="
          bg-black
          hover:bg-gray-800
          text-white
          w-full
          py-3
          rounded-lg
          font-semibold
          transition
          "
        >
          Create Job
        </button>

      </form>

    </div>

  );

}

export default CreateJob;