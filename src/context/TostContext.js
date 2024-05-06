import { createContext, useState, useContext } from "react";
import Mysnack from "../Components/Mysnack";

const TostContextShow = createContext({});
export const Tostprovider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [serv, setServ] = useState("success");
  const showsnakhide = (msg, serv) => {
    setOpen(true);
    setMsg(msg);
    setServ(serv);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  return (
    <TostContextShow.Provider value={{ showsnakhide }}>
      <Mysnack toshow={open} cusmsg={msg} serve={serv} />
      {children}
    </TostContextShow.Provider>
  );
};

export const useTost = () => {
  return useContext(TostContextShow);
};
