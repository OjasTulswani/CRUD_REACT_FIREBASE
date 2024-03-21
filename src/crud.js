import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import "./curd.css";
import { Form, Input, message } from "antd";

const Crud = () => {
  const [fetchData, setFetchData] = useState([]);
  const [form] = Form.useForm();
  const [selectedDocId, setSelectedDocId] = useState(null); // State variable to store the ID of the document being updated

  const dbref = collection(db, "CURD");

  const submitHandler = async (values) => {
    try {
      const { name, email, password } = values;
      if (selectedDocId) {
        // If a document ID is selected, update the document
        await updateDoc(doc(db, 'CURD', selectedDocId), { name, email, password });
        message.success("Successfully updated");
        setSelectedDocId(null); // Reset selected document ID
      } else {
        await addDoc(dbref, { name, email, password });
        message.success("Successfully submitted");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error);
      message.error("Failed to submit data");
    }
  };

  const passData = async (id) => {
    try {
      const matchId = fetchData.find((data) => data.id === id);
      if (matchId) {
        const { name, email, password } = matchId;
        form.setFieldsValue({
          name,
          email,
          password
        });
        setSelectedDocId(id); // Set selected document ID for update
      }
    } catch (error) {
      console.error("Error fetching document for update: ", error);
      message.error("Failed to fetch data for update");
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const fetchDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(dbref);
      const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFetchData(fetchedData);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, 'CURD', id));
      message.success("Successfully deleted");
      // Remove the deleted item from the fetched data
      setFetchData(fetchData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      message.error("Failed to delete data");
    }
  };


  return (
    <>
      <div className="form_container">
        <h2> Form </h2>
        <div className="box">
          <Form layout="vertical" form={form} onFinish={submitHandler}>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <button type="submit">{selectedDocId ? "Update Changes" : "Submit"}</button>
          </Form>
        </div>
      </div>

      <div className="database">
        <h2>CRUD database operations</h2>
        <div className="container">
          {fetchData.map((data) => (
            <div className="box" key={data.id}>
              <h3>Name: {data.name}</h3>
              <h3>E-mail: {data.email}</h3>
              <h3>Password: {data.password}</h3>
              <button onClick={() => deleteData(data.id)}>Delete</button>
              <button onClick={() => passData(data.id)}>Update</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Crud;
