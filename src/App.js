import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Btnscontrol from "./Components/Btnscontrol";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import { TaskesList } from "./context/Taskscontext";
import TasksList from "./Components/TasksList";
import { arEG } from "@mui/material/locale";
import Formadd from "./Components/Formadd";
import "./App.css";
import Typography from "@mui/material/Typography";
function App() {
  let tasks = [
    {
      id: 1,
      title: "المهمة الأولي",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 1",
    },
    {
      id: 2,
      title: "المهمة الثانية",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 2",
    },
    {
      id: 3,
      title: "المهمة الثالثة",
      body: "بعض من الامثلة علي نص المهمة الأولي والثانية والثالثة 3",
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
    },
    typography: {
      fontFamily: ["lalzer"],
    },
    arEG,
  });
  return (
    <ThemeProvider theme={themcolor}>
      <div className="App">
        <>
          <Container maxWidth="sm">
            <TaskesList.Provider value={tasks}>
              <Box
                sx={{
                  bgcolor: "#cfe8fc",
                  padding: "20px 5px",
                  marginTop: "80px",
                }}
              >
                <Typography variant="h2" component="h2">
                  قائمة المهام
                </Typography>
                <Divider />
                <Btnscontrol />
                <TasksList />
                <Formadd />
              </Box>
            </TaskesList.Provider>
          </Container>
        </>
      </div>
    </ThemeProvider>
  );
}

export default App;
