import Button from "../../buttons/button.component";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

function DimensionSettings(props) {
  const theme = useTheme();
  return (
    <div className={"dimension-settings"}>
      <div className={styles.dimensionheader}>
        <Typography fontSize={14} fontWeight={600} color="text.secondary">
          {" "}
          سطر ها : <span>{props.rowDimension}</span>
        </Typography>
      </div>
      <div className={styles.buttonlist}>
        <Button
          buttonType="littlenum"
          onClick={() => props.functions.addRowToMatrix(props.id)}
        >
          +
        </Button>
        <Button
          buttonType="littlenum"
          onClick={() => props.functions.removeRowFromMatrix(props.id)}
        >
          -
        </Button>
      </div>
      <div className={styles.dimensionheader}>
        <Typography fontSize={14} fontWeight={600} color="text.secondary">
          {" "}
          ستون ها : <span>{props.columnDimension}</span>
        </Typography>
      </div>
      <div className={styles.buttonlist}>
        <Button
          buttonType="littlenum"
          variant="primary"
          onClick={() => props.functions.addColumnToMatrix(props.id)}
        >
          +
        </Button>
        <Button
          buttonType="littlenum"
          onClick={() => props.functions.removeColumnFromMatrix(props.id)}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default DimensionSettings;
