import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AddChocolate = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.chocolateName.value;
    const country = form.country.value;
    const category = form.category.value;
    console.log(name, country, category)
  }
  return (
    <div>
      <Header></Header>
      <Link to="/">
        <p>
          <i className="fa-solid fa-arrow-left-long me-2 my-3"></i>
          <span>All Chocolates</span>
        </p>
      </Link>
      <div className="bg-[#ece8e8] py-5 flex flex-col items-center">
        <div className="text-center my-5">
          <h3 className="text-2xl font-semibold mb-2">New Chocolates</h3>
          <p className="text-[16px] text-[#615d5d]">
            Use the below form to create a new product
          </p>
        </div>
        <form className="w-[60%] mx-atuo p-3 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="outline-none p-2 rounded-sm w-[100%]"
              placeholder="Hot Pink Chocolate"
              type="text"
              name="chocolateName"
              id="name"
            />
          </div>
          <div>
            <label className="block" htmlFor="country">
              Country
            </label>
            <input
              className="outline-none p-2 rounded-sm w-[100%]"
              placeholder="Enter Country Name"
              type="text"
              name="country"
              id="name"
            />
          </div>
          <div>
            <label className="block" htmlFor="country">
              Category
            </label>
            <select
              className="w-[100%] p-2 text-gray-500 outline-none"
              name="category"
              id="category"
            >
              <option value="Premium">Premium</option>
              <option value="Dark">Dark</option>
              <option value="Milk">Milk</option>
              <option value="Ruby">Ruby</option>
              <option value="White">White</option>
              <option value="Bittersweet">Bittersweet</option>
            </select>
          </div>
          <div>
            <button className="bg-[#91572B] w-[100%] rounded-sm p-2 text-white font-bold">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
