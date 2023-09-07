import React from "react";
import Sidebar from "../Component/Sidebar";

const FormInput = () => {
  return (
    <div className="grid">
      <div className="flex gap-3">
        <Sidebar />

        <div className="w-[80%] border h-screen">
          <div className="p-10">
            {/* Hotl List */}
            <div className="text-5xl -semibold border-b-[5px] border-black py-5 mb-10">
              INPUT DATA
            </div>
            {/* Hotel List tutup */}

            {/* card input */}
            <div className=" bg-base-200 shadow-xl rounded-lg">
              <div className="">
                 <div className="bg-black text-white p-4 pl-8 font-semibold">HOTEL INFORMATION</div>
                 <div className="grid grid-cols-2 mt-5 p-4 pl-8">
                    <div>
                    <label htmlFor="" className="font-serif">Nama Hotel</label><br />
                    <input type="text" placeholder="Type here" className="mt-2 mb-5 input input-bordered w-full max-w-xs" /><br />
                    </div>

                    <div>
                    <label htmlFor="" className="font-serif">Lokasi</label><br />
                    <input type="text" placeholder="Type here" className="mt-2 mb-5 input input-bordered w-full max-w-xs" /><br />
                    </div>

                    <div>
                    <label htmlFor="" className="font-serif">Phone</label><br />
                    <input type="text" placeholder="Type here" className="mt-2 mb-5 input input-bordered w-full max-w-xs" /><br />
                    </div>

                    <div>
                    <label htmlFor="" className="font-serif">Pilih Kota</label><br />
                    <select className="select w-full max-w-xs mt-2 mb-5">
                    <option disabled selected>Kota</option>
                    <option>Jakarta</option>
                    <option>Bogor</option>
                    <option>Tangerang</option>
                    <option>Bekasi</option>
                    </select> <br />
                    </div>

                    <div>
                    <label htmlFor="" className="font-serif">Start</label><br />
                    <select className="select w-full max-w-xs mt-2 mb-5">
                    <option disabled selected>Start</option>
                    <option>1 Start</option>
                    <option>2 Start</option>
                    <option>3 Start</option>
                    <option>4 Start</option>
                    <option>5 Start</option>
                    </select><br />
                    </div>

                    <div>
                    <label htmlFor="" className="font-serif">Gambar Hotel</label><br />
                    <input type="file" className="mt-2 mb-5 file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                    <button className="btn btn-neutral">Submit</button>
                    </div>
                 </div>
              </div>
            </div>
            {/* tutup card input */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
