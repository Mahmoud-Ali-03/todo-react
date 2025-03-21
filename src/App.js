import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import TasksList from "./Components/TasksList";
import { arEG } from "@mui/material/locale";
import Formadd from "./Components/Formadd";
import "./App.css";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Tasksprovider from "./context/Taskscontext";
import { Tostprovider } from "./context/TostContext";
function App() {
  let tasksHub = [
    {
      id: uuidv4(),
      title: "المهمة الأولي",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 1",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "المهمة الثانية",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 2",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "المهمة الثالثة",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 3",
      isComplete: false,
    },
  ];
  const themcolor = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
      btndonecolor: {
        main: "#65B741",
      },
      btneditcolor: {
        main: "#3081D0",
      },
      btnisdonecolor: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: ["lalzer"],
    },
    arEG,
  });
  const [newtask, setNewtask] = useState(tasksHub);
  return (
    <ThemeProvider theme={themcolor}>
      <Tostprovider>
        <div className="App">
          <>
            <Container maxWidth="sm">
              <Tasksprovider>
                <Box
                  sx={{
                    bgcolor: "#cfe8fc",
                    padding: "20px 5px",
                    marginTop: "80px",
                    maxHeight: "80vh",
                    overflow: "auto",
                  }}
                >
                  <Typography variant="h2" component="h2">
                    قائمة المهام
                  </Typography>
                  <Divider />
                  <TasksList />
                  <Formadd />
                </Box>
              </Tasksprovider>
            </Container>
          </>
        </div>
      </Tostprovider>
    </ThemeProvider>
  );
}

export default App;
