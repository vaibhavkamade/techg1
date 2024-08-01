import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import { toast } from "react-toastify";
import './AdminContact.css'

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contactData, setContactData] = useState([]);
  const getContactsData = async () => {
    try {
      const response = await fetch("https://techg1-4.onrender.com/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        }
      });
      const data = await response.json();
      console.log("Contact Data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`https://techg1-4.onrender.com/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <div className="admin-contact-container">
          <h1>Admin Contact Data</h1>
        </div>
        <div className="container admin-users">
          <div className="header-row">
            <div className="column">
              <h2>Username & Email</h2>
            </div>
            <div className="column">
              <h2>Message</h2>
            </div>
            <div className="column">
              <h2>Delete</h2>
            </div>
          </div>
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;
            return (
              <div className="data-row" key={index}>
                <div className="column">
                  <p>{username}</p>
                  <p>{email}</p>
                </div>
                <div className="column">
                  <p>{message}</p>
                </div>
                <div className="column">
                  <div className="col1">
                  <button className="admin-contact-btn" onClick={() => deleteContactById(_id)}>delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
  

};