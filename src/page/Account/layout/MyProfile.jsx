import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { postMyInfo } from "../../../services/user/PostMyInfo";
import { updateMyInfo } from "../../../services/user/UpdateMyInfo";

const MyProfile = () => {
  const { session, fetchUser, user } = useContext(AuthContext);

  const [names, setNames] = useState("");
  const [surnames, setSurnames] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  // status
  const [stname, setstname] = useState(true);
  const [stsurnames, setstsurnames] = useState(true);
  const [stdocument, setstdocument] = useState(true);
  const [stphone, setstphone] = useState(true);

  const [save, setSave] = useState(false);
  const [show, setShow] = useState(false);

  const showMessage = (msg) => {
    return (
      <div className="">
        {" "}
        <h1 className="nnf-semi-bold">{msg}</h1>
      </div>
    );
  };

  const fetch = async () => {
    try {
      const { data } = await fetchUser();
      if (data[0]) {
        setNames(data[0].names);
        setSurnames(data[0].surnames);
        setDocument(data[0].document);
        setPhone(data[0].phone);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const update = async () => {
    const { data, error } = await updateMyInfo(session.user.id, {
      names,
      surnames,
      document,
      phone,
    });
    if (error) {
      console.log(error);
    }
    console.log(data)
  };

  const post = async () => {
    const { data, error } = await postMyInfo(session.user.id, {
      names,
      surnames,
      document,
      phone,
    });
    console.log(data);
    if (error) {
      console.log(error);
    }
  };

  const enableEdit = (item) => {
    switch (item) {
      case "names":
        setstname(false);
        break;
      case "surnames":
        setstsurnames(false);
        break;
      case "document":
        setstdocument(false);
        break;
      case "phone":
        setstphone(false);
        break;
      default:
        break;
    }
    setSave(true);
  };

  const handleSave = () => {
    setstname(true);
    setstsurnames(true);
    setstdocument(true);
    setstphone(true);
    setSave(false);
    if (!user) {
      console.log("post")
      post();

    } else {
      console.log("update")
      update();
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, []);

  return (
    <div className="m-4 w-11/12 flex-col rounded-xl bg-white p-6 shadow-lg md:w-9/12">
      <div className="">
        <h1 className="nnf-semi-bold pb-5 text-2xl">Personal Data</h1>
        <div className="grid md:h-80 grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name">Names:</label>
            <div className="flex">
              <input
                type="text"
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder="enter names"
                className="w-full border-b border-black outline-none"
                name="name"
                disabled={stname}
              />
              <button
                onClick={(e) => enableEdit("names")}
                className="flex items-center text-[20px] text-gray-500"
              >
                <span className="icon-[hugeicons--pencil]"></span>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Sur Names:</label>
            <div className="flex">
              <input
                type="text"
                value={surnames}
                onChange={(e) => setSurnames(e.target.value)}
                placeholder="enter surnames"
                className="w-full border-b border-black outline-none"
                name="name"
                disabled={stsurnames}
              />
              <button
                onClick={(e) => enableEdit("surnames")}
                className="flex items-center text-[20px] text-gray-500"
              >
                <span className="icon-[hugeicons--pencil]"></span>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Document:</label>
            <div className="flex">
              <input
                type="text"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                placeholder="enter document"
                className="w-full border-b border-black outline-none"
                name="name"
                disabled={stdocument}
              />
              <button
                onClick={(e) => enableEdit("document")}
                className="flex items-center text-[20px] text-gray-500"
              >
                <span className="icon-[hugeicons--pencil]"></span>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="w-full" htmlFor="name">
              Phone Number:
            </label>
            <div className="flex pr-2">
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+51 123 456 789"
                className="w-full border-b border-black outline-none"
                name="name"
                disabled={stphone}
              />
              <button
                onClick={(e) => enableEdit("phone")}
                className="flex items-center text-[20px] text-gray-500"
              >
                <span className="icon-[hugeicons--pencil]"></span>
              </button>
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <label htmlFor="name">Email:</label>
            <h2 className="text-gray-500">{session.user.email}</h2>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <button
              onClick={() => handleSave()}
              disabled={!save}
              className={
                save
                  ? "nnf-semi-bold w-1/2 rounded-xl bg-blue-500 py-2 text-white hover:bg-blue-700"
                  : "nnf-semi-bold w-1/2 rounded-xl bg-gray-300 py-2 text-gray-400"
              }
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
