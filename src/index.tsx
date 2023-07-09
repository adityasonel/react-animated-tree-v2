import { CSSProperties, ReactNode, useState } from "react";
import { Spring, animated, config } from "react-spring/renderprops";
import * as Icons from "./icons";

interface IIcon {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

interface ITree {
  /**
   * Name of the node
   */
  content?: ReactNode;

  /**
   * Description of the node
   *
   * This is a good way to provide a custom icon for a node.
   */
  type?: ReactNode;

  /**
   * Default open state
   */
  open?: boolean;

  /**
   * Default visible state
   */
  visible?: boolean;

  /**
   * Whether or not an eye icon should be shown for the Tree
   *
   * Manage user interaction with the eye through the "onClick" prop.
   */
  canHide?: boolean;

  /**
   * Event handler for clicks on the eye
   */
  onClick?: (visible: boolean | undefined) => void;

  /**
   *
   * Custom react-spring animation config
   */
  springConfig?: (open: boolean | undefined) => object;

  /**
   * ItemId of the node
   *
   * Custom identifier of tree item
   */
  itemId?: string;

  /**
   * Events on the tree span item, parameters: itemId.
   */
  onItemClick?: (id: string | undefined) => void;

  /**
   * Events on the toggle icon, parameters: itemId, isOpen.
   */
  onItemToggle?: (id: string | undefined, open: boolean | undefined) => void;

  icons?: {
    /**
     * Plus icon
     */
    plusIcon?: ((props: IIcon) => ReactNode) | string;
    /**
     * Minus icon
     */
    minusIcon?: ((props: IIcon) => ReactNode) | string;
    /**
     * Close icon
     */
    closeIcon?: ((props: IIcon) => ReactNode) | string;
    /**
     * Hide(eye) icon
     */
    eyeIcon?: ((props: IIcon) => ReactNode) | string;
  };
  children?: ReactNode;
  style?: CSSProperties;
}

const treeStyles: {
  tree: CSSProperties;
  toggle: CSSProperties;
  type: CSSProperties;
  contents: CSSProperties;
} = {
  tree: {
    position: "relative",
    padding: "4px 0px 0px 0px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    verticalAlign: "middle",
  },
  toggle: {
    width: "1em",
    height: "1em",
    marginRight: 10,
    cursor: "pointer",
    verticalAlign: "middle",
  },
  type: {
    textTransform: "uppercase",
    fontFamily: "monospace",
    fontSize: "0.6em",
    verticalAlign: "middle",
  },
  contents: {
    willChange: "transform, opacity, height",
    marginLeft: 6,
    padding: "4px 0px 0px 14px",
    borderLeft: "1px dashed rgba(255,255,255,0.4)",
  },
};

export default function Tree(props: ITree) {
  const [open, setOpen] = useState(props.open);
  const [visible, setVisible] = useState(props.visible);
  const [immediate, setImmediate] = useState(false);
  const [id] = useState(props.itemId);

  const toggle = () => {
    if (typeof props.children !== "undefined") {
      const newOpen = !open;
      if (props.onItemToggle) {
        props.onItemToggle(id, newOpen);
      }
      setOpen(newOpen);
      setImmediate(false);
    }
  };

  const toggleVisibility = () => {
    const newVisible = !visible;
    setVisible(newVisible);
    setImmediate(true);
    if (props.onClick) {
      props.onClick(newVisible);
    }
  };

  const onItemClick = () => {
    if (props.onItemClick) {
      props.onItemClick(id);
    }
  };

  const { children, content, type, style, canHide, springConfig, icons } =
    props;

  const icon = children
    ? open
      ? icons?.minusIcon ?? "Minus"
      : icons?.plusIcon ?? "Plus"
    : icons?.closeIcon ?? "Close";
  const Icon = typeof icon === "string" ? Icons[icon] : icon;
  const IconEye = icons?.eyeIcon ?? Icons.Eye;

  return (
    <div style={{ ...treeStyles.tree, ...style }} className="treeview">
      <Icon
        className="toggle"
        style={{ ...treeStyles.toggle, opacity: children ? 1 : 0.3 }}
        onClick={toggle}
      />
      <span style={{ ...treeStyles.type, marginRight: type ? 10 : 0 }}>
        {type}
      </span>
      {canHide && (
        <IconEye
          className="toggle"
          style={{ ...treeStyles.toggle, opacity: visible ? 1 : 0.4 }}
          onClick={toggleVisibility}
        />
      )}
      <span onClick={onItemClick} style={{ verticalAlign: "middle" }}>
        {content}
      </span>
      <Spring
        native
        immediate={immediate}
        config={{
          ...config.default,
        }}
        from={{ height: 0, opacity: 0, transform: "translate3d(20px,0,0)" }}
        to={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          transform: open ? "translate3d(0px,0,0)" : "translate3d(20px,0,0)",
        }}
        {...(springConfig && springConfig(open))}
      >
        {(styles) => (
          <animated.div style={{ ...styles, ...treeStyles.contents }}>
            {children}
          </animated.div>
        )}
      </Spring>
    </div>
  );
}
