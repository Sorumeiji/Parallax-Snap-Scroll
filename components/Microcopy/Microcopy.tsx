import { FunctionComponent } from "react";
import { TypeMicrocopy } from "../../generated/contentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Style from "./styles.module.scss";

export interface MicrocopyProps {
  entries: TypeMicrocopy[];
  id: string;
}

const Microcopy: FunctionComponent<MicrocopyProps> = ({ entries, id }) => {
  let microcopy = entries.find((entry) => entry.sys.id == id);

  if (
    typeof window !== "undefined" &&
    window.sessionStorage.getItem("editingMode")
  ) {
    // client side
    return (
      <span
        className={Style.editing}
        onClick={() => {
          window.open(
            `https://app.contentful.com/spaces/dtb5w0ega2aw/entries/${id}`,
            "_blank"
          );
        }}
      >
        {microcopy ? (
          microcopy.fields.content
        ) : (
          <FontAwesomeIcon icon={faTriangleExclamation} />
        )}
      </span>
    );
  } else {
    return (
      <>
        {microcopy ? (
          microcopy.fields.content
        ) : (
          <FontAwesomeIcon icon={faTriangleExclamation} />
        )}
      </>
    );
  }
};

export default Microcopy;