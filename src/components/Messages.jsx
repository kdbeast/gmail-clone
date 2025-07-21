import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../utils/appSlice";

const Messages = () => {
  const { emails, searchText } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const [tempEmails, setTempEmails] = useState(emails);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unSubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    const filteredEmails = emails.filter((email) => {
      return (
        email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
        email.to.toLowerCase().includes(searchText.toLowerCase()) ||
        email.message.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmails(filteredEmails);
  }, [searchText, emails]);

  return (
    <div>
      {tempEmails &&
        tempEmails.map((email) => <Message key={email.id} email={email} />)}
    </div>
  );
};

export default Messages;
