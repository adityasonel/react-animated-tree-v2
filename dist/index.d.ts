import { CSSProperties, ReactNode } from "react";
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
export default function Tree(props: ITree): import("react/jsx-runtime").JSX.Element;
export {};
