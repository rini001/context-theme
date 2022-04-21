import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Switch from "@mui/material/Switch";
import styles from "./Card.module.css";
const label = { inputProps: { "aria-label": "Switch demo" } };
export const Card = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
  // const [value,setValue]=useState(true)
  //   const handleChange=(e)=>{
  // setValue(e.target.checked)
  //   }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
        <h2>My Dashboard</h2>
        <Switch
          type="checkbox"
          // checked={isDark}
          onChange={toggleTheme}
          name="switch"
          color="secondary"
          {...label}
        />
        {/* <button onClick={toggleTheme}>Switch</button> */}
      </div>
      <div className={isDark ? styles.secondDiv1 : styles.secondDiv}>
        <h5>Active Users</h5>
        <hr />
        <div>
          <div className={styles.user1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
              alt=""
            />
            <div>User1</div>
          </div>
        </div>
        <div>
          <div className={styles.user1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
              alt=""
            />
            <div>User2</div>
          </div>
        </div>
        <div>
          <div className={styles.user1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
              alt=""
            />
            <div>User3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
