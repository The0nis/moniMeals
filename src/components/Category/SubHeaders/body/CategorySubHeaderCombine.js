import React, {useState} from "react";
import SubHeader from "./CategorySubHeader";
import style from "./CategorySubHeaderCombine.module.css";
import { MdOutlineImportExport } from "react-icons/md";

const SubHeaderCombine = (props) => {
  return (
    <div className={style.header}>
      <div>
        <SubHeader title="Pick-Off" className={style.offs} />
      </div>

      <div className={style.direction}>
        <div className={style.directin}>
          <MdOutlineImportExport className={style.icon} />
        </div>
      </div>
      <div>
        <SubHeader title="Drop-Off" className={style.offs} />
      </div>
    </div>
  );
};

export default SubHeaderCombine;
