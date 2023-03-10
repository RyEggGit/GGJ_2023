import { useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import { brown } from "@material-ui/core/colors";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch } from "react-redux";
import { resetGame } from "../store/slice";

const PauseMenu = (props: any) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  };

  const toHome = () => {
    dispatch(resetGame());
  };

  return (
    <div className="absolute flex right-16 top-4 z-50">
      <div>
        <div>
          <PauseIcon
            onClick={handleOpen}
            sx={{ fontSize: 40, color: brown[500] }}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} style={{ outline: "none" }}>
              <div
                onClick={handleClose}
                className="flex justify-center items-center text-green-600 bg-orange-900 p-4 rounded-lg cursor-pointer mb-2"
              >
                <p className="text-4xl text-green-600">Resume</p>
                <PlayArrowIcon className="text-4xl" />
              </div>
              <div
                onClick={toHome}
                className="flex justify-center items-center text-green-600 bg-orange-900 p-4 rounded-lg cursor-pointer mb-2"
              >
                <p className="text-4xl text-green-600">Exit</p>
                <CloseIcon className="text-4xl" />
              </div>
              <div className="flex flex-col justify-center items-center text-green-600 bg-orange-900 p-4 rounded-lg cursor-default">
                <p className="text-green-600 text-2xl">Created by</p>
                <p className="text-green-600 text-2xl">Ryan Eggens, Nelson Loop,</p>
                <p className="text-green-600 text-2xl">Hayden Parsons,</p>
                <p className="text-green-600 text-2xl">Alexander Tsarapkine, Benjamin Zhao</p>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
